import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServiceSection';
import CTASection from '../components/CTASection';

export default function ServicesPage() {
  return (
    <main className="page-wrapper services-page-view">
      {/* Services Hero */}
      <HeroSection
        backgroundImage="/images/owner/owner-28.jpg"
        eyebrow="TAILORED EXCELLENCE"
        title="Our"
        italicAccent="Services"
        description="Tailored Experiences for Every Occasion. From majestic wedding celebrations to high-impact corporate summits, we deliver uncompromising luxury and flawless execution."
        buttons={[
          { text: 'Plan Your Event', to: '/contact', variant: 'btn-gold' },
          { text: 'View Portfolio', to: '/portfolio', variant: 'btn-outline-white' }
        ]}
      />

      {/* Alternating Detailed Service Deep-Dives */}
      <ServiceSection layout="detailed" theme="light" />

      {/* Services CTA */}
      <CTASection
        title="Planning Something Truly Special?"
        description="Let our dedicated creative directors design a customized event concept for you."
        buttonText="Book a Consultation"
        buttonLink="/contact"
        backgroundImage="/images/owner/owner-22.jpg"
      />
    </main>
  );
}
