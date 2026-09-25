import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FounderSection from '../components/FounderSection';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import { PHILOSOPHY_PILLARS } from '../data/eventsData';

export default function AboutPage() {
  const getPhilosophyIcon = (icon) => {
    switch (icon) {
      case 'sparkles':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z"></path>
          </svg>
        );
      case 'compass':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
        );
      case 'user-heart':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        );
      case 'crown':
      default:
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6">
            <polygon points="12 2 15 8.5 22 9.5 17 14.5 18.5 21.5 12 18 5.5 21.5 7 14.5 2 9.5 9 8.5 12 2"></polygon>
          </svg>
        );
    }
  };

  return (
    <main className="page-wrapper about-page-view">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/owner/owner-21.jpg"
        eyebrow="OUR IDENTITY"
        title="About"
        italicAccent="Event Arts"
        description="Passion. Creativity. Excellence. Redefining modern celebration architecture and luxury event management across Karachi, Pakistan."
        buttons={[
          { text: 'Plan Your Event', to: '/contact', variant: 'btn-gold' },
          { text: 'Explore Services', to: '/services', variant: 'btn-outline-white' }
        ]}
      />

      {/* Our Story Section */}
      <section className="about-story-section section-light">
        <div className="container">
          <div className="about-story-grid">
            <div className="story-content-col">
              <span className="section-eyebrow no-before">OUR STORY</span>
              <h2 className="story-heading">
                More Than Events, It's About <span className="italic-accent">Creating Experiences</span>
              </h2>
              <div className="story-narrative">
                <p>
                  Event Arts is a premier event planning and management company based in Karachi, specializing in royal weddings, corporate summits, private celebrations and bespoke décor production.
                </p>
                <p>
                  We believe every event tells a story, and we are here to bring your story to life with boundless creativity, military precision and genuine passion. From the initial conceptual sketch to the final farewell, our team ensures every moment flows effortlessly.
                </p>
                <p>
                  Rooted in Karachi's vibrant hospitality culture, we blend contemporary design philosophies with time-honored Pakistani traditions. Whether an intimate bridal Mehndi or an executive annual gala, Event Arts is synonymous with distinction and trust.
                </p>
              </div>

              <div className="story-pillars-summary">
                <div className="story-pillar-badge">
                  <span className="gold-sparkle">✦</span>
                  <span>Bespoke Architecture</span>
                </div>
                <div className="story-pillar-badge">
                  <span className="gold-sparkle">✦</span>
                  <span>Turnkey Production</span>
                </div>
                <div className="story-pillar-badge">
                  <span className="gold-sparkle">✦</span>
                  <span>VIP Coordination</span>
                </div>
              </div>
            </div>

            <div className="story-media-col">
              <div className="story-media-card">
                <img
                  src="/images/owner/owner-26.jpg"
                  alt="Event Arts Outdoor Wedding Décor"
                  loading="lazy"
                  className="story-img"
                />
                <div className="story-media-caption">
                  <span>Traditional Sangeet Garden & Floral Ceiling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section (4 Pillars) */}
      <section className="philosophy-section section-light-warm">
        <div className="container">
          <SectionHeading
            eyebrow="GUIDING PRINCIPLES"
            title="Our"
            italicWord="Philosophy"
            description="Four foundational cornerstones that govern every event blueprint we execute."
            theme="light"
          />

          <div className="philosophy-grid-4">
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <div key={pillar.id} className="philosophy-card">
                <div className="philosophy-icon-wrap">
                  {getPhilosophyIcon(pillar.icon)}
                </div>
                <h3 className="philosophy-title">{pillar.title}</h3>
                <h4 className="philosophy-tagline">{pillar.tagline}</h4>
                <p className="philosophy-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <FounderSection theme="light" />

      {/* Experience / Stats Section */}
      <section className="about-stats-wrapper">
        <StatsSection theme="dark" />
      </section>

      {/* Final CTA */}
      <CTASection
        title="Let's Create Something Extraordinary"
        description="Your vision deserves flawless planning and artistic execution. Let's make it a reality."
        buttonText="Plan Your Event"
        buttonLink="/contact"
        backgroundImage="/images/owner/owner-12.jpg"
      />
    </main>
  );
}
