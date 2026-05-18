const API_BASE = 'http://localhost:3000/evaluation-service/notifications';

export async function fetchNotifications({ category = 'all' } = {}) {
  const query = new URLSearchParams();
  if (category && category !== 'all') {
    query.append('category', category);
  }

  const url = query.toString() ? `${API_BASE}?${query}` : API_BASE;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load notifications (${response.status})`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : data.notifications || [];
}

export function getPriorityScore(notification) {
  return notification.priority * 1000 + new Date(notification.createdAt).getTime() / 1000;
}
