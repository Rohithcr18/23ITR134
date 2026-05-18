import { useEffect, useMemo, useState } from 'react';
import { fetchNotifications, getPriorityScore } from '../Services/Api.jsx';
import FilterBar from '../Compontens/FilterBar.jsx';
import NotificationCard from '../Compontens/NotificationCard.jsx';

function Priority() {
  const [notifications, setNotifications] = useState([]);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications().then((data) => {
      setNotifications(data);
      setLoading(false);
    });
  }, []);

  const topNotifications = useMemo(() => {
    const filtered = notifications.filter((notification) => {
      return category === 'all' || notification.category === category;
    });

    return filtered
      .slice()
      .sort((a, b) => getPriorityScore(b) - getPriorityScore(a))
      .slice(0, 5);
  }, [notifications, category]);

  return (
    <main className="page">
      <header>
        <h1>Priority Notifications</h1>
        <p>View the top five notifications sorted by priority and time.</p>
      </header>

      <FilterBar category={category} onChangeCategory={setCategory} />

      {loading ? (
        <p className="status">Loading notifications...</p>
      ) : topNotifications.length === 0 ? (
        <p className="status">No priority notifications available.</p>
      ) : (
        <div className="notification-grid">
          {topNotifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Priority;
