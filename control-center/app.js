const STALE_AFTER_MINUTES = 95;
const PIN_CODE = "4351";
const COMMAND_REPOSITORY = "ChekovDanil/NRAV";

const scheduleMap = {
  main: [8, 23, 38, 53],
  parallel: [45],
  qa: [28],
  product: [58],
  admin: [3],
  controller: [18],
};

const graphPositions = {
  main: { x: 20, y: 30, vx: 200, vy: 186 },
  parallel: { x: 80, y: 30, vx: 800, vy: 186 },
  qa: { x: 18, y: 72, vx: 180, vy: 446 },
  product: { x: 82, y: 72, vx: 820, vy: 446 },
  admin: { x: 50, y: 14, vx: 500, vy: 87 },
  controller: { x: 50, y: 88, vx: 500, vy: 546 },
};

const graphConnections = [
  ["main", "core"],
  ["parallel", "core"],
  ["qa", "core"],
  ["product", "core"],
  ["admin", "core"],
  ["controller", "core"],
  ["qa", "main"],
  ["product", "main"],
  ["controller", "main"],
  ["controller", "parallel"],
];

let currentData = null;
let selectedAgentId = "main";
let refreshTimer = null;
let clockTimer = null;

const nodes = {
  pinGate: document.querySelector("#pinGate"),
  pinForm: document.querySelector("#pinForm"),
  pinInput: document.querySelector("#pinInput"),
  pinError: document.querySelector("#pinError"),
  appShell: document.querySelector("#appShell"),
  lockButton: document.querySelector("#lockButton"),
  commandForm: document.querySelector("#commandForm"),
  commandInput: document.querySelector("#commandInput"),
  commandHint: document.querySelector("#commandHint"),
  health: document.querySelector("#health"),
  agents: document.querySelector("#agents"),
  timeline: document.querySelector("#timeline"),
  integrationMap: document.querySelector("#integrationMap"),
  snapshotAge: document.querySelector("#snapshotAge"),
  refreshButton: document.querySelector("#refreshButton"),
  sourceLine: document.querySelector("#sourceLine"),
  approvalPanel: document.querySelector("#approvalPanel"),
  approvalCount: document.querySelector("#approvalCount"),
  approvalList: document.querySelector("#approvalList"),
  notifyApprovals: document.querySelector("#notifyApprovals"),
  graphLines: document.querySelector("#graphLines"),
  graphNodes: document.querySelector("#graphNodes"),
  graphInspector: document.querySelector("#graphInspector"),
  graphClock: document.querySelector("#graphClock"),
  activityFeed: document.querySelector("#activityFeed"),
  tabs: [...document.querySelectorAll(".tab")],
  panels: [...document.querySelectorAll(".tab-panel")],
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function startTimers() {
  stopTimers();
  refreshTimer = window.setInterval(load, 60000);
  updateClock();
  clockTimer = window.setInterval(updateClock, 1000);
}

function stopTimers() {
  if (refreshTimer) window.clearInterval(refreshTimer);
  if (clockTimer) window.clearInterval(clockTimer);
  refreshTimer = null;
  clockTimer = null;
}

function unlock() {
  nodes.pinGate.hidden = true;
  nodes.appShell.classList.remove("is-locked");
  nodes.appShell.setAttribute("aria-hidden", "false");
  sessionStorage.setItem("nrav-control-unlocked", "1");
  startTimers();
  load();
}

function lock() {
  stopTimers();
  sessionStorage.removeItem("nrav-control-unlocked");
  nodes.appShell.classList.add("is-locked");
  nodes.appShell.setAttribute("aria-hidden", "true");
  nodes.pinGate.hidden = false;
  nodes.pinInput.value = "";
  nodes.pinError.textContent = "";
  nodes.pinInput.focus();
}

function handlePinSubmit(event) {
  event.preventDefault();
  const value = nodes.pinInput.value.trim();
  if (!/^\d{4}$/.test(value)) {
    nodes.pinError.textContent = "Введите 4 цифры.";
    return;
  }
  if (value !== PIN_CODE) {
    nodes.pinError.textContent = "Неверный код.";
    nodes.pinInput.select();
    return;
  }
  nodes.pinError.textContent = "";
  unlock();
}

function minutesSince(iso) {
  if (!iso) return null;
  const timestamp = Date.parse(iso);
  if (Number.isNaN(timestamp)) return null;
  return Math.max(0, Math.floor((Date.now() - timestamp) / 60000));
}

function formatAge(minutes) {
  if (minutes === null) return "ещё не запускался";
  if (minutes < 1) return "только что";
  if (minutes < 60) return minutes + " мин назад";
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? hours + " ч " + rest + " мин назад" : hours + " ч назад";
}

function formatClock(iso) {
  if (!iso) return "—";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
  }).format(date);
}

