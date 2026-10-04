import React from 'react';
import CategoryCard from './CategoryCard';

/**
 * Categories
 * @param {Array<{title:string, image:string, href?:string, linkText?:string}>} items
 */
export default function Categories({ items = [] }) {
  return (
    <section className="categories">
      {items.map((item) => (
        <CategoryCard key={item.title} {...item} />
      ))}
    </section>
  );
}