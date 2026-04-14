import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onLogin(key);
    if (!success) {
      setError('Geçersiz anahtar. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="login-page fade-in">
      <div className="login-card glass">
        <h2 className="gold-text">Admin Girişi</h2>
        <p>Lütfen devam etmek için gizli anahtarı girin.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Gizli Anahtar" 
              value={key} 
              onChange={(e) => setKey(e.target.value)}
              className="login-input"
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="gold-btn login-btn">Giriş Yap</button>
        </form>
      </div>

      <style>{`
        .login-page {
          height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .login-card {
          width: 100%;
          max-width: 400px;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
        }

        .login-card h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .login-card p {
          color: var(--text-secondary);
          margin-bottom: 30px;
          font-size: 0.95rem;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .login-input {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          border: 1px solid var(--glass-border);
          background: rgba(255,255,255,0.05);
          color: var(--text-primary);
          font-size: 1rem;
          outline: none;
          transition: var(--transition-smooth);
        }

        .login-input:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 0 4px rgba(166, 124, 0, 0.1);
        }

        .login-btn {
          width: 100%;
          padding: 15px;
        }

        .error-text {
          color: #ff4d4d;
          font-size: 0.85rem;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
