import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// PUBLIC_INTERFACE
/**
 * Navbar component for StreamVibe OTT platform
 * Displays logo, navigation menu, search and notification icons
 */
function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Home');

  // PUBLIC_INTERFACE
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <img src="/assets/logo-icon.svg" alt="StreamVibe" />
          </div>
          <div className="logo-text">
            <img src="/assets/streamvibe-text.svg" alt="StreamVibe" />
          </div>
        </Link>

        <div className="navbar-menu">
          <Link 
            to="/" 
            className={`nav-button ${isActive('/') ? 'active' : ''}`}
            onClick={() => setActiveTab('Home')}
          >
            Home
          </Link>
          <Link 
            to="/movies-shows" 
            className={`nav-button ${isActive('/movies-shows') ? 'active' : ''}`}
            onClick={() => setActiveTab('Movies & Shows')}
          >
            Movies & Shows
          </Link>
          <Link 
            to="/support" 
            className={`nav-button ${isActive('/support') ? 'active' : ''}`}
            onClick={() => setActiveTab('Support')}
          >
            Support
          </Link>
          <Link 
            to="/subscriptions" 
            className={`nav-button ${isActive('/subscriptions') ? 'active' : ''}`}
            onClick={() => setActiveTab('Subscriptions')}
          >
            Subscriptions
          </Link>
        </div>

        <div className="navbar-actions">
          <button className="icon-button" aria-label="Search">
            <img src="/assets/search-icon.svg" alt="Search" />
          </button>
          <button className="icon-button" aria-label="Notifications">
            <img src="/assets/notification-icon.svg" alt="Notifications" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
