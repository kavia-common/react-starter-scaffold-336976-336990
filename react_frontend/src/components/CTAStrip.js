import React from 'react';
import './CTAStrip.css';

// PUBLIC_INTERFACE
/**
 * Call-to-action strip component with background images
 */
function CTAStrip() {
  return (
    <div className="cta-strip">
      <div className="cta-background">
        <div className="cta-fade-left"></div>
      </div>
      
      <div className="cta-content">
        <div className="cta-text">
          <h2 className="cta-heading">Start your free trial today!</h2>
          <p className="cta-paragraph">
            This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
          </p>
        </div>
        <button className="btn btn-primary cta-button">
          Start a Free Trail
        </button>
      </div>
    </div>
  );
}

export default CTAStrip;
