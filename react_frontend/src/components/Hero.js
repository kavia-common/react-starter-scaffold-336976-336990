import React from 'react';
import './Hero.css';

/**
 * All 36 hero tile images downloaded from Figma node 2006:2418.
 * They live in public/figma/home-page/ and are referenced as
 * process.env.PUBLIC_URL paths so CRA serves them correctly.
 */
const HERO_TILES = Array.from({ length: 36 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return `${process.env.PUBLIC_URL}/figma/home-page/home_hero_tile_${num}.png`;
});

/**
 * Split tiles into 4 rows of 9 each.
 * Each row is duplicated so the CSS scroll animation loops seamlessly.
 */
const ROWS = [
  HERO_TILES.slice(0, 9),
  HERO_TILES.slice(9, 18),
  HERO_TILES.slice(18, 27),
  HERO_TILES.slice(27, 36),
];

// PUBLIC_INTERFACE
/**
 * Hero section component for the StreamVibe Home Page.
 *
 * Renders a fullscreen mosaic of movie-tile images (4 scrolling rows)
 * sourced from the Figma design assets, overlaid with gradient fades
 * and a centred headline + CTA button.
 *
 * @param {Object} props - Component props
 * @param {string} [props.title]    - Override hero title text
 * @param {string} [props.subtitle] - Override hero subtitle text
 */
function Hero({ title, subtitle }) {
  return (
    <div className="hero">
      {/* Mosaic background – 4 rows of tiles that scroll left/right */}
      <div className="hero-mosaic" aria-hidden="true">
        {ROWS.map((row, rowIdx) => (
          <div key={rowIdx} className="hero-mosaic-row">
            {/* Duplicate the row so the loop appears infinite */}
            {[...row, ...row].map((src, tileIdx) => (
              <img
                key={tileIdx}
                src={src}
                alt=""
                className="hero-tile"
                loading="lazy"
                draggable="false"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Gradient fades */}
      <div className="hero-fade-top" />
      <div className="hero-fade-bottom" />
      <div className="hero-abstract" />

      {/* Centred headline + CTA */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {title || 'The Best Streaming Experience'}
          </h1>
          <p className="hero-subtitle">
            {subtitle ||
              'StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more.'}
          </p>
        </div>
        <button className="hero-cta">
          {/* Play icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M8 5L19 12L8 19V5Z" fill="white" />
          </svg>
          Start Watching Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
