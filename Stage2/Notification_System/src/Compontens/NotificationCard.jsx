function NotificationCard({ notification }) {
  const statusLabel = notification.unread ? 'New' : 'Viewed';

  return (
    <article className="notification-card">
      <div className="notification-row">
        <strong>{notification.title}</strong>
        <span className="badge">{notification.category}</span>
      </div>
      <div className="notification-row small">
        <span>{new Date(notification.createdAt).toLocaleString()}</span>
        <span>Priority {notification.priority}</span>
      </div>
      <div className={notification.unread ? 'status new' : 'status read'}>{statusLabel}</div>
    </article>
  );
}

export default NotificationCard;
