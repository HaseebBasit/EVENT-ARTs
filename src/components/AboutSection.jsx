import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection({ theme = 'light' }) {
  const capabilities = [
    { label: 'Event Planning', desc: 'Strategic roadmaps, scheduling & guest management' },
    { label: 'Creative Concepts', desc: 'Bespoke themes, 3D visualizations & color palettes' },
    { label: 'Décor & Styling', desc: 'Exotic fresh florals, luxury draping & table architecture' },
    { label: 'Coordination', desc: 'Flawless day-of cues, vendor management & hospitality' },
    { label: 'Production', desc: 'In-house structural staging, truss, audio & lighting' },
    { label: 'Execution', desc: 'Disciplined on-site management ensuring zero compromise' }
  ];

  return (
    <section className={`about-preview-section ${theme === 'dark' ? 'section-dark' : 'section-light'}`}>
      <div className="container">
        <div className="about-split-grid">
          {/* Left Column: Text & Capabilities */}
          <div className="about-text-col">
            <span className="section-eyebrow no-before">ABOUT EVENT ARTS</span>
            <h2 className="section-title">
              Creating Experiences That Feel <span className="italic-accent">Unforgettable</span>
            </h2>
            <p className="about-intro-paragraph">
              At Event Arts, we believe that an event is not simply a gathering — it is an emotional milestone and an artistic canvas. Based in Karachi, Pakistan, we orchestrate full-scale luxury celebrations with unwavering attention to design, acoustics, hospitality, and atmosphere.
            </p>

            <div className="about-capabilities-grid">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="capability-pill">
                  <span className="gold-diamond">◆</span>
                  <div className="capability-content">
                    <strong className="cap-label">{cap.label}</strong>
                    <span className="cap-desc">{cap.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <Link to="/about" className="btn btn-gold">
                <span>Discover Our Story</span>
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/contact" className="btn btn-outline-dark">
                <span>Book a Consultation</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="about-visual-col">
            <div className="about-image-wrapper">
              <img
                src="/images/owner/owner-21.jpg"
                alt="Event Arts Luxury Banquet Stage Karachi"
                loading="lazy"
                className="about-primary-img"
              />
              <div className="about-image-frame-gold" aria-hidden="true"></div>

              {/* Floating Badge */}
              <div className="about-experience-badge">
                <span className="badge-number">6+</span>
                <span className="badge-text">Years of Curating Luxury Moments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