function effectiveStatus(agent) {
  if (agent.blocker) return "blocked";
  const age = minutesSince(agent.lastRun);
  if (age !== null && age > STALE_AFTER_MINUTES) return "stale";
  if (!agent.lastRun) return "waiting";
  return agent.status === "waiting" ? "waiting" : "active";
}

function statusLabel(status) {
  return {
    active: "активен",
    waiting: "ожидает",
    blocked: "блокер",
    stale: "нет сигнала",
  }[status] || status;
}

function scheduleLabel(agent) {
  if (agent.id === "main") return "каждые ~15 мин";
  const minutes = scheduleMap[agent.id] || [agent.scheduleMinute];
  return minutes
    .filter((minute) => Number.isFinite(minute))
    .map((minute) => ":" + String(minute).padStart(2, "0"))
    .join(", ") || "—";
}

function initials(agent) {
  const aliases = {
    main: "M",
    parallel: "R",
    qa: "QA",
    product: "P",
    admin: "A",
    controller: "C",
  };
  return aliases[agent.id] || String(agent.shortName || agent.name || "?").slice(0, 2).toUpperCase();
}

function renderHealth(data) {
  const statuses = data.agents.map(effectiveStatus);
  const active = statuses.filter((status) => status === "active").length;
  const attention = statuses.filter((status) => status === "blocked" || status === "stale").length;
  const main = data.agents.find((agent) => agent.id === "main");
  const mainAge = main ? formatAge(minutesSince(main.lastRun)) : "нет данных";
  const commits = data.agents.filter((agent) => agent.commit && agent.commit !== "—").length;

  nodes.health.innerHTML = [
    '<article class="health-card primary-health"><div class="health-value">~15 мин</div><div class="health-label">Цикл Main</div><div class="health-meta">Последний сигнал: ' + escapeHtml(mainAge) + "</div></article>",
    '<article class="health-card"><div class="health-value">' + active + '</div><div class="health-label">Активных агентов</div><div class="health-meta">из ' + data.agents.length + "</div></article>",
    '<article class="health-card"><div class="health-value">' + attention + '</div><div class="health-label">Нужно внимания</div><div class="health-meta">blocker / stale</div></article>',
    '<article class="health-card"><div class="health-value">' + commits + '</div><div class="health-label">Свежих веток</div><div class="health-meta">с подтверждённым commit</div></article>',
  ].join("");
}

function renderAgents(data) {
  const sorted = [...data.agents].sort((a, b) => {
    const order = ["main", "parallel", "qa", "product", "admin", "controller"];
    return order.indexOf(a.id) - order.indexOf(b.id);
  });

  nodes.agents.innerHTML = sorted
    .map((agent) => {
      const status = effectiveStatus(agent);
      const age = formatAge(minutesSince(agent.lastRun));
      const blocker = agent.blocker
        ? '<div><div class="label">Блокер</div><div class="value error-inline">' + escapeHtml(agent.blocker) + "</div></div>"
        : '<div><div class="label">Блокер</div><div class="value">нет</div></div>';
      return (
        '<article class="agent-row' + (agent.id === "main" ? " is-main" : "") + '" data-agent-row="' + escapeHtml(agent.id) + '">' +
          '<div class="agent-identity">' +
            '<div class="agent-avatar">' + escapeHtml(initials(agent)) + "</div>" +
            '<div class="agent-copy"><div class="agent-name">' + escapeHtml(agent.name) + '</div><div class="agent-focus">' + escapeHtml(agent.focus || "—") + "</div></div>" +
          "</div>" +
          '<div class="agent-state"><i class="dot ' + status + '"></i>' + escapeHtml(statusLabel(status)) + "</div>" +
          '<div class="agent-age">' + escapeHtml(age) + '<br><span class="code">' + escapeHtml(scheduleLabel(agent)) + "</span></div>" +
          '<div class="agent-result">' + escapeHtml(agent.lastResult || "—") + "</div>" +
          '<div class="agent-detail">' +
            '<div><div class="label">Ветка</div><div class="value code">' + escapeHtml(agent.branch || "—") + "</div></div>" +
            '<div><div class="label">Commit</div><div class="value code">' + escapeHtml(agent.commit || "—") + "</div></div>" +
            '<div><div class="label">Дальше</div><div class="value">' + escapeHtml(agent.next || "—") + "</div></div>" +
            blocker +
          "</div>" +
        "</article>"
      );
    })
    .join("");

  nodes.agents.querySelectorAll("[data-agent-row]").forEach((row) => {
    row.addEventListener("click", () => row.classList.toggle("is-open"));
  });
}

