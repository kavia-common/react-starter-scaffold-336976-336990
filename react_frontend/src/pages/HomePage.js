import React, { useState } from 'react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import FAQItem from '../components/FAQItem';
import PricingCard from '../components/PricingCard';
import CTAStrip from '../components/CTAStrip';
import './HomePage.css';

/* =========================================
   Figma asset helpers
   Images live in public/figma/home-page/
   and are referenced via PUBLIC_URL so that
   Create React App serves them correctly.
   ========================================= */

/** Returns a path inside public/figma/home-page/ */
const figma = (filename) =>
  `${process.env.PUBLIC_URL}/figma/home-page/${filename}`;

/**
 * 2×2 image arrays for each genre category card.
 * Images come from the downloaded Figma assets.
 */
const CATEGORY_IMAGES = {
  Action: [
    figma('category_action_01.png'),
    figma('home_hero_tile_01.png'),   // supplemental tile
    figma('category_action_04.png'),
    figma('home_hero_tile_03.png'),   // supplemental tile
  ],
  Adventure: [
    figma('category_adventure_01.png'),
    figma('category_adventure_02.png'),
    figma('category_adventure_03.png'),
    figma('category_adventure_04.png'),
  ],
  Comedy: [
    figma('category_comedy_01.png'),
    figma('category_comedy_02.png'),
    figma('category_comedy_03.png'),
    figma('category_comedy_04.png'),
  ],
  Drama: [
    figma('category_drama_01.png'),
    figma('category_drama_02.png'),
    figma('category_drama_03.png'),
    figma('category_drama_04.png'),
  ],
  Horror: [
    figma('category_horror_01.png'),
    figma('category_horror_02.png'),
    figma('category_horror_03.png'),
    figma('category_horror_04.png'),
  ],
};

/* =========================================
   Static data
   ========================================= */

const CATEGORIES = [
  { title: 'Action',    images: CATEGORY_IMAGES.Action    },
  { title: 'Adventure', images: CATEGORY_IMAGES.Adventure },
  { title: 'Comedy',    images: CATEGORY_IMAGES.Comedy    },
  { title: 'Drama',     images: CATEGORY_IMAGES.Drama     },
  { title: 'Horror',    images: CATEGORY_IMAGES.Horror    },
];

const DEVICES = [
  {
    title: 'Smartphones',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: '📱',
  },
  {
    title: 'Tablet',
    description:
      'StreamVibe is optimized for both Android and iOS tablets. Download our app from the Google Play Store or the Apple App Store',
    icon: '📱',
  },
  {
    title: 'Smart TV',
    description:
      "StreamVibe app is available on major smart TV brands. Download our app from your TV's app store",
    icon: '📺',
  },
  {
    title: 'Laptops',
    description:
      'StreamVibe is accessible on Mac and Windows laptops through web browsers',
    icon: '💻',
  },
  {
    title: 'Gaming Consoles',
    description:
      'StreamVibe app is available on PlayStation and Xbox consoles',
    icon: '🎮',
  },
  {
    title: 'VR Headsets',
    description:
      'StreamVibe app is available on major VR headsets for an immersive viewing experience',
    icon: '🥽',
  },
];

const FAQS = [
  {
    number: '01',
    question: 'What is StreamVibe?',
    answer:
      'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    number: '02',
    question: 'How much does StreamVibe cost?',
    answer:
      'StreamVibe offers three plans: Basic ($9.99/month), Standard ($12.99/month), and Premium ($14.99/month).',
  },
  {
    number: '03',
    question: 'What content is available on StreamVibe?',
    answer:
      'StreamVibe offers a wide variety of movies, TV shows, documentaries, and more across all genres.',
  },
  {
    number: '04',
    question: 'How can I watch StreamVibe?',
    answer:
      'You can watch StreamVibe on smartphones, tablets, smart TVs, laptops, gaming consoles, and VR headsets.',
  },
  {
    number: '05',
    question: 'How do I sign up for StreamVibe?',
    answer:
      'You can sign up for StreamVibe by clicking the "Start Free Trial" button and creating an account.',
  },
  {
    number: '06',
    question: 'What is the StreamVibe free trial?',
    answer:
      'The StreamVibe free trial allows you to try our service for 30 days at no cost.',
  },
  {
    number: '07',
    question: 'How do I contact StreamVibe customer support?',
    answer:
      'You can contact our customer support team through the Support page or by emailing support@streamvibe.com.',
  },
  {
    number: '08',
    question: 'What are the StreamVibe payment methods?',
    answer: 'We accept all major credit cards, debit cards, and PayPal.',
  },
];

