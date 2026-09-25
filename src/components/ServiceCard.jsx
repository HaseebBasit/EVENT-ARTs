import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  const getIcon = (id) => {
    switch (id) {
      case 'wedding':
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        );
      case 'corporate':
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        );
      case 'private':
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2L15 9H22L16.5 13.5L18.5 20.5L12 16L5.5 20.5L7.5 13.5L2 9H9L12 2Z"></path>
          </svg>
        );
      case 'decor':
      default:
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
          </svg>
        );
    }
  };

  return (
    <article className="service-card">
      <div className="service-card-media">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="service-card-img"
        />
        <div className="service-card-overlay"></div>
        <div className="service-icon-badge">
          {getIcon(service.id)}
        </div>
      </div>

      <div className="service-card-body">
        {service.eyebrow && (
          <span className="service-card-eyebrow">{service.eyebrow}</span>
        )}
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-desc">{service.shortDesc}</p>

        <Link
          to={`/services#${service.id}`}
          className="service-card-link"
          aria-label={`Learn more about ${service.title}`}
        >
          <span>Explore Service</span>
          <span className="link-arrow">→</span>
        </Link>
      </div>
    </article>
  );
}