function timelineEntries(data) {
  const entries = [];
  data.agents.forEach((agent) => {
    const schedule = scheduleMap[agent.id] || [agent.scheduleMinute];
    schedule.forEach((minute) => {
      if (Number.isFinite(minute)) entries.push({ minute, label: agent.id === "main" ? "Main" : (agent.shortName || agent.name) });
    });
  });
  return entries.sort((a, b) => a.minute - b.minute);
}

function renderTimeline(data) {
  nodes.timeline.innerHTML = timelineEntries(data)
    .map((entry) => (
      '<article class="timeline-item"><div class="timeline-time">:' +
      String(entry.minute).padStart(2, "0") +
      '</div><div class="timeline-name">' +
      escapeHtml(entry.label) +
      "</div></article>"
    ))
    .join("");
}

function renderIntegrationMap(data) {
  const map = data.serverIntegrationMap || {};
  const entries = [
    ["Connected", map.connected],
    ["Partial", map.partial],
    ["Local / Mock", map.localOrMock],
    ["Claimed", map.claimed],
    ["Blocked", map.blocked],
  ];
  nodes.integrationMap.innerHTML = entries
    .map(([label, value]) => (
      '<article class="integration-card"><div class="integration-count">' +
      (Number.isFinite(value) ? value : "—") +
      '</div><div class="integration-name">' + escapeHtml(label) + "</div></article>"
    ))
    .join("");
}

function graphPoint(id) {
  if (id === "core") return { vx: 500, vy: 310 };
  return graphPositions[id] || { vx: 500, vy: 310 };
}

function renderGraph(data) {
  const byId = new Map(data.agents.map((agent) => [agent.id, agent]));
  nodes.graphLines.innerHTML = graphConnections
    .map(([from, to]) => {
      const a = graphPoint(from);
      const b = graphPoint(to);
      const sourceAgent = byId.get(from);
      const targetAgent = byId.get(to);
      const status = sourceAgent ? effectiveStatus(sourceAgent) : (targetAgent ? effectiveStatus(targetAgent) : "active");
      const className = status === "blocked" ? "graph-line blocked" : (status === "active" ? "graph-line hot" : "graph-line");
      return '<line class="' + className + '" x1="' + a.vx + '" y1="' + a.vy + '" x2="' + b.vx + '" y2="' + b.vy + '"></line>';
    })
    .join("");

  nodes.graphNodes.innerHTML = data.agents
    .map((agent) => {
      const pos = graphPositions[agent.id] || { x: 50, y: 50 };
      const status = effectiveStatus(agent);
      const selected = selectedAgentId === agent.id ? " is-selected" : "";
      return (
        '<button type="button" class="graph-node' + selected + '" data-graph-agent="' + escapeHtml(agent.id) + '" style="left:' + pos.x + "%;top:" + pos.y + '%">' +
          '<div class="graph-node-head"><span class="graph-node-name">' + escapeHtml(agent.shortName || agent.name) + '</span><i class="dot ' + status + '"></i></div>' +
          '<div class="graph-node-role">' + escapeHtml(agent.role || "agent") + "</div>" +
          '<div class="graph-node-task">' + escapeHtml(agent.focus || "—") + "</div>" +
        "</button>"
      );
    })
    .join("");

  nodes.graphNodes.querySelectorAll("[data-graph-agent]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedAgentId = button.dataset.graphAgent;
      renderGraph(data);
      renderInspector(data, selectedAgentId);
    });
  });

  renderInspector(data, selectedAgentId);
  renderActivity(data);
}

