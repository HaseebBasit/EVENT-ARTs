import React from 'react';

export default function PortfolioCard({
  item,
  index,
  onOpenLightbox
}) {
  return (
    <div
      className="portfolio-grid-card"
      onClick={() => onOpenLightbox(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenLightbox(index);
        }
      }}
      aria-label={`View photo: ${item.title}`}
    >
      <div className="portfolio-card-inner">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="portfolio-card-img"
        />

        <div className="portfolio-card-gradient"></div>

        <div className="portfolio-card-badges">
          <span className="portfolio-tag-pill">{item.categoryLabel}</span>
          {item.tag && <span className="portfolio-subtag-pill">{item.tag}</span>}
        </div>

        <div className="portfolio-card-info">
          <h3 className="portfolio-card-title">{item.title}</h3>
          {item.description && (
            <p className="portfolio-card-caption">{item.description}</p>
          )}
        </div>

        <div className="portfolio-card-zoom-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}
