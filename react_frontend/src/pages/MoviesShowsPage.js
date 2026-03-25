import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moviesShowsHero from '../assets/figma/movies-shows-hero.png';
import './MoviesShowsPage.css';

/* =========================================
   Data
   ========================================= */

// Movie catalog data per genre-tab
const MOVIES_DATA = {
  trending: [
    { id: 1, title: 'Avengers: Endgame', year: '2019', genre: 'Action', rating: '9.0' },
    { id: 2, title: 'Spider-Man: No Way Home', year: '2021', genre: 'Action', rating: '8.5' },
    { id: 3, title: 'The Dark Knight', year: '2008', genre: 'Action', rating: '9.0' },
    { id: 4, title: 'Inception', year: '2010', genre: 'Sci-Fi', rating: '8.8' },
  ],
  newRelease: [
    { id: 5, title: 'Oppenheimer', year: '2023', genre: 'Drama', rating: '8.9' },
    { id: 6, title: 'Barbie', year: '2023', genre: 'Comedy', rating: '7.0' },
    { id: 7, title: 'Mission Impossible', year: '2023', genre: 'Action', rating: '7.8' },
    { id: 8, title: "Guardians Vol.3", year: '2023', genre: 'Action', rating: '7.9' },
  ],
  popular: [
    { id: 9, title: 'The Godfather', year: '1972', genre: 'Crime', rating: '9.2' },
    { id: 10, title: 'Interstellar', year: '2014', genre: 'Sci-Fi', rating: '8.6' },
    { id: 11, title: 'The Matrix', year: '1999', genre: 'Sci-Fi', rating: '8.7' },
    { id: 12, title: 'Forrest Gump', year: '1994', genre: 'Drama', rating: '8.8' },
  ],
  topRated: [
    { id: 13, title: "Schindler's List", year: '1993', genre: 'Drama', rating: '9.0' },
    { id: 14, title: 'The Shawshank Redemption', year: '1994', genre: 'Drama', rating: '9.3' },
    { id: 15, title: 'The Lord of the Rings', year: '2003', genre: 'Fantasy', rating: '9.0' },
    { id: 16, title: 'Pulp Fiction', year: '1994', genre: 'Crime', rating: '8.9' },
  ],
};

// Shows catalog data per genre-tab
const SHOWS_DATA = {
  trending: [
    { id: 1, title: 'Stranger Things', year: '2022', genre: 'Horror', rating: '8.7' },
    { id: 2, title: 'Breaking Bad', year: '2013', genre: 'Crime', rating: '9.5' },
    { id: 3, title: 'Game of Thrones', year: '2019', genre: 'Fantasy', rating: '9.2' },
    { id: 4, title: 'The Crown', year: '2023', genre: 'Drama', rating: '8.7' },
  ],
  newRelease: [
    { id: 5, title: 'The Last of Us', year: '2023', genre: 'Drama', rating: '8.8' },
    { id: 6, title: 'Wednesday', year: '2022', genre: 'Horror', rating: '7.8' },
    { id: 7, title: 'House of Dragon', year: '2023', genre: 'Fantasy', rating: '8.5' },
    { id: 8, title: 'Ted Lasso', year: '2023', genre: 'Comedy', rating: '8.8' },
  ],
  popular: [
    { id: 9, title: 'The Office', year: '2013', genre: 'Comedy', rating: '9.0' },
    { id: 10, title: 'Friends', year: '2004', genre: 'Comedy', rating: '8.9' },
    { id: 11, title: 'Chernobyl', year: '2019', genre: 'Drama', rating: '9.4' },
    { id: 12, title: 'Dark', year: '2020', genre: 'Sci-Fi', rating: '8.8' },
  ],
  topRated: [
    { id: 13, title: 'The Wire', year: '2008', genre: 'Crime', rating: '9.3' },
    { id: 14, title: 'The Sopranos', year: '2007', genre: 'Crime', rating: '9.2' },
    { id: 15, title: 'Band of Brothers', year: '2001', genre: 'War', rating: '9.5' },
    { id: 16, title: 'Planet Earth', year: '2006', genre: 'Documentary', rating: '9.4' },
  ],
};

// Genre accent colors
const GENRE_COLORS = {
  Action: '#E50000',
  Drama: '#3498DB',
  Comedy: '#F39C12',
  Horror: '#8E44AD',
  'Sci-Fi': '#2ECC71',
  Crime: '#E74C3C',
  Fantasy: '#9B59B6',
  War: '#95A5A6',
  Documentary: '#1ABC9C',
};

// Genre emoji icons
const GENRE_ICONS = {
  Action: '💥',
  Drama: '🎭',
  Comedy: '😂',
  Horror: '👻',
  'Sci-Fi': '🚀',
  Crime: '🔍',
  Fantasy: '🧙',
  War: '⚔️',
  Documentary: '📽️',
};

/* =========================================
   Sub-Components
   ========================================= */

/**
 * MovieCard - Renders an individual movie/show card in the catalog grid.
 * If `linkTo` is provided the card is wrapped in a React Router Link.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.year
 * @param {string} props.genre
 * @param {string} props.rating
 * @param {string} [props.linkTo] - Optional route to navigate to on click
 */
