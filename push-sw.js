/* Push only. This worker does not cache app pages or API responses. */
self.addEventListener("push", event => {
  let payload = {};
  try { payload = event.data?.json() ?? {}; } catch { payload = {}; }
  const title = typeof payload.title === "string" ? payload.title.slice(0, 80) : "НРАВ";
  const body = typeof payload.body === "string" ? payload.body.slice(0, 180) : "Новое уведомление";
  event.waitUntil(self.registration.showNotification(title, {
    body,
    icon: "/icon-192.png",
    badge: "/icon-192.png",
    tag: typeof payload.tag === "string" ? payload.tag.slice(0, 100) : undefined,
    data: { url: "/map?overlay=notifications" },
  }));
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  const destination = new URL("/map?overlay=notifications", self.location.origin).href;
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    const existing = windows.find(window => new URL(window.url).origin === self.location.origin);
    if (existing) {
      await existing.navigate(destination);
      return existing.focus();
    }
    return self.clients.openWindow(destination);
  })());
});
