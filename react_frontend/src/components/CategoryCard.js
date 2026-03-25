import React from 'react';
import './CategoryCard.css';

// PUBLIC_INTERFACE
/**
 * Card component for displaying categories or devices
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 * @param {string} props.icon - Icon/emoji for the card
 */
function CategoryCard({ title, description, icon }) {
  return (
    <div className="category-card">
      <div className="category-icon">
        <div className="icon-bg">
          <span className="icon-emoji">{icon}</span>
        </div>
        <button className="category-arrow" aria-label="View category">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="category-content">
        <h3 className="category-title">{title}</h3>
        <p className="category-description">{description}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
