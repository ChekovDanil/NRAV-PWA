const STALE_AFTER_MINUTES = 95;

const nodes = {
  health: document.querySelector("#health"),
  agents: document.querySelector("#agents"),
  timeline: document.querySelector("#timeline"),
  integrationMap: document.querySelector("#integrationMap"),
  snapshotAge: document.querySelector("#snapshotAge"),
  refreshButton: document.querySelector("#refreshButton"),
  sourceLine: document.querySelector("#sourceLine"),
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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
  if (minutes < 60) return `${minutes} мин назад`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} ч ${rest} мин назад` : `${hours} ч назад`;
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
    stale: "давно без сигнала",
  }[status] ?? status;
}

function renderHealth(data) {
  const statuses = data.agents.map(effectiveStatus);
  const active = statuses.filter((status) => status === "active").length;
  const attention = statuses.filter((status) => status === "blocked" || status === "stale").length;
  const lastCommitAgents = data.agents.filter((agent) => agent.commit && agent.commit !== "—").length;
  const cards = [
    ["Потоков", data.agents.length],
    ["Активных", active],
    ["Нужно внимания", attention],
    ["С commit", lastCommitAgents],
  ];
  nodes.health.innerHTML = cards
    .map(([label, value]) => `<article class="card"><div class="metric">${value}</div><div class="metric-label">${label}</div></article>`)
    .join("");
}

function renderAgents(data) {
  nodes.agents.innerHTML = data.agents
    .map((agent) => {
      const status = effectiveStatus(agent);
      const age = minutesSince(agent.lastRun);
      return `
        <article class="agent">
          <div class="agent-head">
            <div>
              <p class="eyebrow">${escapeHtml(agent.role)}</p>
              <h3>${escapeHtml(agent.name)}</h3>
              <div class="muted">${escapeHtml(agent.focus)}</div>
            </div>
            <div class="agent-status"><i class="dot ${status}"></i>${statusLabel(status)}</div>
          </div>
          <div class="agent-grid">
            <div><div class="label">Последний сигнал</div><div class="value">${formatAge(age)}</div></div>
            <div><div class="label">Расписание</div><div class="value">каждый час · :${String(agent.scheduleMinute).padStart(2, "0")}</div></div>
            <div><div class="label">Ветка</div><div class="value code">${escapeHtml(agent.branch || "—")}</div></div>
            <div><div class="label">Commit</div><div class="value code">${escapeHtml(agent.commit || "—")}</div></div>
            <div><div class="label">Последний результат</div><div class="value">${escapeHtml(agent.lastResult || "—")}</div></div>
            <div><div class="label">Дальше</div><div class="value">${escapeHtml(agent.next || "—")}</div></div>
          </div>
          ${agent.blocker ? `<div class="error"><div class="label">Блокер</div><div class="value">${escapeHtml(agent.blocker)}</div></div>` : ""}
        </article>
      `;
    })
    .join("");
}

function renderTimeline(data) {
  const agents = [...data.agents].sort((a, b) => a.scheduleMinute - b.scheduleMinute);
  nodes.timeline.innerHTML = agents
    .map((agent) => `
      <article class="timeline-item">
        <div class="timeline-time">:${String(agent.scheduleMinute).padStart(2, "0")}</div>
        <div class="timeline-name">${escapeHtml(agent.shortName || agent.name)}</div>
      </article>
    `)
    .join("");
}

function renderIntegrationMap(data) {
  const map = data.serverIntegrationMap ?? {};
  const entries = [
    ["Connected", map.connected],
    ["Partial", map.partial],
    ["Local / Mock", map.localOrMock],
    ["Claimed", map.claimed],
    ["Blocked", map.blocked],
  ];
  nodes.integrationMap.innerHTML = entries
    .map(([label, value]) => `
      <article class="integration-card">
        <div class="integration-count">${Number.isFinite(value) ? value : "—"}</div>
        <div class="integration-name">${label}</div>
      </article>
    `)
    .join("");
}

async function load() {
  nodes.refreshButton.disabled = true;
  nodes.refreshButton.textContent = "Обновляю…";
  try {
    const response = await fetch(`./data/agent-status.json?t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data.agents)) throw new Error("Некорректный формат статуса");
    renderHealth(data);
    renderAgents(data);
    renderTimeline(data);
    renderIntegrationMap(data);
    const snapshotAge = minutesSince(data.generatedAt);
    nodes.snapshotAge.textContent = `Снимок: ${formatAge(snapshotAge)}`;
    nodes.sourceLine.textContent = `Источник: ${data.repository} · ${data.integrationBranch}`;
  } catch (error) {
    const message = escapeHtml(error instanceof Error ? error.message : "Неизвестная ошибка");
    nodes.health.innerHTML = `<div class="error">Не удалось загрузить состояние: ${message}</div>`;
    nodes.agents.innerHTML = "";
    nodes.timeline.innerHTML = "";
    nodes.integrationMap.innerHTML = "";
    nodes.snapshotAge.textContent = "Нет данных";
  } finally {
    nodes.refreshButton.disabled = false;
    nodes.refreshButton.textContent = "Обновить";
  }
}

nodes.refreshButton.addEventListener("click", load);
load();
