import React from 'react';
import HeroSection from '../components/HeroSection';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';

export default function ProcessPage() {
  return (
    <main className="page-wrapper process-page-view">
      {/* Process Hero */}
      <HeroSection
        backgroundImage="/images/owner/owner-14.jpg"
        eyebrow="TRANSPARENT COLLABORATION"
        title="Our"
        italicAccent="Process"
        description="From Your Vision to an Unforgettable Experience. Discover how we transform conceptual dreams into extraordinary reality through structured, stress-free execution."
        buttons={[
          { text: 'Get Started', to: '/contact', variant: 'btn-gold' },
          { text: 'View Portfolio', to: '/portfolio', variant: 'btn-outline-white' }
        ]}
      />

      {/* Detailed 4-Step Process Section */}
      <ProcessTimeline
        theme="light"
        showHeading={false}
        detailed={true}
      />

      {/* Process Deep Dive Quality Standards Section */}
      <section className="process-standards-section section-dark">
        <div className="container">
          <div className="standards-grid">
            <div className="standard-card">
              <span className="standard-num">100%</span>
              <h4 className="standard-title">On-Time Execution</h4>
              <p className="standard-desc">We adhere strictly to run-of-show cues and venue access schedules with veteran site captains.</p>
            </div>
            <div className="standard-card">
              <span className="standard-num">3D</span>
              <h4 className="standard-title">Spatial Previews</h4>
              <p className="standard-desc">Experience your stage and floral setup before fabrication starts, ensuring absolute clarity.</p>
            </div>
            <div className="standard-card">
              <span className="standard-num">24/7</span>
              <h4 className="standard-title">Event Concierge</h4>
              <p className="standard-desc">A single point of contact dedicated to handling your requests, guests, and vendors seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <CTASection
        title="Ready to Create Your Perfect Event?"
        description="Schedule your one-on-one consultation with our Karachi event planning directors."
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundImage="/images/owner/owner-39.jpg"
      />
    </main>
  );
}
