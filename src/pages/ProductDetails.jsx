import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../services/dataService';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id).then((p) => {
      setProduct(p);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p className="details__msg">Loading...</p>;

  if (!product) {
    return (
      <div className="details__msg">
        <p>Product not found.</p>
        <Link to="/" className="btn btn--primary">Back to shop</Link>
      </div>
    );
  }

  return (
    <main className="details">
      <div className="details__media">
        <img className="details__img" src={product.image} alt={product.title} />
      </div>

      <div className="details__info">
        <Link to="/" className="details__back">← Back to shop</Link>
        <p className="details__category">{product.category}</p>
        <h1 className="details__title">{product.title}</h1>
        <p className="details__price">${product.price.toFixed(2)}</p>
        <p className="details__size">Size: {product.size}</p>
        <p className="details__desc">{product.description}</p>
        <button className="btn btn--primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </main>
  );
}