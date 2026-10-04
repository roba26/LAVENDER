import React from 'react';

const ICONS = {
  shipping: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="1" y="7" width="15" height="10" rx="1" />
      <path d="M16 10h3.5L22 13.5V17h-6" />
      <circle cx="6" cy="19" r="1.6" />
      <circle cx="17.5" cy="19" r="1.6" />
    </svg>
  ),
  payment: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  ),
  returns: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.5 15a9 9 0 1 0 2-9.9L1 10" />
    </svg>
  ),
  support: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 12a9 9 0 0 1 18 0" />
      <path d="M21 14v3a2 2 0 0 1-2 2h-1" />
      <rect x="1" y="12" width="5" height="6" rx="1.5" />
      <rect x="18" y="12" width="5" height="6" rx="1.5" />
    </svg>
  ),
};

/**
 * FeatureItem
 * @param {'shipping'|'payment'|'returns'|'support'} icon
 * @param {string} title
 * @param {string} description
 */
export function FeatureItem({ icon, title, description }) {
  return (
    <div className="feature">
      <div className="feature__icon">{ICONS[icon]}</div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

/**
 * Features
 * @param {Array<{icon:string, title:string, description:string}>} items
 */
export default function Features({ items = [] }) {
  return (
    <section className="features">
      {items.map((item) => (
        <FeatureItem key={item.title} {...item} />
      ))}
    </section>
  );
}