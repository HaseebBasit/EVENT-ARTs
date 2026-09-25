import React from 'react';
import { Link } from 'react-router-dom';
import { FOUNDER_DATA } from '../data/eventsData';

export default function FounderSection({ theme = 'light' }) {
  return (
    <section className={`founder-section ${theme === 'dark' ? 'section-dark-secondary' : 'section-light-warm'}`}>
      <div className="container">
        <div className="founder-card-frame">
          <div className="founder-grid">
            {/* Founder Portrait Column */}
            <div className="founder-media-col">
              <div className="founder-portrait-wrap">
                <img
                  src={FOUNDER_DATA.image}
                  alt="Founder & Creative Director of Event Arts"
                  loading="lazy"
                  className="founder-portrait-img"
                  onError={(e) => {
                    // Fallback to client photo if needed
                    e.currentTarget.src = '/images/owner/owner-14.jpg';
                  }}
                />
                <div className="founder-portrait-border"></div>
              </div>
            </div>

            {/* Founder Narrative Column */}
            <div className="founder-content-col">
              <span className="section-eyebrow no-before">{FOUNDER_DATA.eyebrow}</span>
              <h2 className="founder-heading">{FOUNDER_DATA.title}</h2>
              <div className="founder-designation-badge">{FOUNDER_DATA.designation}</div>

              <p className="founder-bio">
                {FOUNDER_DATA.bio}
              </p>

              <div className="founder-pillars-list">
                {FOUNDER_DATA.bulletPoints.map((point, idx) => (
                  <div key={idx} className="founder-pillar-item">
                    <span className="pillar-bullet-gold">✦</span>
                    <span className="pillar-text">{point}</span>
                  </div>
                ))}
              </div>

              {FOUNDER_DATA.quote && (
                <blockquote className="founder-quote">
                  "{FOUNDER_DATA.quote}"
                </blockquote>
              )}

              {/* Founder Signature Representation */}
              <div className="founder-signature-wrap">
                <svg
                  className="founder-signature-svg"
                  viewBox="0 0 260 65"
                  fill="none"
                  stroke="#c59b53"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-label="Founder signature"
                >
                  <path d="M15 45 C 35 15, 45 10, 65 30 C 85 50, 95 20, 115 25 C 135 30, 145 45, 170 35 C 195 25, 215 40, 245 28" />
                  <path d="M40 38 C 70 42, 110 38, 160 40 C 200 42, 230 38, 250 35" strokeDasharray="3 3" />
                  <path d="M75 18 C 85 10, 105 12, 110 22 C 115 32, 105 45, 95 48" />
                </svg>
              </div>

              <div className="founder-actions">
                <Link to="/about" className="btn btn-gold">
                  <span>{FOUNDER_DATA.ctaText}</span>
                  <span className="btn-arrow">→</span>
                </Link>
                <Link to="/contact" className="btn btn-outline-dark">
                  <span>Discuss Your Event</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
