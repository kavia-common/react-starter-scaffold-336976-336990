import React from 'react';
import './Footer.css';

// PUBLIC_INTERFACE
/**
 * Footer component with navigation links and social icons
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">Home</h4>
            <ul className="footer-list">
              <li><a href="#categories">Categories</a></li>
              <li><a href="#devices">Devices</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Movies</h4>
            <ul className="footer-list">
              <li><a href="#genres">Genres</a></li>
              <li><a href="#trending">Trending</a></li>
              <li><a href="#new-release">New Release</a></li>
              <li><a href="#popular">Popular</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Shows</h4>
            <ul className="footer-list">
              <li><a href="#genres">Genres</a></li>
              <li><a href="#trending">Trending</a></li>
              <li><a href="#new-release">New Release</a></li>
              <li><a href="#popular">Popular</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-list">
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Subscription</h4>
            <ul className="footer-list">
              <li><a href="#plans">Plans</a></li>
              <li><a href="#features">Features</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-social">
              <a href="#facebook" className="social-icon" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#twitter" className="social-icon" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>@2023 streamvibe, All Rights Reserved</p>
            <div className="footer-legal">
              <a href="#terms">Terms of Use</a>
              <span className="divider">|</span>
              <a href="#privacy">Privacy Policy</a>
              <span className="divider">|</span>
              <a href="#cookie">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
