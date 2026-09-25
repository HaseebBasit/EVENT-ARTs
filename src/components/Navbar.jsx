import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Process', path: '/process' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
   <Link to="/" className="brand-logo" aria-label="Event Arts Home">
  <span className="brand-mark">
    <img
      src="/images/owner/owner-02.jpg"
      alt="Event Arts"
      className="brand-logo-image"
    />
  </span>

  <span className="brand-name">
    EVENT <span className="brand-accent">ARTS</span>
  </span>
</Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end={link.path === '/'}
                >
                  {link.label}
                  <span className="nav-indicator"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Primary CTA */}
        <div className="header-actions">
          <Link to="/contact" className="btn btn-gold btn-header-cta">
            <span>Plan Your Event</span>
            <span className="btn-arrow">→</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`hamburger-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line line-1"></span>
            <span className="hamburger-line line-2"></span>
            <span className="hamburger-line line-3"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)} aria-label="Event Arts Home">
              <span className="brand-mark">
                <img
                  src="/images/owner/owner-02.jpg"
                  alt="Event Arts Logo"
                  className="brand-logo-image"
                />
              </span>
              <span className="brand-name">
                EVENT <span className="brand-accent">ARTS</span>
              </span>
            </Link>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="mobile-nav-item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                    end={link.path === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className="mobile-nav-arrow">→</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu-footer">
            <Link
              to="/contact"
              className="btn btn-gold btn-block"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Plan Your Event</span>
              <span className="btn-arrow">→</span>
            </Link>
            <p className="mobile-menu-tagline">Karachi, Pakistan • Luxury Event Management</p>
          </div>
        </div>
      </div>
    </header>
  );
}
