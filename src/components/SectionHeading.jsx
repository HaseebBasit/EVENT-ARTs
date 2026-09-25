import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  italicWord,
  afterItalic,
  description,
  centered = true,
  theme = 'light',
  className = ''
}) {
  return (
    <div className={`section-heading-wrapper ${centered ? 'text-center' : 'text-left'} ${theme === 'dark' ? 'heading-theme-dark' : 'heading-theme-light'} ${className}`}>
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}
      
      {title && (
        <h2 className="section-title">
          {title}
          {italicWord && <span className="italic-accent"> {italicWord}</span>}
          {afterItalic && <span> {afterItalic}</span>}
        </h2>
      )}

      {description && (
        <p className="section-desc">
          {description}
        </p>
      )}
    </div>
  );
}
