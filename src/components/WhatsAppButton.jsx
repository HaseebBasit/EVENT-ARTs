import React, { useState } from 'react';
import { getWhatsAppUrl } from '../data/eventsData';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = getWhatsAppUrl("Hello Event Arts, I would like to discuss an event.");

  return (
    <div className="floating-whatsapp-container">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with Event Arts on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="whatsapp-pulse"></span>
        <svg
          className="whatsapp-icon"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.516 2 2.029 6.485 2.029 12c0 1.942.556 3.757 1.518 5.295L2 22l4.839-1.509A9.948 9.948 0 0 0 12.031 22c5.516 0 10.001-4.485 10.001-10s-4.485-10-10.001-10zm5.836 14.197c-.244.688-1.42 1.324-1.968 1.378-.518.051-1.182.08-3.398-.838-2.656-1.1-4.364-3.799-4.498-3.977-.132-.178-1.077-1.433-1.077-2.732 0-1.299.68-1.94.922-2.203.242-.263.529-.328.706-.328.176 0 .353.003.508.01.164.009.385-.062.602.459.224.538.766 1.87.834 2.008.067.137.112.3.022.478-.09.178-.135.289-.267.447-.134.157-.282.351-.403.471-.134.134-.275.28-.118.549.157.269.699 1.152 1.5 1.866 1.031.918 1.9 1.203 2.169 1.338.269.134.427.112.585-.069.157-.18.675-.785.855-1.054.18-.269.36-.224.603-.134.244.09 1.542.727 1.808.861.267.134.445.201.512.314.067.112.067.65-.177 1.338z" />
        </svg>
        <span className={`whatsapp-tooltip ${isHovered ? 'visible' : ''}`}>
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
}
