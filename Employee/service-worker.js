self.addEventListener('push', function(event) {
  const data = event.data.json();
  const title = data.title || "Huffle's IT Alert";
  const options = {
    body: data.body || "You have a new cue or system alert.",
    icon: '/assets/icon.png', // optional
    badge: '/assets/badge.png' // optional
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
