import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { items, removeFromCart, total } = useCart();

  if (items.length === 0) {
    return (
      <main className="cart cart--empty">
        <h1 className="cart__title">Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/" className="btn btn--primary">Continue shopping</Link>
      </main>
    );
  }

  return (
    <main className="cart">
      <h1 className="cart__title">Your Cart</h1>

      {items.map((item) => (
        <div className="cart__item" key={item.id}>
          <img className="cart__img" src={item.image} alt={item.title} />
          <div className="cart__info">
            <Link to={`/product/${item.id}`} className="cart__name">{item.title}</Link>
            <p className="cart__meta">${item.price.toFixed(2)} × {item.qty}</p>
          </div>
          <p className="cart__line-total">${(item.price * item.qty).toFixed(2)}</p>
          <button className="cart__remove" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <div className="cart__summary">
        <span>Total</span>
        <strong>${total.toFixed(2)}</strong>
      </div>
    </main>
  );
}