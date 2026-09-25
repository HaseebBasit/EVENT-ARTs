import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import { BRAND_INFO, getWhatsAppUrl } from '../data/eventsData';

export default function ContactPage() {
  const directWhatsAppUrl = getWhatsAppUrl(
    "Hello Event Arts, I would like to discuss planning an upcoming event in Karachi."
  );

  return (
    <main className="page-wrapper contact-page-view">
      {/* Contact Hero */}
      <HeroSection
        backgroundImage="/images/owner/owner-14.jpg"
        eyebrow="BEGIN YOUR JOURNEY"
        title="Let's Create Something"
        italicAccent="Beautiful"
        description="Tell us about your event and let's bring your vision to life. Our bespoke event directors are ready to collaborate."
        buttons={[
          { text: 'Chat on WhatsApp', to: directWhatsAppUrl, variant: 'btn-gold', isExternal: true }
        ]}
      />

      {/* Main Contact Section (Two Columns) */}
      <section className="contact-main-section section-light">
        <div className="container">
          <div className="contact-split-grid">
            {/* Left Column: Form */}
            <div className="contact-form-column">
              <ContactForm />
            </div>

            {/* Right Column: Contact Info & Map */}
            <div className="contact-info-column">
              <div className="contact-details-card">
                <span className="section-eyebrow no-before">GET IN TOUCH</span>
                <h3 className="contact-info-title">Karachi Office & Inquiries</h3>
                <p className="contact-info-subtitle">
                  We look forward to meeting with you in person or via telephone to explore your celebration requirements.
                </p>

                <div className="contact-items-stack">
                  {/* Phone */}
                  <div className="contact-info-item">
                    <div className="contact-icon-box">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="contact-item-meta">
                      <span className="item-label">Telephone / Bookings</span>
                      <a href={`tel:${BRAND_INFO.phone}`} className="item-value-link">
                        {BRAND_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="contact-info-item">
                    <div className="contact-icon-box">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="contact-item-meta">
                      <span className="item-label">Email Inquiries</span>
                      <a href={`mailto:${BRAND_INFO.email}`} className="item-value-link">
                        {BRAND_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="contact-info-item">
                    <div className="contact-icon-box">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="contact-item-meta">
                      <span className="item-label">Karachi Studio Location</span>
                      <span className="item-value">{BRAND_INFO.address}</span>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="contact-info-item">
                    <div className="contact-icon-box">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div className="contact-item-meta">
                      <span className="item-label">Working Hours</span>
                      <span className="item-value">{BRAND_INFO.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Box */}
                <div className="direct-whatsapp-card">
                  <div className="whatsapp-card-content">
                    <h4 className="direct-whatsapp-title">Prefer to talk directly?</h4>
                    <p className="direct-whatsapp-text">
                      Chat directly with our senior event producer on WhatsApp for instant inquiries, package breakdowns, and date availability.
                    </p>
                  </div>
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-block"
                  >
                    <span>Chat with us on WhatsApp</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>

                {/* Map Graphic Container */}
                <div className="contact-map-wrapper">
                  <div className="map-styled-container">
                    <div className="map-overlay-pin">
                      <span className="map-pin-pulse"></span>
                      <div className="map-pin-marker">
                        <span className="pin-dot"></span>
                        <span className="pin-text">Event Arts • DHA Phase 6, Karachi</span>
                      </div>
                    </div>
                    <img
                      src="/images/owner/owner-08.jpg"
                      alt="Event Arts Karachi Location Representation"
                      className="map-bg-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
