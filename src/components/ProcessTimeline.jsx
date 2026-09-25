import React from 'react';
import SectionHeading from './SectionHeading';
import { PROCESS_STEPS } from '../data/eventsData';

export default function ProcessTimeline({
  theme = 'light',
  showHeading = true,
  detailed = false
}) {
  return (
    <section className={`process-section ${theme === 'dark' ? 'section-dark' : 'section-light'}`}>
      <div className="container">
        {showHeading && (
          <SectionHeading
            eyebrow="OUR METHODOLOGY"
            title="How We Bring Your Vision to"
            italicWord="Life"
            description="A seamless, stress-free four-stage journey from your first spark of inspiration to your unforgettable day."
            theme={theme}
          />
        )}

        {/* Timeline Steps Container */}
        <div className="process-timeline-container">
          <div className="process-timeline-track" aria-hidden="true"></div>

          <div className="process-steps-grid">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.number} className="process-step-card">
                {/* Step Number Badge */}
                <div className="step-badge-wrap">
                  <span className="step-number">{step.number}</span>
                  <span className="step-glow"></span>
                </div>

                {/* Step Image */}
                <div className="step-media">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="step-img"
                  />
                  <div className="step-media-overlay"></div>
                </div>

                {/* Step Body */}
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-subtitle">{step.subtitle}</p>
                  
                  {detailed && (
                    <p className="step-description">{step.description}</p>
                  )}

                  {step.tags && step.tags.length > 0 && (
                    <div className="step-tags-list">
                      {step.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="step-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
