import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServiceSection from '../components/ServiceSection';
import AboutSection from '../components/AboutSection';
import FounderSection from '../components/FounderSection';
import PortfolioGallery from '../components/PortfolioGallery';
import ProcessTimeline from '../components/ProcessTimeline';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

export default function HomePage() {
  return (
    <main className="page-wrapper home-page-view">
      {/* 1. Hero Section */}
      <HeroSection
        isHome={true}
        backgroundImage="/images/owner/owner-28.jpg"
        eyebrow="EVENTS • WEDDINGS • CORPORATE • PRIVATE"
        title="Turning Moments Into"
        italicAccent="Memories"
        description="At Event Arts, we craft extraordinary experiences for life's most important moments. From intimate gatherings to grand celebrations, we bring your vision to life with creativity, precision and passion."
        buttons={[
          { text: 'Plan Your Event', to: '/contact', variant: 'btn-gold' },
          { text: 'View Portfolio', to: '/portfolio', variant: 'btn-outline-white' }
        ]}
      />

      {/* 2. Stats Section */}
      <StatsSection theme="light" />

      {/* 3. Services Section */}
      <ServiceSection layout="grid" theme="light" />

      {/* 4. About Section */}
      <AboutSection theme="light" />

      {/* 5. Founder Section */}
      <FounderSection theme="light" />

      {/* 6. Portfolio Preview Section (Dark Luxury) */}
      <PortfolioGallery
        isHomePage={true}
        limit={8}
        showHeading={true}
        theme="dark"
      />

      {/* 7. Process Timeline Section */}
      <ProcessTimeline
        theme="light"
        showHeading={true}
        detailed={false}
      />

      {/* 8. Why Choose Event Arts (Dark Premium) */}
      <WhyChooseUs theme="dark" />

      {/* 9. Testimonials Section */}
      <TestimonialCard theme="light" />

      {/* 10. Final CTA Section */}
      <CTASection
        title="Your Dream Event Is Just a Conversation Away"
        description="Let's create something extraordinary together."
        buttonText="Plan Your Event"
        buttonLink="/contact"
        backgroundImage="/images/owner/owner-34.jpg"
      />
    </main>
  );
}
