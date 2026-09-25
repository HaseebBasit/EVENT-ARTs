import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import { SERVICES } from '../data/eventsData';

export default function ServiceSection({
  layout = 'grid', // 'grid' for Home, 'detailed' for Services Page
  theme = 'light'
}) {
  if (layout === 'grid') {
    return (
      <section className={`services-section ${theme === 'dark' ? 'section-dark' : 'section-light'}`}>
        <div className="container">
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Tailored Experiences for"
            italicWord="Every Occasion"
            description="From intimate celebrations to large-scale productions, we bring creativity, precision and seamless execution to every event."
            theme={theme}
          />

          <div className="services-grid-4">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="services-section-footer text-center">
            <Link to="/services" className="btn btn-gold-outline">
              <span>View All Services Details</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Detailed alternating layout for Services Page
  return (
    <section className="services-detailed-section section-light">
      <div className="container">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`service-detail-row ${isEven ? 'row-reversed' : ''}`}
            >
              <div className="service-detail-media">
                <div className="detail-media-frame">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="detail-img"
                  />
                  <div className="detail-media-accent"></div>
                </div>
              </div>

              <div className="service-detail-content">
                <span className="section-eyebrow no-before">{service.eyebrow}</span>
                <h2 className="service-detail-title">{service.title}</h2>
                <p className="service-detail-desc">{service.longDesc}</p>

                <div className="service-includes-box">
                  <h3 className="includes-heading">Included in Service:</h3>
                  <ul className="service-features-list">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="check-icon">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-detail-actions">
                  <Link
                    to="/contact"
                    className="btn btn-gold"
                  >
                    <span>Plan This Event</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                  <Link
                    to="/portfolio"
                    className="btn btn-outline-dark"
                  >
                    <span>View Related Work</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
