import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Shop = ({ onAddToCart, initialFilter = 'All', products = [] }) => {
  const [filter, setFilter] = useState(initialFilter);
  const [brandFilter, setBrandFilter] = useState('All');

  // Helper to format brand names (e.g. "EL AMORE" -> "El Amore")
  const formatBrand = (brand) => {
    if (!brand) return '';
    return brand.trim().replace(/\s+/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  };

  // Derive available brands from products (case-insensitive deduplication)
  const availableBrands = [...new Set(products.map(p => formatBrand(p.brand)))].filter(Boolean);

  const filteredProducts = products.filter(p => {
    const categoryMatch = filter === 'All' || p.category === filter;
    const formattedProductBrand = formatBrand(p.brand);
    const brandMatch = brandFilter === 'All' || formattedProductBrand === brandFilter;
    return categoryMatch && brandMatch;
  });

  return (
    <div className="shop-page">
      <section className="shop-header">
        <div className="section-container">
          <h1 className="gold-text">{filter === 'All' ? 'Koleksiyon' : filter}</h1>
          <p>Dünyanın en seçkin lens markaları Kumrular Optik güvencesiyle.</p>
        </div>
      </section>

      <section className="shop-content section-container">
        <div className="shop-layout">
          {/* Filters */}
          <aside className="filters">
            <h4>Kategoriler</h4>
            <ul>
              <li className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>Tümü</li>
              <li className={filter === 'Kontak Lens' ? 'active' : ''} onClick={() => setFilter('Kontak Lens')}>Kontak Lensler</li>
              <li className={filter === 'Renkli Lens' ? 'active' : ''} onClick={() => setFilter('Renkli Lens')}>Renkli Lensler</li>
              <li className={filter === 'Torik Lens' ? 'active' : ''} onClick={() => setFilter('Torik Lens')}>Torik Lensler</li>
            </ul>

            <div className="filter-group">
              <h4>Markalar</h4>
              <ul>
                <li className={brandFilter === 'All' ? 'active' : ''} onClick={() => setBrandFilter('All')}>
                  Tüm Markalar
                </li>
                {availableBrands.map((brand, index) => (
                  <li 
                    key={index} 
                    className={brandFilter === brand ? 'active' : ''} 
                    onClick={() => setBrandFilter(brand)}
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .shop-page {
          padding-top: 120px;
        }

        .shop-header {
          text-align: center;
          padding-bottom: 60px;
        }

        .shop-header h1 {
          font-size: 3rem;
          margin-bottom: 10px;
        }

        .sub-filter-bar {
          display: flex;
          justify-content: center;
          gap: 30px;
          padding: 15px;
          margin: 0 auto 40px;
          max-width: 600px;
          border-radius: 50px;
        }

        .sub-filter-item {
          padding: 8px 24px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .sub-filter-item:hover, .sub-filter-item.active {
          background: var(--accent-color);
          color: white;
        }

        .shop-layout {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 60px;
        }

        .filters h4 {
          margin-bottom: 24px;
          font-size: 1.1rem;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 12px;
        }

        .filters ul {
          margin-bottom: 40px;
        }

        .filters li {
          margin-bottom: 16px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .filters li:hover, .filters li.active {
          color: var(--accent-color);
          padding-left: 8px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .shop-header h1 {
            font-size: 2.2rem;
          }
          .shop-layout {
            grid-template-columns: 120px 1fr;
            gap: 20px;
          }
          .filters {
            display: block; /* Remove flex and horizontal scroll */
            padding-bottom: 0;
            overflow: visible;
          }
          .filters h4 {
            font-size: 0.85rem;
            margin-bottom: 15px;
            padding-bottom: 8px;
          }
          .filters ul {
            display: block; /* Vertical stack */
            margin-bottom: 30px;
          }
          .filters li {
            font-size: 0.8rem;
            margin-bottom: 12px;
            white-space: normal; /* Allow wrapping */
            line-height: 1.3;
          }
          .product-grid {
            grid-template-columns: 1fr; /* Single column on mobile */
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Shop;
