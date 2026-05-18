import { useEffect, useMemo, useState } from 'react';
import { fetchNotifications } from '../Services/Api.jsx';
import FilterBar from '../Compontens/FilterBar.jsx';
import Pagination from '../Compontens/Pagination.jsx';
import NotificationCard from '../Compontens/NotificationCard.jsx';

const PAGE_SIZE = 4;

function Index() {
  const [notifications, setNotifications] = useState([]);
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchNotifications({ category })
      .then((data) => {
        setNotifications(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]);

  const filteredNotifications = useMemo(() => {
    return notifications;
  }, [notifications]);

  const totalPages = Math.max(1, Math.ceil(filteredNotifications.length / PAGE_SIZE));
  const visibleNotifications = filteredNotifications.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [category]);

  return (
    <main className="page">
      <header>
        <h1>All Notifications</h1>
        <p>Browse latest notifications with category filters and pagination.</p>
      </header>

      <FilterBar category={category} onChangeCategory={setCategory} />

      {loading ? (
        <p className="status">Loading notifications...</p>
      ) : error ? (
        <p className="status">{error}</p>
      ) : visibleNotifications.length === 0 ? (
        <p className="status">No notifications available.</p>
      ) : (
        <div className="notification-grid">
          {visibleNotifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </div>
      )}

      <Pagination page={page} totalPages={totalPages} onChangePage={setPage} />
    </main>
  );
}

export default Index;
