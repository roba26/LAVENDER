import React from 'react';
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import SpecialOffer from "../components/Specialoffer";
import Features from "../components/Features";
import './Landingpage.css';

import women from "../images/women.png";
import men from "../images/men.jpg";
import luxury from "../images/vip.jpg";
import bestsellers from "../images/best sala.jpg";
  
import offerBg from "../images/offer.jpg";

const CATEGORY_ITEMS = [
  { title: 'Women',        image: women,        bgColor: '#eadcf5' },
  { title: 'Men',          image: men,          bgColor: '#f3e6d3' },
  { title: 'Luxury',       image: luxury,       bgColor: '#e6d2d9' },
  { title: 'Best Sellers', image: bestsellers,  bgColor: '#f1e5d5' },
];

const FEATURE_ITEMS = [
  { icon: 'shipping', title: 'Free Shipping', description: 'Orders over $39' },
  { icon: 'payment', title: 'Secure Payment', description: '100% secure checkout' },
  { icon: 'returns', title: 'Easy Return', description: '7-day return policy' },
  { icon: 'support', title: 'Customer Support', description: "We're here to help" },
];

/**
 * LandingPage
 * Home ("/") page content only — Navbar and Footer are rendered
 * once in App.jsx so they stay shared across every page.
 */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <Categories items={CATEGORY_ITEMS} />
      <SpecialOffer bgImage={offerBg} />
      <Features items={FEATURE_ITEMS} />
    </>
  );
}