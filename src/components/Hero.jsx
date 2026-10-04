import React from 'react';

/**
 * Hero
 * @param {string} eyebrow
 * @param {string} title - can include a line break as "\n"
 * @param {string} subtitle
 * @param {string} ctaLabel
 * @param {function} onCtaClick
 * 
 *
 */
import hero from "../images/hero.png";
export default function Hero({
  eyebrow = 'The Art of Fragrance',
  title = 'Discover Your\nPerfect Scent',
  subtitle = 'Luxury fragrances for every mood. Timeless scents, unforgettable moments.',
  ctaLabel = 'Shop Now',
  onCtaClick = () => {},
  
}) {
  const titleLines = title.split('\n');

  return (
    <section className="hero">
      <div className="hero__text">
        <p className="hero__eyebrow">{eyebrow}</p>
        <h1 className="hero__title">
          {titleLines.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p className="hero__subtitle">{subtitle}</p>
        <button className="btn btn--primary" onClick={onCtaClick}>
          {ctaLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

     
    </section>
  );
}