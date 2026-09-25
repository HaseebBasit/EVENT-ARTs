import React, { useEffect } from 'react';

export default function Lightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items || items.length === 0 || currentIndex === null) {
    return null;
  }

  const currentItem = items[currentIndex];
  if (!currentItem) return null;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery viewer"
      onClick={onClose}
    >
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Controls Bar */}
        <div className="lightbox-top-bar">
          <div className="lightbox-counter">
            <span className="current-num">{currentIndex + 1}</span>
            <span className="sep">/</span>
            <span className="total-num">{items.length}</span>
          </div>

          <div className="lightbox-tags">
            <span className="lightbox-badge-category">{currentItem.categoryLabel}</span>
            {currentItem.tag && <span className="lightbox-badge-tag">{currentItem.tag}</span>}
          </div>

          <button
            type="button"
            className="lightbox-btn-close"
            onClick={onClose}
            aria-label="Close full-screen image viewer"
          >
            ✕
          </button>
        </div>

        {/* Media Frame */}
        <div className="lightbox-media-wrapper">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="lightbox-image"
          />

          {/* Navigation Arrows */}
          <button
            type="button"
            className="lightbox-nav-btn prev"
            onClick={onPrev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox-nav-btn next"
            onClick={onNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        {/* Caption Bar */}
        <div className="lightbox-caption-bar">
          <h3 className="lightbox-title">{currentItem.title}</h3>
          {currentItem.description && (
            <p className="lightbox-desc">{currentItem.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
