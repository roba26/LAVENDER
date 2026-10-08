import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__link">
        <div className="product-card__media">
          <img className="product-card__img" src={product.image} alt={product.title} loading="lazy" />
        </div>
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
      </Link>
      <button className="btn btn--primary product-card__btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}