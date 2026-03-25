import React from 'react';
import './Hero.css';

// PUBLIC_INTERFACE
/**
 * Hero section component with background image and CTA
 * @param {Object} props - Component props
 * @param {string} props.backgroundImage - Path to hero background image
 * @param {string} props.title - Hero title text
 * @param {string} props.subtitle - Hero subtitle text
 */
function Hero({ backgroundImage = '/assets/home-hero-bg.png', title, subtitle }) {
  return (
    <div className="hero">
      <div className="hero-background">
        <img src={backgroundImage} alt="Hero background" className="hero-image" />
        <div className="hero-fade-top"></div>
        <div className="hero-fade-bottom"></div>
        <div className="hero-abstract"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {title || 'The Best Streaming Experience'}
          </h1>
          <p className="hero-subtitle">
            {subtitle || 'StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.'}
          </p>
        </div>
        <button className="btn btn-primary hero-cta">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66667 5L13.3333 10L6.66667 15V5Z" fill="white"/>
          </svg>
          Start Watching Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
