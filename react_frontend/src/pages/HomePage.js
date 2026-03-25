import React, { useState } from 'react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import FAQItem from '../components/FAQItem';
import PricingCard from '../components/PricingCard';
import CTAStrip from '../components/CTAStrip';
import './HomePage.css';

// PUBLIC_INTERFACE
/**
 * Home page component displaying hero, categories, devices, FAQ, and pricing sections
 */
function HomePage() {
  const [activeCategory, setActiveCategory] = useState('Movies');
  const [activePricing, setActivePricing] = useState('Monthly');

  const categories = [
    { title: 'Action', description: 'Adrenaline-pumping excitement and thrilling adventures', icon: '💥' },
    { title: 'Adventure', description: 'Epic journeys and exciting quests', icon: '🗺️' },
    { title: 'Comedy', description: 'Laughter and lighthearted entertainment', icon: '😂' },
    { title: 'Drama', description: 'Emotional stories and compelling narratives', icon: '🎭' },
    { title: 'Horror', description: 'Spine-chilling scares and suspense', icon: '👻' }
  ];

  const devices = [
    { title: 'Smartphones', description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store', icon: '📱' },
    { title: 'Tablet', description: 'StreamVibe is optimized for both Android and iOS tablets. Download our app from the Google Play Store or the Apple App Store', icon: '📱' },
    { title: 'Smart TV', description: 'StreamVibe app is available on major smart TV brands. Download our app from your TV\'s app store', icon: '📺' },
    { title: 'Laptops', description: 'StreamVibe is accessible on Mac and Windows laptops through web browsers', icon: '💻' },
    { title: 'Gaming Consoles', description: 'StreamVibe app is available on PlayStation and Xbox consoles', icon: '🎮' },
    { title: 'VR Headsets', description: 'StreamVibe app is available on major VR headsets for an immersive viewing experience', icon: '🥽' }
  ];

  const faqs = [
    {
      number: '01',
      question: 'What is StreamVibe?',
      answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
    },
    {
      number: '02',
      question: 'How much does StreamVibe cost?',
      answer: 'StreamVibe offers three plans: Basic ($9.99/month), Standard ($12.99/month), and Premium ($14.99/month).'
    },
    {
      number: '03',
      question: 'What content is available on StreamVibe?',
      answer: 'StreamVibe offers a wide variety of movies, TV shows, documentaries, and more across all genres.'
    },
    {
      number: '04',
      question: 'How can I watch StreamVibe?',
      answer: 'You can watch StreamVibe on smartphones, tablets, smart TVs, laptops, gaming consoles, and VR headsets.'
    },
    {
      number: '05',
      question: 'How do I sign up for StreamVibe?',
      answer: 'You can sign up for StreamVibe by clicking the "Start Free Trial" button and creating an account.'
    },
    {
      number: '06',
      question: 'What is the StreamVibe free trial?',
      answer: 'The StreamVibe free trial allows you to try our service for 30 days at no cost.'
    },
    {
      number: '07',
      question: 'How do I contact StreamVibe customer support?',
      answer: 'You can contact our customer support team through the Support page or by emailing support@streamvibe.com.'
    },
    {
      number: '08',
      question: 'What are the StreamVibe payment methods?',
      answer: 'We accept all major credit cards, debit cards, and PayPal.'
    }
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* Categories Section */}
      <section className="section categories-section">
        <div className="section-header">
          <div className="section-text">
            <h2 className="section-heading">Explore our wide variety of categories</h2>
            <p className="section-paragraph">
              Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
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
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
            />
          ))}
        </div>
      </section>

      {/* Devices Section */}
      <section className="section devices-section">
        <div className="section-text-full">
          <h2 className="section-heading">We Provide you streaming experience across various devices.</h2>
          <p className="section-paragraph">
            With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
          </p>
        </div>

        <div className="devices-grid">
          {devices.map((device, index) => (
            <CategoryCard
              key={index}
              title={device.title}
              description={device.description}
              icon={device.icon}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="section-header">
          <div className="section-text">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-paragraph">
              Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <button className="btn btn-primary">Ask a Question</button>
        </div>

        <div className="faq-grid">
          <div className="faq-column">
            {faqs.slice(0, 4).map((faq, index) => (
              <FAQItem
                key={index}
                number={faq.number}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
          <div className="faq-column">
            {faqs.slice(4, 8).map((faq, index) => (
              <FAQItem
                key={index}
                number={faq.number}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing-section">
        <div className="section-header">
          <div className="section-text">
            <h2 className="section-heading">Choose the plan that's right for you</h2>
            <p className="section-paragraph">
              Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
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

      {/* CTA Strip */}
      <section className="cta-section">
        <CTAStrip />
      </section>
    </div>
  );
}

export default HomePage;
