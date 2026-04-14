import React from 'react';

const CartSidebar = ({ isOpen, onClose, cart, onRemove }) => {
  const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('.', '')), 0);

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <aside className={`cart-sidebar glass ${isOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h3>Alışveriş Sepeti</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-msg">Sepetiniz şu an boş.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-img" style={{background: '#222'}}></div>
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <span>{item.brand}</span>
                  <p>{item.price} TL</p>
                </div>
                <button className="remove-btn" onClick={() => onRemove(index)}>Sil</button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="total">
              <span>Toplam:</span>
              <span>{total.toLocaleString('tr-TR')} TL</span>
            </div>
            <button className="gold-btn w-full">Ödemeye Geç</button>
          </div>
        )}
      </aside>

      <style>{`
        .cart-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.2);
          z-index: 1100;
          opacity: 0;
          visibility: hidden;
          transition: var(--transition-smooth);
          backdrop-filter: blur(4px);
        }

        .cart-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .cart-sidebar {
          position: fixed;
          top: 0;
          right: -400px;
          width: 400px;
          height: 100vh;
          z-index: 1200;
          padding: 40px;
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
          border-left: 1px solid var(--glass-border);
          background: var(--bg-color);
        }

        .cart-sidebar.active {
          right: 0;
        }

        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .close-btn {
          font-size: 1.5rem;
          color: var(--text-secondary);
        }

        .cart-items {
          flex-grow: 1;
          overflow-y: auto;
        }

        .empty-msg {
          text-align: center;
          color: var(--text-secondary);
          margin-top: 40px;
        }

        .cart-item {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--glass-border);
          position: relative;
        }

        .item-img {
          width: 80px;
          height: 80px;
          border-radius: var(--border-radius-sm);
        }

        .item-info h4 {
          font-size: 1rem;
          margin-bottom: 4px;
        }

        .item-info span {
          font-size: 0.8rem;
          color: var(--accent-color);
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }

        .remove-btn {
          position: absolute;
          right: 0;
          bottom: 24px;
          font-size: 0.8rem;
          color: #ff4d4d;
        }

        .cart-footer {
          padding-top: 30px;
          border-top: 2px solid var(--glass-border);
        }

        .total {
          display: flex;
          justify-content: space-between;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 450px) {
          .cart-sidebar {
            width: 100%;
            right: -100%;
          }
        }
      `}</style>
    </>
  );
};

export default CartSidebar;
