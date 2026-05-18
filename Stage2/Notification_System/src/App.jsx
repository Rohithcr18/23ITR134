import { useState } from 'react';
import './App.css';
import Navbar from './Compontens/Navbar.jsx';
import Index from './Pages/Index.jsx';
import Priority from './Pages/Priority.jsx';

function App() {
  const [activePage, setActivePage] = useState('all');

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} onSelectPage={setActivePage} />
      <div className="page-container">
        {activePage === 'priority' ? <Priority /> : <Index />}
      </div>
    </div>
  );
}

export default App;
