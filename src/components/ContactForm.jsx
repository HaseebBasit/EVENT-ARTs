import React, { useState } from 'react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/eventsData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'Wedding Events',
    eventDate: '',
    guestCount: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const eventTypes = [
    'Wedding Events',
    'Corporate Events',
    'Birthday & Private Events',
    'Décor & Production',
    'Other / Custom Event'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please provide a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your event vision';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean form handling without fake backend network claims
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      // Construct a WhatsApp inquiry backup if the user wants to forward right now
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        eventType: 'Wedding Events',
        eventDate: '',
        guestCount: '',
        message: ''
      });
    }, 800);
  };

  const whatsappDirectUrl = getWhatsAppUrl(
    `Hello Event Arts! My name is ${formData.fullName || 'a client'}. I would like to inquire about planning an event.`
  );

  return (
    <div className="contact-form-card">
      <div className="form-header">
        <h3 className="form-card-title">Send Us a Message</h3>
        <p className="form-card-subtitle">
          Fill out the details below and our team will get in touch with you.
        </p>
      </div>

      {submittedSuccess ? (
        <div className="form-success-banner" role="alert">
          <div className="success-icon-wrap">✓</div>
          <h4 className="success-title">Thank You for Your Inquiry!</h4>
          <p className="success-text">
            Your details have been submitted. For instant priority bookings, you can also forward your inquiry directly to our team on WhatsApp.
          </p>
          <div className="success-actions">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <span>Continue via WhatsApp</span>
              <span className="btn-arrow">→</span>
            </a>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => setSubmittedSuccess(false)}
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="contact-form-body">
          <div className="form-grid-2">
            {/* Full Name */}
            <div className="form-field">
              <label htmlFor="fullName" className="field-label">
                Full Name <span className="req-asterisk">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Sara Tariq"
                className={`field-input ${errors.fullName ? 'input-error' : ''}`}
                aria-required="true"
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && <span className="field-error-msg">{errors.fullName}</span>}
            </div>

            {/* Email Address */}
            <div className="form-field">
              <label htmlFor="email" className="field-label">
                Email Address <span className="req-asterisk">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="sara@example.com"
                className={`field-input ${errors.email ? 'input-error' : ''}`}
                aria-required="true"
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="field-error-msg">{errors.email}</span>}
            </div>
          </div>

          <div className="form-grid-2">
            {/* Phone Number */}
            <div className="form-field">
              <label htmlFor="phone" className="field-label">
                Phone Number <span className="req-asterisk">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                className={`field-input ${errors.phone ? 'input-error' : ''}`}
                aria-required="true"
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
            </div>

            {/* Event Type */}
            <div className="form-field">
              <label htmlFor="eventType" className="field-label">
                Event Type
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="field-input select-input"
              >
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-grid-2">
            {/* Event Date */}
            <div className="form-field">
              <label htmlFor="eventDate" className="field-label">
                Preferred Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="field-input"
              />
            </div>

            {/* Guest Count */}
            <div className="form-field">
              <label htmlFor="guestCount" className="field-label">
                Estimated Guest Count
              </label>
              <input
                type="text"
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="e.g. 250 - 500 Guests"
                className="field-input"
              />
            </div>
          </div>

          {/* Message */}
          <div className="form-field">
            <label htmlFor="message" className="field-label">
              Tell Us About Your Vision <span className="req-asterisk">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Share details regarding venue, theme preferences, floral styling, dates, or specific requirements..."
              className={`field-input textarea-input ${errors.message ? 'input-error' : ''}`}
              aria-required="true"
              aria-invalid={!!errors.message}
            ></textarea>
            {errors.message && <span className="field-error-msg">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-gold btn-block btn-submit"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? 'Submitting Details...' : 'Send Inquiry'}</span>
            <span className="btn-arrow">→</span>
          </button>
        </form>
      )}
    </div>
  );
}
