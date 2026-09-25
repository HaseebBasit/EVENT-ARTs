import React from 'react';
import HeroSection from '../components/HeroSection';
import PortfolioGallery from '../components/PortfolioGallery';
import CTASection from '../components/CTASection';

export default function PortfolioPage() {
  return (
    <main className="page-wrapper portfolio-page-view">
      {/* Portfolio Hero */}
      <HeroSection
        backgroundImage="/images/owner/owner-21.jpg"
        eyebrow="CURATED MOMENTS"
        title="Our"
        italicAccent="Portfolio"
        description="A Glimpse Into the Moments We've Created. Step inside our curated archive of royal weddings, gala banquets, and stagecraft across Karachi."
        buttons={[
          { text: 'Plan Your Event', to: '/contact', variant: 'btn-gold' },
          { text: 'Our Services', to: '/services', variant: 'btn-outline-white' }
        ]}
      />

      {/* Full Gallery with Filter Tabs & Fullscreen Lightbox */}
      <PortfolioGallery
        isHomePage={false}
        limit={null}
        showHeading={false}
        theme="dark"
      />

      {/* Portfolio CTA */}
      <CTASection
        title="Planning Something Special?"
        description="Let's bring your celebration to life with unrivaled elegance and precision."
        buttonText="Plan Your Event"
        buttonLink="/contact"
        backgroundImage="/images/owner/owner-28.jpg"
      />
    </main>
  );
}
