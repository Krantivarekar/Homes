import React from 'react';
import { Link } from 'react-router-dom';
import CircleProgress from './CircleProgress'; // Import the CircleProgress component

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <nav>
          <ul>
            <li><Link to="/profile">User Profile</Link></li>
            <li><Link to="/tracking">Tracking</Link></li>
            <li><Link to="/final-reporting">Final Reporting</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
      </header>

      {/* Place the progress tracker here so it’s visible across pages */}
      <CircleProgress />

      <main>
        {children} {/* The content of the current page */}
      </main>

      <footer>
        <p>&copy; 2024 Research Monitoring Dashboard</p>
      </footer>
    </div>
  );
};

export default Layout;
