import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO, SERVICES } from '../data/eventsData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Footer Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="brand-logo footer-logo" aria-label="Event Arts Home">
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
            <p className="footer-tagline">
              Creating extraordinary experiences and unforgettable memories.
            </p>
            <div className="footer-city-badge">
              <span className="dot-pulse"></span>
              <span>Based in Karachi, Pakistan</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to="/services">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact & Connect</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="footer-contact-label">Phone / WhatsApp</span>
                <a href={`tel:${BRAND_INFO.phone}`} className="footer-contact-val">
                  {BRAND_INFO.phone}
                </a>
              </li>
              <li>
                <span className="footer-contact-label">Email Inquiries</span>
                <a href={`mailto:${BRAND_INFO.email}`} className="footer-contact-val">
                  {BRAND_INFO.email}
                </a>
              </li>
              <li>
                <span className="footer-contact-label">Location</span>
                <span className="footer-contact-val">{BRAND_INFO.address}</span>
              </li>
            </ul>

            <div className="footer-socials">
              <a
                href={BRAND_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Event Arts on Instagram"
                className="social-icon-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={BRAND_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Event Arts on Facebook"
                className="social-icon-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href={BRAND_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Event Arts on TikTok"
                className="social-icon-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.11V9.41a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.76a8.28 8.28 0 0 0 4.77 1.48V6.8a4.83 4.83 0 0 1-1-.11z" />
                </svg>
              </a>
              <a
                href={BRAND_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Event Arts WhatsApp"
                className="social-icon-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12.031 2C6.516 2 2.029 6.485 2.029 12c0 1.942.556 3.757 1.518 5.295L2 22l4.839-1.509A9.948 9.948 0 0 0 12.031 22c5.516 0 10.001-4.485 10.001-10s-4.485-10-10.001-10zm5.836 14.197c-.244.688-1.42 1.324-1.968 1.378-.518.051-1.182.08-3.398-.838-2.656-1.1-4.364-3.799-4.498-3.977-.132-.178-1.077-1.433-1.077-2.732 0-1.299.68-1.94.922-2.203.242-.263.529-.328.706-.328.176 0 .353.003.508.01.164.009.385-.062.602.459.224.538.766 1.87.834 2.008.067.137.112.3.022.478-.09.178-.135.289-.267.447-.134.157-.282.351-.403.471-.134.134-.275.28-.118.549.157.269.699 1.152 1.5 1.866 1.031.918 1.9 1.203 2.169 1.338.269.134.427.112.585-.069.157-.18.675-.785.855-1.054.18-.269.36-.224.603-.134.244.09 1.542.727 1.808.861.267.134.445.201.512.314.067.112.067.65-.177 1.338z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© 2026 Event Arts. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <span>Karachi • Weddings • Corporate • Private • Décor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
