import React from 'react';

/**
 * SpecialOffer
 * @param {string} label
 * @param {string} title
 * @param {string} subtitle
 * @param {string} ctaLabel
 * @param {string} discount   - e.g. "30%"
 * @param {string} bgImage    - صورة الخلفية (مستوردة من src/images)
 */
export default function SpecialOffer({
  label = 'Special Offer',
  title = 'Up to 30% Off',
  subtitle = "On selected fragrances. Don't miss out!",
  ctaLabel = 'Shop Now',
  discount = '30%',
  bgImage,
}) {
  return (
    <section
      className="offer"
      style={bgImage ? { '--offer-bg': `url(${bgImage})` } : undefined}
    >
      <div className="offer__content">
        <p className="offer__label">{label}</p>
        <h2 className="offer__title">{title}</h2>
        <p className="offer__subtitle">{subtitle}</p>
        <button className="btn btn--primary">{ctaLabel} →</button>
      </div>

      <div className="offer__badge">
        <span>{discount}</span>
        OFF
      </div>
    </section>
  );
}