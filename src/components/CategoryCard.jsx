import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CategoryCard
 * @param {string} title
 * @param {string} slug     - بيحدد لون الخلفية من الـ CSS
 * @param {string} image
 * @param {string} [linkText]
 */
export default function CategoryCard({ title, slug, image, linkText = 'Shop Now →' }) {
  return (
    <div className={`category-card category-card--${slug}`}>
      <div className="category-card__media">
        <img className="category-card__img" src={image} alt={title} loading="lazy" />
      </div>
      <div className="category-card__body">
        <h3>{title}</h3>
        <Link className="category-card__link" to={`/?category=${encodeURIComponent(title)}`}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}