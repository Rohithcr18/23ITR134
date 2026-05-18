function Navbar({ activePage, onSelectPage }) {
  return (
    <header className="navbar">
      <div className="brand">Notification Dashboard</div>
      <nav>
        <button className={activePage === 'all' ? 'active' : ''} onClick={() => onSelectPage('all')}>
          All Notifications
        </button>
        <button className={activePage === 'priority' ? 'active' : ''} onClick={() => onSelectPage('priority')}>
          Priority
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
