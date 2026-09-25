import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection({
  eyebrow,
  title,
  italicAccent,
  afterItalic,
  description,
  backgroundImage = '/images/owner/owner-28.jpg',
  buttons = [],
  isHome = false
}) {
  return (
    <section
      className={`hero-section ${isHome ? 'hero-home' : 'hero-subpage'}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-ambient-glow"></div>

      <div className="container hero-content">
        {eyebrow && (
          <div className="hero-eyebrow animate-fade-in">
            {eyebrow}
          </div>
        )}

        <h1 className="hero-title animate-fade-up">
          {title}
          {italicAccent && <span className="italic-accent"> {italicAccent}</span>}
          {afterItalic && <span> {afterItalic}</span>}
        </h1>

        {description && (
          <p className="hero-text animate-fade-up-delay">
            {description}
          </p>
        )}

        {buttons.length > 0 && (
          <div className="hero-actions animate-fade-up-delay-2">
            {buttons.map((btn, idx) => (
              btn.isExternal ? (
                <a
                  key={idx}
                  href={btn.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${btn.variant || 'btn-gold'}`}
                >
                  <span>{btn.text}</span>
                  {btn.arrow !== false && <span className="btn-arrow">→</span>}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={btn.to}
                  className={`btn ${btn.variant || 'btn-gold'}`}
                >
                  <span>{btn.text}</span>
                  {btn.arrow !== false && <span className="btn-arrow">→</span>}
                </Link>
              )
            ))}
          </div>
        )}
      </div>

      {isHome && (
        <div className="hero-scroll-indicator" aria-hidden="true">
          <span className="scroll-mouse">
            <span className="scroll-wheel"></span>
          </span>
          <span className="scroll-label">Scroll to Explore</span>
        </div>
      )}
    </section>
  );
}
