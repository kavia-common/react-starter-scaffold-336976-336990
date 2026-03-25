import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import showsOpenHero from '../assets/figma/shows-open-hero.png';
import './ShowsOpenPage.css';

/* =========================================
   Data
   ========================================= */

const SEASONS = [
  {
    season: 1, year: 2016,
    episodes: [
      { num: 1, title: 'The Vanishing of Will Byers',  duration: '49 min', description: "On his way home from a friend's house, young Will sees something terrifying. Nearby, a strange girl is on the run from sinister agents." },
      { num: 2, title: 'The Weirdo on Maple Street',    duration: '56 min', description: "Lucas, Mike, and Dustin try to talk to the girl they've found. Joyce makes a startling discovery. Jonathan finds Will's bike." },
      { num: 3, title: 'Holly, Jolly',                   duration: '51 min', description: 'An unlikely partnership uncovers the truth. Hopper makes a discovery, while Nancy and Jonathan form an unlikely alliance.' },
      { num: 4, title: 'The Body',                       duration: '55 min', description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.' },
      { num: 5, title: 'The Flea and the Acrobat',       duration: '51 min', description: "Hopper breaks into the lab while Nancy and Jonathan take target practice. The boys ask Mr. Clarke how to travel to another dimension." },
      { num: 6, title: 'The Monster',                    duration: '46 min', description: "Eleven's flashback reveals the monstrous truth. Will tells Joyce he needs to hide. Hopper reemerges with some unexpected help." },
      { num: 7, title: 'The Bathtub',                    duration: '41 min', description: 'Eleven and the boys build a sensory deprivation tank. Nancy and Jonathan gather weapons. Joyce and Hopper move closer to the truth.' },
      { num: 8, title: 'The Upside Down',                duration: '55 min', description: "Dr. Brenner holds Hopper and Joyce for questioning. A frantic race to save Will begins, but can it all end well for the Hawkins crew?" },
    ],
  },
  {
    season: 2, year: 2017,
    episodes: [
      { num: 1, title: 'MADMAX',                   duration: '50 min', description: "It's been nearly a year since Will's strange disappearance. A mysterious new girl arrives in Hawkins." },
      { num: 2, title: 'Trick or Treat, Freak',    duration: '56 min', description: "After Will sees something terrible on trick-or-treat night, Mike wonders if Eleven is still out there." },
      { num: 3, title: 'The Pollywog',              duration: '51 min', description: 'Dustin makes a discovery in his trash can. Will experiences something nightmarish. Lucas tells Max about the Demogorgon.' },
      { num: 4, title: 'Will the Wise',             duration: '46 min', description: 'An ailing Will opens up to Joyce; Hopper digs for the truth; Eleven searches for answers.' },
    ],
  },
  {
    season: 3, year: 2019,
    episodes: [
      { num: 1, title: 'Suzie, Do You Copy?',               duration: '50 min', description: "Summer brings new jobs and budding romance. But the mood shifts when Dustin's radio picks up a Russian broadcast." },
      { num: 2, title: 'The Mall Rats',                      duration: '55 min', description: "Nancy and Jonathan follow a lead, Steve and Dustin track the signal, and the Mind Flayer turns to a new host." },
      { num: 3, title: 'The Case of the Missing Lifeguard', duration: '51 min', description: "El and Max grow closer. Billy falls under the Mind Flayer's control. Joyce and Hopper look into the mall's secret." },
      { num: 4, title: 'The Sauna Test',                    duration: '52 min', description: "A code red brings the gang back together to face a frighteningly familiar evil." },
    ],
  },
  {
    season: 4, year: 2022,
    episodes: [
      { num: 1, title: 'The Hellfire Club',   duration: '76 min', description: "It's March 1986, and Hawkins is preparing for Spring Break. Mike, Dustin, and Lucas juggle high school with saving the world." },
      { num: 2, title: "Vecna's Curse",       duration: '75 min', description: "A plane crash upends Hopper's plans. The frightened residents of Hawkins investigate a new horrifying death." },
      { num: 3, title: 'The Monster and the Superhero', duration: '63 min', description: 'Murray and Joyce fly to Alaska. Eleven faces school and new problems. Dustin and Steve analyse a particle.' },
      { num: 4, title: 'Dear Billy',          duration: '79 min', description: 'Max is in danger. Eleven fights to regain her powers. Hopper makes a risky decision.' },
    ],
  },
];

const CAST = [
  { name: 'Millie Bobby Brown', role: 'Eleven',       avatar: '👧' },
  { name: 'Finn Wolfhard',      role: 'Mike Wheeler', avatar: '👦' },
  { name: 'Gaten Matarazzo',    role: 'Dustin',       avatar: '👦' },
  { name: 'Caleb McLaughlin',   role: 'Lucas',        avatar: '👦' },
  { name: 'Noah Schnapp',       role: 'Will Byers',   avatar: '👦' },
  { name: 'Sadie Sink',         role: 'Max Mayfield', avatar: '👧' },
];

const REVIEWS = [
  { user: 'Alex M.',  rating: 5, text: 'One of the best shows ever made! The nostalgia, the characters, the story – everything is perfect.' },
  { user: 'Sarah K.', rating: 5, text: 'Incredible show! Season 4 was especially mind-blowing. Cannot wait for the finale.' },
  { user: 'John D.',  rating: 4, text: 'Great show with amazing production quality. The Vecna storyline in S4 was genius.' },
  { user: 'Emma R.',  rating: 5, text: 'Perfect blend of horror, sci-fi, and coming-of-age drama. Highly recommend!' },
];

const LANGUAGES  = ['English', 'Spanish', 'French', 'German', 'Japanese'];
const GENRES     = ['Sci-Fi', 'Horror', 'Drama', 'Mystery'];

/* =========================================
   Helper sub-components
   ========================================= */

/**
 * StarRating – renders up to 5 star icons with filled/empty state.
 * @param {Object} props
 * @param {number} props.rating - Number of filled stars (0-5)
 */
function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={`star${i <= rating ? ' filled' : ''}`} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

/**
 * EpisodeRow – one episode item in the seasons list.
 * @param {Object} props
 * @param {Object} props.episode   - Episode data object
 * @param {boolean} props.isActive - Whether this episode is currently selected
 * @param {Function} props.onSelect
 */
function EpisodeRow({ episode, isActive, onSelect }) {
  return (
    <div
      className={`episode-row${isActive ? ' active' : ''}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect()}
      aria-pressed={isActive}
      aria-label={`Episode ${episode.num}: ${episode.title}`}
    >
      <span className="ep-num">{String(episode.num).padStart(2, '0')}</span>
      <div className="ep-info">
        <span className="ep-title">{episode.title}</span>
        <span className="ep-desc">{episode.description}</span>
      </div>
      <span className="ep-duration">{episode.duration}</span>
    </div>
  );
}

/* =========================================
   Main Page Component
   ========================================= */

// PUBLIC_INTERFACE
/**
 * ShowsOpenPage
 *
 * The Shows detail page for Stranger Things (Figma: "Shows Page Open – Laptop").
 * Layout:
 *   1. Hero – 709 px tall with shows-open-hero.png background, gradient overlay,
 *      show title/description, Play Now + secondary action buttons.
 *   2. Two-column detail section:
 *      Left  – Seasons & Episodes accordion, Description card, Cast grid, Reviews grid.
 *      Right – Info panel (year, languages, ratings, genres, director, music).
 */
function ShowsOpenPage() {
  const [activeSeason,  setActiveSeason]  = useState(1);
  const [activeEpisode, setActiveEpisode] = useState(1);

  const currentSeason = SEASONS.find(s => s.season === activeSeason) || SEASONS[0];

  const show = {
    title:       'Stranger Things',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    year:        2022,
    creator:     'The Duffer Brothers',
    music:       'Kyle Dixon & Michael Stein',
  };

  return (
    <div className="shows-open-page">
      {/* ---- Hero ---- */}
      <div className="so-hero-wrapper">
        <div
          className="so-hero"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0) 100%), url(${showsOpenHero})`,
          }}
          role="img"
          aria-label={`Featured show: ${show.title}`}
        >
          <div className="so-hero-content">
            <div className="so-hero-text">
              <h1 className="so-hero-title">{show.title}</h1>
              <p className="so-hero-desc">{show.description}</p>
            </div>

            <div className="so-hero-actions">
              <button className="so-btn-play">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M6.667 4.167L15.833 10l-9.166 5.833V4.167z" fill="white" />
                </svg>
                Play Now
              </button>
              <div className="so-secondary-btns">
                <button className="so-icon-btn" aria-label="Add to watchlist">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4v12M4 10h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <button className="so-icon-btn" aria-label="Like">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14.17 3.583c-1.842 0-3.317 1.658-4.17 2.75-.853-1.092-2.328-2.75-4.17-2.75C3.655 3.583 2 5.238 2 7.33c0 2.393 2.155 4.25 5.417 7.12l2.583 2.133 2.583-2.133C15.845 11.58 18 9.723 18 7.33c0-2.092-1.655-3.747-3.83-3.747z" stroke="white" strokeWidth="1.5" />
                  </svg>
                </button>
                <button className="so-icon-btn" aria-label="Volume">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3.333L5.833 7.5H2.5v5h3.333L10 16.667V3.333z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M14.167 6.667c1.25 1.25 1.25 5.416 0 6.666M16.667 4.167c2.5 2.5 2.5 9.166 0 11.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Detail Content ---- */}
      <div className="so-detail">
        {/* Left column */}
        <div className="so-left">

          {/* Seasons & Episodes */}
          <div className="so-card so-seasons-card">
            <div className="so-seasons-top">
              <h2 className="so-card-heading">Seasons and Episodes</h2>
              <div className="so-season-tabs">
                {SEASONS.map(s => (
                  <button
                    key={s.season}
                    className={`so-season-btn${activeSeason === s.season ? ' active' : ''}`}
                    onClick={() => { setActiveSeason(s.season); setActiveEpisode(1); }}
                    aria-pressed={activeSeason === s.season}
                  >
                    Season {s.season}
                  </button>
                ))}
              </div>
            </div>
            <div className="so-episodes">
              {currentSeason.episodes.map(ep => (
                <EpisodeRow
                  key={ep.num}
                  episode={ep}
                  isActive={activeEpisode === ep.num}
                  onSelect={() => setActiveEpisode(ep.num)}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="so-card so-desc-card">
            <span className="so-label">Description</span>
            <p className="so-body-text">{show.description}</p>
          </div>

          {/* Cast */}
          <div className="so-card so-cast-card">
            <div className="so-card-row-header">
              <div className="so-card-heading-group">
                <h3 className="so-card-heading-sm">Cast</h3>
                <span className="so-count-badge">{CAST.length} Actors</span>
              </div>
              <Link to="/movies-shows" className="so-see-all-link">See All</Link>
            </div>
            <div className="so-cast-grid">
              {CAST.map((actor, i) => (
                <div key={i} className="so-cast-item">
                  <span className="so-cast-avatar">{actor.avatar}</span>
                  <div className="so-cast-text">
                    <span className="so-cast-name">{actor.name}</span>
                    <span className="so-cast-role">{actor.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="so-card so-reviews-card">
            <div className="so-card-row-header">
              <div className="so-card-heading-group">
                <h3 className="so-card-heading-sm">Reviews</h3>
                <span className="so-count-badge">{REVIEWS.length} Reviews</span>
              </div>
              <div className="so-review-nav">
                <button className="so-nav-btn" aria-label="Previous reviews">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8l4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="so-nav-btn" aria-label="Next reviews">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="so-reviews-grid">
              {REVIEWS.map((r, i) => (
                <div key={i} className="so-review-item">
                  <div className="so-reviewer-row">
                    <span className="so-reviewer-avatar" aria-hidden="true">{r.user[0]}</span>
                    <div>
                      <span className="so-reviewer-name">{r.user}</span>
                      <StarRating rating={r.rating} />
                    </div>
                  </div>
                  <p className="so-review-text">{r.text}</p>
                </div>
              ))}
            </div>
            <button className="so-btn-add-review">+ Add Your Review</button>
          </div>
        </div>

        {/* Right column: Info panel */}
        <aside className="so-right">
          {/* Released Year */}
          <div className="so-info-row">
            <div className="so-info-label">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="2" y="3" width="12" height="12" rx="2" stroke="#999" strokeWidth="1.2" />
                <path d="M5 1v2M11 1v2M2 7h12" stroke="#999" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              Released Year
            </div>
            <span className="so-info-value">{show.year}</span>
          </div>

          {/* Languages */}
          <div className="so-info-row">
            <div className="so-info-label">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6" stroke="#999" strokeWidth="1.2" />
                <path d="M8 2c0 0-2.5 2.5-2.5 6S8 14 8 14" stroke="#999" strokeWidth="1.2" />
                <path d="M8 2c0 0 2.5 2.5 2.5 6S8 14 8 14" stroke="#999" strokeWidth="1.2" />
                <path d="M2 8h12" stroke="#999" strokeWidth="1.2" />
              </svg>
              Available Languages
            </div>
            <div className="so-tags-wrap">
              {LANGUAGES.map(l => <span key={l} className="so-tag">{l}</span>)}
            </div>
          </div>

          {/* Ratings */}
          <div className="so-info-row">
            <div className="so-info-label">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1l1.854 4.546H15l-4.064 2.91 1.562 4.77L8 10.472l-4.498 2.754 1.562-4.77L1 5.546h5.146L8 1z" stroke="#999" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
              Ratings
            </div>
            <div className="so-ratings-col">
              <div className="so-rating-row">
                <span className="so-rating-src">IMDb</span>
                <StarRating rating={4} />
              </div>
              <div className="so-rating-row">
                <span className="so-rating-src">Streamvibe</span>
                <StarRating rating={5} />
              </div>
            </div>
          </div>

          {/* Genres */}
          <div className="so-info-row">
            <div className="so-info-label">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="6" height="6" rx="1" stroke="#999" strokeWidth="1.2" />
                <rect x="9" y="1" width="6" height="6" rx="1" stroke="#999" strokeWidth="1.2" />
                <rect x="1" y="9" width="6" height="6" rx="1" stroke="#999" strokeWidth="1.2" />
                <rect x="9" y="9" width="6" height="6" rx="1" stroke="#999" strokeWidth="1.2" />
              </svg>
              Genres
            </div>
            <div className="so-tags-wrap">
              {GENRES.map(g => <span key={g} className="so-tag">{g}</span>)}
            </div>
          </div>

          {/* Director */}
          <div className="so-info-row">
            <div className="so-info-label">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="5" r="3" stroke="#999" strokeWidth="1.2" />
                <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#999" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              Director
            </div>
            <div className="so-person-tag">
              <span className="so-person-avatar">🎬</span>
              <span className="so-person-name">{show.creator}</span>
            </div>
          </div>

          {/* Music */}
          <div className="so-info-row">
            <div className="so-info-label">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M9 2v9" stroke="#999" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M9 2l4 1.5" stroke="#999" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="6" cy="11" r="2" stroke="#999" strokeWidth="1.2" />
              </svg>
              Music
            </div>
            <div className="so-person-tag">
              <span className="so-person-avatar">🎵</span>
              <span className="so-person-name">{show.music}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ShowsOpenPage;
