import React from 'react';
import brandfo from '../images/brandfo.png';
import whatsappIcon from '../images/whats-app.png';
import callIcon from '../images/Call.png';

const QUICK_LINKS = ['Home', 'Products', 'About', 'Contact'];
const CATEGORY_LINKS = ['Women', 'Men', 'Luxury', 'Best Sellers'];

/**
 * Footer
 * @param {string} whatsapp - WhatsApp number
 * @param {string} call - phone number
 * @param {number} year
 */
export default function Footer({
  whatsapp = '+1 202-310-2122',
  call = '+1 202-018-2132',
  year = new Date().getFullYear(),
}) {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <img className="header__logo-img img-footer" src={brandfo} alt="Lavender Global" />
          </div>
        </div>

        <div className="footer__col">
          <h5>Quick Links</h5>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h5>Categories</h5>
          <ul>
            {CATEGORY_LINKS.map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h5>Contact Us</h5>
          <ul className="footer__contact">
            <li className="footer__contact-item">
              <span className="footer__contact-label">WhatsApp</span>
              <span className="footer__contact-row">
                <img className="footer__contact-icon" src={whatsappIcon} alt="WhatsApp" />
                <span>{whatsapp}</span>
              </span>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-label">Call Us</span>
              <span className="footer__contact-row">
                <img className="footer__contact-icon" src={callIcon} alt="Call Us" />
                <span>{call}</span>
              </span>
            </li>
          </ul>
          <h5 className="footer__app-title">Download App</h5>
          <div className="footer__app-buttons">
            <button className="app-btn">App Store</button>
            <button className="app-btn">Google Play</button>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © {year} LAVENDER Fragrances. All rights reserved.
      </div>
    </footer>
  );
}