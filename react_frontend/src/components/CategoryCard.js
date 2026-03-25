import React from 'react';
import './CategoryCard.css';

// PUBLIC_INTERFACE
/**
 * Category card component matching the Figma Home Page – Categories section.
 *
 * Each card shows a 2×2 grid of movie images (with a fade-out bottom gradient)
 * sourced from the downloaded Figma assets, followed by a footer row containing
 * the genre title and a chevron-right arrow button.
 *
 * When `images` is not supplied the card falls back to an emoji icon.
 *
 * @param {Object}   props
 * @param {string}   props.title       - Genre/category name displayed in the footer
 * @param {string}   [props.description] - Optional description (not shown in image-card style)
 * @param {string}   [props.icon]      - Fallback emoji icon if no images provided
 * @param {string[]} [props.images]    - Array of exactly 4 image URLs for the 2×2 grid
 */
function CategoryCard({ title, description, icon, images }) {
  const hasImages = Array.isArray(images) && images.length >= 4;

  return (
    <div className="category-card" role="button" tabIndex={0} aria-label={`${title} category`}>
      {/* Image mosaic */}
      {hasImages ? (
        <div className="category-images">
          {images.slice(0, 4).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${title} category image ${idx + 1}`}
              className="category-img"
              loading="lazy"
            />
          ))}
          {/* Gradient overlay fades the bottom into the card background */}
          <div className="category-img-fade" aria-hidden="true" />
        </div>
      ) : (
        /* Emoji fallback when images array not provided */
        <div className="category-icon-fallback">
          <div className="icon-bg">
            <span className="icon-emoji">{icon}</span>
          </div>
        </div>
      )}

      {/* Footer: category name + arrow */}
      <div className="category-footer">
        <h3 className="category-title">{title}</h3>
        <button className="category-arrow" aria-label={`View ${title}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Optional description – visible only in device-card mode (no images) */}
      {!hasImages && description && (
        <p style={{
          fontFamily: 'var(--font-family)',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '1.5em',
          color: 'var(--grey-60)',
          margin: '8px 0 0 0',
        }}>
          {description}
        </p>
      )}
    </div>
  );
}

export default CategoryCard;