function renderInspector(data, agentId) {
  const agent = data.agents.find((item) => item.id === agentId) || data.agents[0];
  if (!agent) return;
  const status = effectiveStatus(agent);
  nodes.graphInspector.innerHTML =
    '<p class="eyebrow">Инспектор</p>' +
    '<h3>' + escapeHtml(agent.name) + "</h3>" +
    '<div class="inspector-status"><i class="dot ' + status + '"></i>' + escapeHtml(statusLabel(status)) + " · " + escapeHtml(formatAge(minutesSince(agent.lastRun))) + "</div>" +
    '<div class="inspector-grid">' +
      '<div class="inspector-block"><div class="label">Сейчас</div><div class="value">' + escapeHtml(agent.focus || "—") + "</div></div>" +
      '<div class="inspector-block"><div class="label">Последний результат</div><div class="value">' + escapeHtml(agent.lastResult || "—") + "</div></div>" +
      '<div class="inspector-block"><div class="label">Дальше</div><div class="value">' + escapeHtml(agent.next || "—") + "</div></div>" +
      '<div class="inspector-block"><div class="label">Ветка / commit</div><div class="value code">' + escapeHtml(agent.branch || "—") + "<br>" + escapeHtml(agent.commit || "—") + "</div></div>" +
      (agent.blocker ? '<div class="inspector-block"><div class="label">Блокер</div><div class="value error-inline">' + escapeHtml(agent.blocker) + "</div></div>" : "") +
    "</div>";
}

function renderActivity(data) {
  const activity = [...data.agents]
    .filter((agent) => agent.lastRun)
    .sort((a, b) => Date.parse(b.lastRun) - Date.parse(a.lastRun));

  nodes.activityFeed.innerHTML = activity
    .map((agent) => (
      '<article class="activity-item">' +
        '<div class="activity-time">' + escapeHtml(formatClock(agent.lastRun)) + "</div>" +
        '<div class="activity-agent">' + escapeHtml(agent.shortName || agent.name) + "</div>" +
        '<div>' + escapeHtml(agent.lastResult || agent.focus || "—") + "</div>" +
      "</article>"
    ))
    .join("") || '<div class="muted">Пока нет подтверждённой активности.</div>';
}


function decisionId(item) {
  return String(item.id ?? item.issueNumber ?? item.title ?? "");
}

function renderDecisions(items) {
  const decisions = Array.isArray(items) ? items : [];
  nodes.approvalCount.textContent = String(decisions.length);
  nodes.approvalPanel.classList.toggle("has-items", decisions.length > 0);

  if (!decisions.length) {
    nodes.approvalList.innerHTML = '<div class="approval-empty"><span class="approval-ok">✓</span><div><strong>Согласований нет</strong><div class="muted">Агенты могут продолжать автономную работу.</div></div></div>';
    return;
  }

  nodes.approvalList.innerHTML = decisions.map((item) => {
    const title = escapeHtml(item.title || "Нужно решение");
    const summary = escapeHtml(item.summary || item.reason || "Требуется решение владельца.");
    const role = escapeHtml(item.role || item.agent || "NRAV");
    const href = item.issueUrl ? escapeHtml(item.issueUrl) : "";
    const action = href ? '<a class="button subtle approval-link" href="' + href + '" target="_blank" rel="noopener noreferrer">Открыть</a>' : "";
    return '<article class="approval-item">' +
      '<div class="approval-item-main"><div class="approval-meta">' + role + '</div><div class="approval-title">' + title + '</div><div class="approval-summary">' + summary + '</div></div>' +
      action +
    '</article>';
  }).join("");
}

function notifyNewDecisions(items) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const decisions = Array.isArray(items) ? items : [];
  const seen = new Set(JSON.parse(localStorage.getItem("nrav-seen-decisions") || "[]"));
  const fresh = decisions.filter((item) => {
    const id = decisionId(item);
    return id && !seen.has(id);
  });
  if (!fresh.length) return;
  const first = fresh[0];
  new Notification("NRAV: нужно согласование", {
    body: first.title || first.summary || "Откройте Control Center.",
  });
  fresh.forEach((item) => seen.add(decisionId(item)));
  localStorage.setItem("nrav-seen-decisions", JSON.stringify([...seen].slice(-100)));
}

