import React from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../data/eventsData';

export default function CTASection({
  title = "Your Dream Event Is Just a Conversation Away",
  description = "Let's create something extraordinary together.",
  buttonText = "Plan Your Event",
  buttonLink = "/contact",
  backgroundImage = "/images/owner/owner-34.jpg",
  showWhatsAppAlt = true
}) {
  const whatsappUrl = getWhatsAppUrl("Hello Event Arts, I would like to plan an event.");

  return (
    <section
      className="cta-banner-section"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="cta-overlay"></div>
      <div className="cta-glow"></div>

      <div className="container cta-content-wrap text-center">
        <span className="section-eyebrow">LET'S CONNECT</span>
        <h2 className="cta-heading">{title}</h2>
        <p className="cta-description">{description}</p>

        <div className="cta-buttons-group">
          <Link to={buttonLink} className="btn btn-gold btn-lg">
            <span>{buttonText}</span>
            <span className="btn-arrow">→</span>
          </Link>

          {showWhatsAppAlt && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold-outline btn-lg"
            >
              <span>Instant WhatsApp Chat</span>
              <span className="btn-arrow">→</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
