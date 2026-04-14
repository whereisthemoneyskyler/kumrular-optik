import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card glass">
      <div className="product-image">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="main-img" />
        ) : (
          <div className="placeholder-img">Görsel Yok</div>
        )}
        <div className="product-overlay">
          <button className="gold-btn btn-sm" onClick={() => onAddToCart(product)}>Sepete Ekle</button>
        </div>
      </div>
      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-footer">
          <span className="product-price">{product.price} TL</span>
          <span className="product-detail-link">Detaylar →</span>
        </div>
      </div>

      <style>{`
        .product-card {
          border-radius: var(--border-radius-md);
          overflow: hidden;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-color);
        }

        .product-image {
          height: 250px;
          position: relative;
          overflow: hidden;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .main-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.6s ease;
        }

        .product-card:hover .main-img {
          transform: scale(1.05);
        }

        .placeholder-img {
          color: var(--text-secondary);
          font-size: 0.8rem;
          opacity: 0.5;
        }

        .product-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .product-card:hover .product-overlay {
          opacity: 1;
        }

        .btn-sm {
          padding: 8px 16px;
          font-size: 0.8rem;
        }

        .product-info {
          padding: 24px;
        }

        .product-brand {
          font-size: 0.75rem;
          letter-spacing: 2px;
          color: var(--accent-color);
          text-transform: uppercase;
          font-weight: 600;
          display: block;
          margin-bottom: 8px;
        }

        .product-name {
          font-size: 1.1rem;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .product-price {
          font-weight: 700;
          font-size: 1.1rem;
          font-family: 'Outfit', sans-serif;
        }

        .product-detail-link {
          font-size: 0.8rem;
          color: var(--text-secondary);
          cursor: pointer;
        }

        .product-detail-link:hover {
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