async function enableDecisionNotifications() {
  if (!("Notification" in window)) {
    nodes.notifyApprovals.textContent = "Не поддерживается";
    nodes.notifyApprovals.disabled = true;
    return;
  }
  const permission = await Notification.requestPermission();
  nodes.notifyApprovals.textContent = permission === "granted" ? "Уведомления ✓" : "Уведомления";
}

async function loadDecisions() {
  try {
    const response = await fetch("./data/decisions.json?t=" + Date.now(), { cache: "no-store" });
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data.decisions) ? data.decisions : [];
  } catch {
    return [];
  }
}

function handleCommandSubmit(event) {
  event.preventDefault();
  const prompt = nodes.commandInput.value.trim();
  if (!prompt) return;
  const compact = prompt.replace(/\s+/g, " ").slice(0, 72);
  const title = "[NRAV CONTROL][MAIN] " + compact;
  const body = [
    "## NRAV Control Center command",
    "",
    "Target: Main",
    "Created: " + new Date().toISOString(),
    "Source: control-center",
    "",
    "### Prompt",
    prompt,
    "",
    "> Команда должна приниматься агентом только если GitHub author — ChekovDanil.",
  ].join("\n");
  const url = new URL("https://github.com/" + COMMAND_REPOSITORY + "/issues/new");
  url.searchParams.set("title", title);
  url.searchParams.set("body", body);
  nodes.commandHint.textContent = "Открываю приватный GitHub. Проверь текст и нажми Create issue.";
  window.open(url.toString(), "_blank", "noopener,noreferrer");
}

function switchTab(tabName) {
  nodes.tabs.forEach((tab) => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
  nodes.panels.forEach((panel) => {
    const active = panel.dataset.panel === tabName;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  if (tabName === "graph" && currentData) renderGraph(currentData);
}

function updateClock() {
  if (!nodes.graphClock) return;
  nodes.graphClock.textContent = new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());
}

async function load() {
  nodes.refreshButton.disabled = true;
  nodes.refreshButton.textContent = "…";
  try {
    const [response, decisions] = await Promise.all([
      fetch("./data/agent-status.json?t=" + Date.now(), { cache: "no-store" }),
      loadDecisions(),
    ]);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    if (!Array.isArray(data.agents)) throw new Error("Некорректный формат статуса");
    currentData = data;
    renderHealth(data);
    renderAgents(data);
    renderTimeline(data);
    renderIntegrationMap(data);
    renderDecisions(decisions);
    notifyNewDecisions(decisions);
    renderGraph(data);
    nodes.snapshotAge.textContent = "снимок " + formatAge(minutesSince(data.generatedAt));
    nodes.sourceLine.textContent = "Источник: " + data.repository + " · " + data.integrationBranch;
  } catch (error) {
    const message = escapeHtml(error instanceof Error ? error.message : "Неизвестная ошибка");
    nodes.health.innerHTML = '<article class="health-card"><div class="health-label error-inline">Не удалось загрузить телеметрию: ' + message + "</div></article>";
    nodes.snapshotAge.textContent = "нет данных";
  } finally {
    nodes.refreshButton.disabled = false;
    nodes.refreshButton.textContent = "↻";
  }
}

nodes.pinForm.addEventListener("submit", handlePinSubmit);
nodes.pinInput.addEventListener("input", () => {
  nodes.pinInput.value = nodes.pinInput.value.replace(/\D/g, "").slice(0, 4);
  if (nodes.pinInput.value.length === 4) nodes.pinForm.requestSubmit();
});
nodes.lockButton.addEventListener("click", lock);
nodes.commandForm.addEventListener("submit", handleCommandSubmit);
nodes.refreshButton.addEventListener("click", load);
nodes.notifyApprovals.addEventListener("click", enableDecisionNotifications);
nodes.tabs.forEach((tab) => tab.addEventListener("click", () => switchTab(tab.dataset.tab)));

if (sessionStorage.getItem("nrav-control-unlocked") === "1") {
  unlock();
} else {
  lock();
}
