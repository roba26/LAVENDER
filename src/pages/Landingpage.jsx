import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductsSection from '../components/ProductsSection';
import SpecialOffer from '../components/Specialoffer';
import Features from '../components/Features';
import { getCategories } from '../services/dataService';
import './Landingpage.css';

const FEATURE_ITEMS = [
  { icon: 'shipping', title: 'Free Shipping', description: 'Orders over $39' },
  { icon: 'payment', title: 'Secure Payment', description: '100% secure checkout' },
  { icon: 'returns', title: 'Easy Return', description: '7-day return policy' },
  { icon: 'support', title: 'Customer Support', description: "We're here to help" },
];

export default function LandingPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <>
      <Hero />
      <Categories items={categories} />
      <ProductsSection categories={categories} />
      <SpecialOffer />
      <Features items={FEATURE_ITEMS} />
    </>
  );
}