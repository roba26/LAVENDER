import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../services/dataService';
import CategoryChips from './CategoryChips';
import ProductCard from './ProductCard';
import './ProductsSection.css';

export default function ProductsSection({ categories }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = searchParams.get('category') || 'All';
  const [products, setProducts] = useState([]);
  const sectionRef = useRef(null);

  // يجيب المنتجات كل ما تتغير الفئة
  useEffect(() => {
    getProducts(selected).then(setProducts);
  }, [selected]);

  // لما يجي المستخدم من رابط قسم، ينزل لقسم المنتجات
  useEffect(() => {
    if (selected !== 'All') {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selected]);

  const handleSelect = (name) => {
    setSearchParams(name === 'All' ? {} : { category: name });
  };

  return (
    <section className="products" id="products" ref={sectionRef}>
      <h2 className="products__title">Our Fragrances</h2>
      <CategoryChips categories={categories} selected={selected} onSelect={handleSelect} />
      <div className="products__grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}