function MovieCard({ title, year, genre, rating, linkTo }) {
  const accentColor = GENRE_COLORS[genre] || '#333';
  const icon = GENRE_ICONS[genre] || '🎬';

  const cardContent = (
    <>
      <div className="movie-card-poster">
        <div
          className="movie-card-placeholder"
          style={{ background: `linear-gradient(135deg, ${accentColor}33, #1A1A1A 80%)` }}
        >
          <span className="movie-card-genre-icon">{icon}</span>
        </div>
        <div className="movie-card-overlay">
          <button className="movie-play-btn" aria-label={`Play ${title}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6.667 4.167L15.833 10l-9.166 5.833V4.167z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      <div className="movie-card-info">
        <h4 className="movie-card-title">{title}</h4>
        <div className="movie-card-meta">
          <span className="movie-card-year">{year}</span>
          <span className="movie-card-separator">·</span>
          <span className="movie-card-genre" style={{ color: accentColor }}>{genre}</span>
          <span className="movie-card-rating">⭐ {rating}</span>
        </div>
      </div>
    </>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="movie-card movie-card-link">
        {cardContent}
      </Link>
    );
  }

  return <div className="movie-card">{cardContent}</div>;
}

/**
 * CatalogSection - A complete movies or shows section with a label tag,
 * tab filters (Trending / New Release / Popular / Top Rated) and a 4-column grid.
 *
 * @param {Object} props
 * @param {string} props.title        - Section label displayed in the red tag ("Movies" or "Shows")
 * @param {Object} props.data         - Object keyed by tab name with arrays of items
 * @param {string} props.sectionId    - HTML id for anchor linking
 */
function CatalogSection({ title, data, sectionId }) {
  const [activeTab, setActiveTab] = useState('trending');

  const tabs = [
    { key: 'trending',   label: 'Trending'    },
    { key: 'newRelease', label: 'New Release'  },
    { key: 'popular',    label: 'Popular'      },
    { key: 'topRated',   label: 'Top Rated'    },
  ];

  const currentItems = data[activeTab] || [];

  return (
    <section className="catalog-section" id={sectionId}>
      {/* Header row: red label tag left, tab buttons right */}
      <div className="catalog-section-header">
        <div className="catalog-section-tag-wrap">
          <span className="catalog-section-tag">{title}</span>
        </div>
        <div className="catalog-section-tabs" role="tablist" aria-label={`${title} filters`}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`catalog-tab-btn${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid panel with dark bordered background */}
      <div className="catalog-grid-panel">
        <div className="catalog-grid">
          {currentItems.map(item => (
            <MovieCard
              key={item.id}
              title={item.title}
              year={item.year}
              genre={item.genre}
              rating={item.rating}
              linkTo={item.title === 'Stranger Things' ? '/shows/stranger-things' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   Main Page Component
   ========================================= */

// PUBLIC_INTERFACE
/**
 * MoviesShowsPage
 *
 * The Movies & Shows page of StreamVibe (Figma: "Movies & Shows Page - Laptop").
 * Layout:
 *   1. Hero – 709px tall with the movies-shows-hero.png background image,
 *      gradient overlay, movie title/description, Play Now button, secondary
 *      action icons, and carousel indicator controls.
 *   2. Movies catalog section
 *   3. Shows catalog section
 */
function MoviesShowsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const TOTAL_SLIDES = 5;

  const featuredMovie = {
    title: 'Avengers : Endgame',
    description:
      "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
  };

  const handlePrev = () => setCurrentSlide(s => Math.max(0, s - 1));
  const handleNext = () => setCurrentSlide(s => Math.min(TOTAL_SLIDES - 1, s + 1));

  return (
    <div className="movies-shows-page">
      {/* ---- Hero ---- */}
      <div className="ms-hero-wrapper">
        <div
          className="ms-hero"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0) 100%), url(${moviesShowsHero})`,
          }}
          role="img"
          aria-label="Featured movie: Avengers Endgame"
        >
          <div className="ms-hero-content">
            {/* Title + description */}
            <div className="ms-hero-text-container">
              <h1 className="ms-hero-title">{featuredMovie.title}</h1>
              <p className="ms-hero-description">{featuredMovie.description}</p>
            </div>

            {/* CTA row */}
            <div className="ms-hero-actions-row">
              <button className="ms-btn-play">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M6.667 4.167L15.833 10l-9.166 5.833V4.167z" fill="white" />
                </svg>
                Play Now
              </button>
              <div className="ms-secondary-btns">
                <button className="ms-icon-btn" aria-label="Add to watchlist">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4v12M4 10h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <button className="ms-icon-btn" aria-label="Like">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M14.17 3.583c-1.842 0-3.317 1.658-4.17 2.75-.853-1.092-2.328-2.75-4.17-2.75C3.655 3.583 2 5.238 2 7.33c0 2.393 2.155 4.25 5.417 7.12l2.583 2.133 2.583-2.133C15.845 11.58 18 9.723 18 7.33c0-2.092-1.655-3.747-3.83-3.747z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
                <button className="ms-icon-btn" aria-label="Volume">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3.333L5.833 7.5H2.5v5h3.333L10 16.667V3.333z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M14.167 6.667c1.25 1.25 1.25 5.416 0 6.666M16.667 4.167c2.5 2.5 2.5 9.166 0 11.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Carousel nav */}
            <div className="ms-carousel-row">
              <button className="ms-carousel-btn" onClick={handlePrev} aria-label="Previous slide">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12.5 15l-5-5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="ms-indicator-dots" role="tablist" aria-label="Slide indicators">
                {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === currentSlide}
                    aria-label={`Slide ${i + 1}`}
                    className={`ms-dot${i === currentSlide ? ' active' : ''}`}
                    onClick={() => setCurrentSlide(i)}
                  />
                ))}
              </div>

              <button className="ms-carousel-btn" onClick={handleNext} aria-label="Next slide">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Catalog Sections ---- */}
      <div className="ms-catalog-wrapper">
        <CatalogSection title="Movies" data={MOVIES_DATA} sectionId="movies-section" />
        <CatalogSection title="Shows"  data={SHOWS_DATA}  sectionId="shows-section"  />
      </div>
    </div>
  );
}

export default MoviesShowsPage;
