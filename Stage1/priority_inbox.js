const CATEGORY_WEIGHT = { placement: 3, result: 2, event: 1 };
const TOP_N = 10;

function priorityScore(notification) {
  const weight = CATEGORY_WEIGHT[notification.category] || 0;
  return weight * 1_000_000_000_000 + Math.floor(notification.createdAt.getTime() / 1000);
}

function display(notification) {
  return `[${notification.id}] ${notification.title} | ${notification.category} | ${notification.createdAt.toISOString()} | unread=${notification.unread}`;
}

function topUnreadNotifications(notifications) {
  return notifications
    .filter((notification) => notification.unread)
    .sort((a, b) => priorityScore(b) - priorityScore(a))
    .slice(0, TOP_N);
}

function demo() {
  const now = new Date();
  const notifications = [
    { id: 1, title: 'Career fair registration open', category: 'placement', createdAt: new Date(now - 5 * 60 * 1000), unread: true },
    { id: 2, title: 'Semester results published', category: 'result', createdAt: new Date(now - 60 * 60 * 1000), unread: true },
    { id: 3, title: 'Guest lecture today', category: 'event', createdAt: new Date(now - 15 * 60 * 1000), unread: true },
    { id: 4, title: 'Placement drive updated', category: 'placement', createdAt: new Date(now - 2 * 60 * 60 * 1000), unread: true },
    { id: 5, title: 'Result revaluation deadline', category: 'result', createdAt: new Date(now - 24 * 60 * 60 * 1000), unread: true },
    { id: 6, title: 'Cultural fest tomorrow', category: 'event', createdAt: new Date(now - 30 * 60 * 1000), unread: true },
    { id: 7, title: 'Internship shortlist released', category: 'placement', createdAt: new Date(now - 25 * 60 * 1000), unread: true },
    { id: 8, title: 'Midterm result correction', category: 'result', createdAt: new Date(now - 10 * 60 * 1000), unread: true },
  ];

  const topNotifications = topUnreadNotifications(notifications);
  console.log('Top unread priority notifications:');
  topNotifications.forEach((notification) => console.log(display(notification)));
}

if (require.main === module) demo();
