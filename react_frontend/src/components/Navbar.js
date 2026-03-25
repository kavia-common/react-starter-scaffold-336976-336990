import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// PUBLIC_INTERFACE
/**
 * Navbar component for StreamVibe OTT platform.
 * Displays logo (SVG icon + text), navigation menu tabs,
 * and search/notification icon buttons.
 * Active tab is determined by current route path.
 */
function Navbar() {
  const location = useLocation();

  /**
   * Determines if a nav path is active.
   * Movies & Shows tab is active for both /movies-shows and /shows routes.
   * @param {string} path - Route path to check
   * @returns {boolean}
   */
  const isActive = (path) => {
    if (path === '/movies-shows') {
      return location.pathname === '/movies-shows' || location.pathname.startsWith('/shows');
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="StreamVibe Home">
          <div className="logo-icon">
            {/* StreamVibe flame/logo icon in red */}
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="50" height="50" rx="10" fill="#E50000" />
              <path
                d="M25 8C25 8 14 18 14 27C14 33.075 18.925 38 25 38C31.075 38 36 33.075 36 27C36 18 25 8 25 8Z"
                fill="white"
                opacity="0.9"
              />
              <path
                d="M25 16C25 16 19 22.5 19 27C19 30.3 21.7 33 25 33C28.3 33 31 30.3 31 27C31 22.5 25 16 25 16Z"
                fill="#E50000"
              />
              <circle cx="25" cy="28" r="3" fill="white" opacity="0.8" />
            </svg>
          </div>
          <div className="logo-text">
            {/* StreamVibe wordmark */}
            <svg width="113" height="17" viewBox="0 0 113 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <text
                x="0"
                y="14"
                fontFamily="Manrope, sans-serif"
                fontWeight="700"
                fontSize="14"
                fill="white"
                letterSpacing="0.5"
              >
                StreamVibe
              </text>
            </svg>
          </div>
        </Link>

        {/* Navigation Menu */}
        <div className="navbar-menu" role="navigation" aria-label="Main navigation">
          <Link
            to="/"
            className={`nav-button ${isActive('/') && !isActive('/movies-shows') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/movies-shows"
            className={`nav-button ${isActive('/movies-shows') ? 'active' : ''}`}
          >
            Movies &amp; Shows
          </Link>
          <Link
            to="/support"
            className={`nav-button ${isActive('/support') ? 'active' : ''}`}
          >
            Support
          </Link>
          <Link
            to="/subscriptions"
            className={`nav-button ${isActive('/subscriptions') ? 'active' : ''}`}
          >
            Subscriptions
          </Link>
        </div>

        {/* Action Icons: Search + Notification */}
        <div className="navbar-actions">
          <button className="icon-button" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
              <path d="M20 20l-4-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button className="icon-button" aria-label="Notifications">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.73 21a2 2 0 01-3.46 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
