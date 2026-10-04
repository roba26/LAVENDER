import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import brand from '../images/brand.jpg';

const NAV_LINKS = ['Home', 'Women', 'Men', 'Luxury', 'Best Sellers', 'Offers'];

/**
 * Header
 * @param {string} activeLink - which nav item is currently active
 * @param {number} cartCount - number shown on the cart badge
 */
export default function Header({ activeLink = 'Home', cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  /**
   * First-ever click on the account icon -> no "registered" flag in
   * localStorage yet -> send the person to Sign up.
   * Any click after that -> flag is present -> send them to Login.
   */
  const handleAccountClick = () => {
    const isRegistered = localStorage.getItem('lavender_isRegistered') === 'true';
    navigate(isRegistered ? '/login' : '/signup');
  };

  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo" href="#home">
          <img className="header__logo-img" src={brand} alt="Lavender Global" />
        </a>

        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className={link === activeLink ? 'is-active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="header__icons">
          <button aria-label="Search" className="icon-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button aria-label="Account" className="icon-btn" onClick={handleAccountClick}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
            </svg>
          </button>
          <button aria-label="Cart" className="icon-btn icon-btn--cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.4a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button
            className="header__burger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}