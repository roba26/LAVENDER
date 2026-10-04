import React from 'react';
import facebookIcon from '../../images/facebook-icon.png';
import googleIcon from '../../images/google-icon.png';
import appleIcon from '../../images/apple-icon.png';

/**
 * SocialButtons
 * @param {string} label - divider text, e.g. "Or login with" / "Or Sign up with"
 */
export default function SocialButtons({ label = 'Or continue with' }) {
  return (
    <>
      <div className="auth-divider"><span>{label}</span></div>
      <div className="auth-socials">
        <button type="button" className="auth-social-btn" aria-label="Continue with Facebook">
          <img className="auth-social-icon" src={facebookIcon} alt="Facebook" />
        </button>
        <button type="button" className="auth-social-btn" aria-label="Continue with Google">
          <img className="auth-social-icon" src={googleIcon} alt="Google" />
        </button>
        <button type="button" className="auth-social-btn" aria-label="Continue with Apple">
          <img className="auth-social-icon" src={appleIcon} alt="Apple" />
        </button>
      </div>
    </>
  );
}
