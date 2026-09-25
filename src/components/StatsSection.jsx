import React, { useState, useEffect, useRef } from 'react';
import { VERIFIED_STATS } from '../data/eventsData';

function CounterItem({ stat, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.value;
    const duration = 1800; // ms
    let startTime = null;

    const easeOutQuad = (t) => t * (2 - t);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, stat.value]);

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'calendar':
        return (
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        );
      case 'users':
        return (
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case 'award':
      default:
        return (
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        );
    }
  };

  return (
    <div className="stat-card">
      <div className="stat-icon-wrap">
        {renderIcon(stat.icon)}
      </div>
      <div className="stat-meta">
        <div className="stat-number-wrap">
          <span className="stat-number">
            {isVisible ? count.toLocaleString() : '0'}
          </span>
          <span className="stat-suffix">{stat.suffix}</span>
        </div>
        <div className="stat-label">{stat.label}</div>
      </div>
    </div>
  );
}

export default function StatsSection({ theme = 'light' }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`stats-bar ${theme === 'dark' ? 'stats-bar-dark' : 'stats-bar-light'}`}
      aria-label="Event Arts Statistics"
    >
      <div className="container">
        <div className="stats-grid">
          {VERIFIED_STATS.map((stat, idx) => (
            <React.Fragment key={stat.label}>
              <CounterItem stat={stat} isVisible={isVisible} />
              {idx < VERIFIED_STATS.length - 1 && <div className="stat-divider" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
