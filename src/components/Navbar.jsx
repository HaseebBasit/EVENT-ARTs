import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Process', path: '/process' },
    { label: 'Contact', path: '/contact' },
  ];

  /* =========================================================
     SCROLL STATE
     ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MENU WHEN ROUTE CHANGES
     ========================================================= */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  /* =========================================================
     ESC KEY + BODY SCROLL LOCK
     ========================================================= */
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  /* =========================================================
     OUTSIDE CLICK
     ========================================================= */
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handlePointerDown = (event) => {
      const drawer = drawerRef.current;
      const hamburger = hamburgerRef.current;

      if (
        drawer &&
        !drawer.contains(event.target) &&
        hamburger &&
        !hamburger.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [mobileMenuOpen]);

  /* =========================================================
     TOGGLE
     ========================================================= */
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-header ${isScrolled ? 'scrolled' : ''} ${
        mobileMenuOpen ? 'menu-open' : ''
      }`}
    >
      <div className="container header-container">

        {/* =====================================================
            BRAND
            ===================================================== */}
        <Link
          to="/"
          className="brand-logo"
          aria-label="Event Arts Home"
          onClick={closeMobileMenu}
        >
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

        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}
        <nav
          className="desktop-nav"
          aria-label="Main Navigation"
        >
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className="nav-item"
              >
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {link.label}
                  <span className="nav-indicator" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* =====================================================
            HEADER ACTIONS
            ===================================================== */}
        <div className="header-actions">

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="btn btn-gold btn-header-cta"
          >
            <span>Plan Your Event</span>
            <span className="btn-arrow">→</span>
          </Link>

          {/* =================================================
              SINGLE MOBILE MENU BUTTON

              IMPORTANT:
              This is the ONLY open/close button.
              No second X button inside drawer.
              ================================================= */}
          <button
            ref={hamburgerRef}
            type="button"
            className={`hamburger-btn ${
              mobileMenuOpen ? 'active' : ''
            }`}
            onClick={toggleMobileMenu}
            aria-label={
              mobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </button>
        </div>
      </div>

      {/* =======================================================
          MOBILE NAVIGATION DRAWER
          ======================================================= */}
      <div
        ref={drawerRef}
        id="mobile-navigation"
        className={`mobile-menu-drawer ${
          mobileMenuOpen ? 'open' : ''
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-inner">

          {/* Mobile Header
              NO CLOSE BUTTON HERE.
              Hamburger in main navbar becomes X. */}

          <div className="mobile-menu-header">

            <Link
              to="/"
              className="brand-logo"
              onClick={closeMobileMenu}
              aria-label="Event Arts Home"
            >
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

          </div>

          {/* =================================================
              MOBILE NAV
              ================================================= */}
          <nav
            className="mobile-nav"
            aria-label="Mobile Navigation"
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className="mobile-nav-item"
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `mobile-nav-link ${
                        isActive ? 'active' : ''
                      }`
                    }
                    onClick={closeMobileMenu}
                  >
                    <span>{link.label}</span>
                    <span className="mobile-nav-arrow">
                      →
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* =================================================
              MOBILE FOOTER
              ================================================= */}
          <div className="mobile-menu-footer">

            <Link
              to="/contact"
              className="btn btn-gold btn-block"
              onClick={closeMobileMenu}
            >
              <span>Plan Your Event</span>
              <span className="btn-arrow">→</span>
            </Link>

            <p className="mobile-menu-tagline">
              Karachi, Pakistan • Luxury Event Management
            </p>

          </div>
        </div>
      </div>
    </header>
  );
}