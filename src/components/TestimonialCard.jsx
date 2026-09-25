import React from 'react';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS } from '../data/eventsData';

export default function TestimonialCard({ theme = 'light' }) {
  return (
    <section className={`testimonials-section ${theme === 'dark' ? 'section-dark-secondary' : 'section-light-warm'}`}>
      <div className="container">
        <SectionHeading
          eyebrow="CLIENT EXPERIENCES"
          title="What Our Clients"
          italicWord="Say"
          description="Voices of those who entrusted us with their most milestone life occasions."
          theme={theme}
        />

        <div className="testimonials-grid-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-quote-mark" aria-hidden="true">
                “
              </div>

              {/* Star Rating */}
              <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="star-gold">★</span>
                ))}
              </div>

              <p className="testimonial-quote">"{t.quote}"</p>

              <div className="testimonial-author">
                <div className="author-avatar-initials">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="author-meta">
                  <h4 className="author-name">{t.name}</h4>
                  <p className="author-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
