import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PortfolioCard from './PortfolioCard';
import Lightbox from './Lightbox';
import SectionHeading from './SectionHeading';
import { PORTFOLIO_ITEMS } from '../data/eventsData';

export default function PortfolioGallery({
  isHomePage = false,
  limit = null,
  showHeading = true,
  theme = 'dark'
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'private', label: 'Private' },
    { id: 'decor', label: 'Décor' }
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayedItems.length) % displayedItems.length);
    }
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedItems.length);
    }
  };

  return (
    <section className={`portfolio-section ${theme === 'dark' ? 'section-dark' : 'section-light'}`}>
      <div className="container">
        {showHeading && (
          <SectionHeading
            eyebrow="OUR WORK"
            title="Moments We've"
            italicWord="Created"
            description="Explore our gallery of royal wedding celebrations, high-profile corporate galas, and bespoke décor installations across Karachi."
            theme={theme}
          />
        )}

        {/* Filter Navigation */}
        <div className="portfolio-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.label}</span>
              {activeCategory === cat.id && <span className="active-pill-glow"></span>}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="portfolio-grid">
          {displayedItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              onOpenLightbox={handleOpenLightbox}
            />
          ))}
        </div>

        {/* Full Portfolio CTA (if on Home page) */}
        {isHomePage && (
          <div className="portfolio-cta-wrap text-center">
            <Link to="/portfolio" className="btn btn-gold">
              <span>View Full Portfolio</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        currentIndex={lightboxIndex}
        items={displayedItems}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </section>
  );
}
