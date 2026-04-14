import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = ({ currentPage, onNavigate, cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar glass ${isMenuOpen ? 'nav-open' : ''}`}>
      <div className="section-container nav-content">
        <div className="logo" onClick={() => handleNavigate('home')}>
          <img src={logo} alt="Kumrular Optik" className="nav-logo" />
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li className={currentPage === 'home' ? 'active' : ''} onClick={() => handleNavigate('home')}>Anasayfa</li>
          <li className={currentPage === 'shop' ? 'active' : ''} onClick={() => handleNavigate('shop')}>Mağaza</li>
          <li className={currentPage === 'about' ? 'active' : ''} onClick={() => handleNavigate('about')}>Hakkımızda</li>
          <li onClick={() => handleNavigate('home')}>İletişim</li>
        </ul>

        <div className="nav-actions">
          <div className="cart-icon" onClick={onCartClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
          transition: var(--transition-smooth);
        }

        .nav-content {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .nav-logo {
          max-height: 75px; 
          width: auto;
          object-fit: contain;
          padding-top: 4px;
        }

        @media (max-width: 768px) {
          .nav-logo {
            max-height: 50px;
          }
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links li {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-smooth);
          position: relative;
        }

        .nav-links li:hover, .nav-links li.active {
          color: var(--text-primary);
        }

        .nav-links li.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent-color);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 24px;
          z-index: 1001;
        }

        .cart-icon {
          position: relative;
          cursor: pointer;
          color: var(--text-primary);
        }

        .cart-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: var(--accent-color);
          color: var(--bg-color);
          font-size: 0.7rem;
          font-weight: 700;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
        }

        @media (max-width: 768px) {
          .nav-logo {
            max-height: 60px;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            background: var(--bg-color);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px;
            transition: 0.4s ease-in-out;
            box-shadow: -10px 0 30px rgba(0,0,0,0.05);
            z-index: 1000;
          }

          .nav-links.active {
            right: 0;
          }

          .nav-links li {
            font-size: 1.2rem;
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
