import React from 'react';
import SectionHeading from './SectionHeading';
import { WHY_CHOOSE_US } from '../data/eventsData';

export default function WhyChooseUs({ theme = 'dark' }) {
  const getIcon = (id) => {
    switch (id) {
      case 'concepts':
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path>
            <line x1="9" y1="21" x2="15" y2="21"></line>
          </svg>
        );
      case 'execution':
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        );
      case 'planning':
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        );
      case 'detail':
      default:
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        );
    }
  };

  return (
    <section className={`why-choose-section ${theme === 'dark' ? 'section-dark' : 'section-light'}`}>
      <div className="container">
        <SectionHeading
          eyebrow="THE EVENT ARTS DIFFERENCE"
          title="Why Choose"
          italicWord="Event Arts?"
          description="We combine architectural spatial design, master-level logistics, and genuine hospitality to elevate every celebration."
          theme={theme}
        />

        <div className="why-choose-grid">
          {WHY_CHOOSE_US.map((item) => (
            <div key={item.id} className="why-feature-card">
              <div className="why-icon-box">
                {getIcon(item.id)}
              </div>
              <h3 className="why-feature-title">{item.title}</h3>
              <p className="why-feature-desc">{item.description}</p>
              {item.detail && (
                <p className="why-feature-detail">{item.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
