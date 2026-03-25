import React from 'react';
import './PricingCard.css';

// PUBLIC_INTERFACE
/**
 * Pricing card component for subscription plans
 * @param {Object} props - Component props
 * @param {string} props.plan - Plan name (Basic, Standard, Premium)
 * @param {string} props.description - Plan description
 * @param {string} props.price - Plan price
 */
function PricingCard({ plan, description, price }) {
  return (
    <div className="pricing-card">
      <div className="pricing-header">
        <h3 className="pricing-plan">{plan}</h3>
        <p className="pricing-description">{description}</p>
      </div>
      
      <div className="pricing-price">
        <span className="price-amount">{price}</span>
        <span className="price-period">/month</span>
      </div>

      <div className="pricing-features">
        <button className="btn btn-secondary pricing-trial">Start Free Trial</button>
        <button className="btn btn-primary pricing-choose">Choose Plan</button>
      </div>
    </div>
  );
}

export default PricingCard;
