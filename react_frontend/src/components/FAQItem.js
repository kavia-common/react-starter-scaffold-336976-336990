import React, { useState } from 'react';
import './FAQItem.css';

// PUBLIC_INTERFACE
/**
 * FAQ accordion item component
 * @param {Object} props - Component props
 * @param {string} props.number - FAQ number
 * @param {string} props.question - FAQ question
 * @param {string} props.answer - FAQ answer
 */
function FAQItem({ number, question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="faq-number-question">
          <span className="faq-number">{number}</span>
          <h3 className="faq-question">{question}</h3>
        </div>
        <button className="faq-toggle" aria-label={isOpen ? 'Collapse' : 'Expand'}>
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQItem;
