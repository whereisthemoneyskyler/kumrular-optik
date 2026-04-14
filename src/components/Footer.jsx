import React from 'react';
import logo from '../assets/logo.png';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="section-container footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-container">
              <img src={logo} alt="Kumrular Optik" className="footer-logo-img" />
            </div>
            <p>Ankara'nın kalbinde, en yeni lens teknolojileri ve göz sağlığınız için en seçkin markaları sizlerle buluşturuyoruz.</p>
          </div>
          
          <div className="footer-links">
            <h4>Hızlı Erişim</h4>
            <ul>
              <li onClick={() => onNavigate('shop')}>Mağaza</li>
              <li onClick={() => onNavigate('about')}>Hakkımızda</li>
              <li>Anlaşmalı Kurumlar</li>
              <li>İletişim</li>
              <li onClick={() => onNavigate('login')} style={{marginTop: '20px', opacity: 0.5, fontSize: '0.8rem'}}>Yönetici Girişi</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>İletişim</h4>
            <p>Kumrular Caddesi No: 14/B<br />Kızılay - Çankaya / ANKARA</p>
            <p className="contact-item">T: 0312 425 15 16</p>
            <p className="contact-item">G: 0532 322 49 40</p>
          </div>

          <div className="footer-social">
            <h4>Sosyal Medya</h4>
            <div className="social-icons">
              {['Facebook', 'Twitter', 'Instagram'].map(social => (
                <div key={social} className="social-icon glass">{social[0]}</div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Kumrular Optik. Tüm hakları saklıdır.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #F8F8FA;
          padding: 80px 0 40px;
          border-top: 1px solid var(--glass-border);
          margin-top: 100px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-logo-container {
          margin-bottom: 20px;
        }

        .footer-logo-img {
          height: 120px; /* Larger than navbar as requested */
          width: auto;
          object-fit: contain;
          filter: brightness(0.9); /* Subtle refinement for the footer */
        }

        .footer-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          max-width: 300px;
        }

        .footer h4 {
          color: var(--text-primary);
          margin-bottom: 24px;
          font-size: 1.1rem;
        }

        .footer ul li {
          color: var(--text-secondary);
          margin-bottom: 12px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .footer ul li:hover {
          color: var(--accent-color);
        }

        .footer-contact p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .contact-item {
          color: var(--text-primary) !important;
          font-weight: 500;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .social-icon:hover {
          background: var(--accent-color);
          color: var(--bg-color);
          transform: translateY(-3px);
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid var(--glass-border);
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