/* =========================================
   Page Component
   ========================================= */

// PUBLIC_INTERFACE
/**
 * HomePage
 *
 * Renders the StreamVibe Home Page (Figma: "Home Page – Laptop").
 * Sections:
 *   1. Hero – mosaic tile background with scrolling rows of movie images
 *   2. Categories – 5 genre cards each with a 2×2 image grid
 *   3. Devices – 6 device cards
 *   4. FAQ – accordion questions in two columns
 *   5. Pricing – three subscription plan cards
 *   6. CTA strip – free-trial call to action
 */
function HomePage() {
  const [activeCategory, setActiveCategory] = useState('Movies');
  const [activePricing, setActivePricing]   = useState('Monthly');

  return (
    <div className="home-page">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Categories Section */}
      <section className="section categories-section" id="categories">
        <div className="section-header">
          <div className="section-text">
            <h2 className="section-heading">
              Explore our wide variety of categories
            </h2>
            <p className="section-paragraph">
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </p>
          </div>
          <div className="section-tabs">
            <button
              className={`tab-button ${activeCategory === 'Movies' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Movies')}
            >
              Movies
            </button>
            <button
              className={`tab-button ${activeCategory === 'Shows' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Shows')}
            >
              Shows
            </button>
          </div>
        </div>

        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.title}
              title={cat.title}
              images={cat.images}
            />
          ))}
        </div>
      </section>

      {/* 3. Devices Section */}
      <section className="section devices-section" id="devices">
        <div className="section-text-full">
          <h2 className="section-heading">
            We Provide you streaming experience across various devices.
          </h2>
          <p className="section-paragraph">
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </p>
        </div>

        <div className="devices-grid">
          {DEVICES.map((device) => (
            <CategoryCard
              key={device.title}
              title={device.title}
              description={device.description}
              icon={device.icon}
            />
          ))}
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="section faq-section" id="faq">
        <div className="section-header">
          <div className="section-text">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-paragraph">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <button className="btn btn-primary">Ask a Question</button>
        </div>

        <div className="faq-grid">
          <div className="faq-column">
            {FAQS.slice(0, 4).map((faq, i) => (
              <FAQItem
                key={i}
                number={faq.number}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
          <div className="faq-column">
            {FAQS.slice(4, 8).map((faq, i) => (
              <FAQItem
                key={i}
                number={faq.number}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing Section */}
      <section className="section pricing-section" id="pricing">
        <div className="section-header">
          <div className="section-text">
            <h2 className="section-heading">
              Choose the plan that's right for you
            </h2>
            <p className="section-paragraph">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>
          <div className="section-tabs">
            <button
              className={`tab-button ${activePricing === 'Monthly' ? 'active' : ''}`}
              onClick={() => setActivePricing('Monthly')}
            >
              Monthly
            </button>
            <button
              className={`tab-button ${activePricing === 'Yearly' ? 'active' : ''}`}
              onClick={() => setActivePricing('Yearly')}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          <PricingCard
            plan="Basic Plan"
            description="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
            price="$9.99"
          />
          <PricingCard
            plan="Standard Plan"
            description="Access to a wider selection of movies and shows, including most new releases and exclusive content"
            price="$12.99"
          />
          <PricingCard
            plan="Premium Plan"
            description="Access to the widest selection of movies and shows, including all new releases and Offline Viewing"
            price="$14.99"
          />
        </div>
      </section>

      {/* 6. CTA Strip */}
      <section className="cta-section">
        <CTAStrip />
      </section>
    </div>
  );
}

export default HomePage;
