import React, { useState } from 'react';

const AdminDashboard = ({ products, onAdd, onDelete, onLogout }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    brand: '',
    category: 'Kontak Lens',
    price: '',
    imageUrl: '',
    imageFile: null
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct(prev => ({ ...prev, imageFile: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct(prev => ({ ...prev, imageUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;
    onAdd(newProduct);
    setNewProduct({
      name: '',
      brand: '',
      category: 'Kontak Lens',
      price: '',
      imageUrl: '',
      imageFile: null
    });
  };

  return (
    <div className="admin-page section-container fade-in">
      <div className="admin-header">
        <h1>Yönetim Paneli</h1>
        <div className="admin-header-actions">
           <button onClick={onLogout} className="secondary-btn">Çıkış Yap</button>
        </div>
      </div>

      <div className="admin-grid">
        {/* Add Product Form */}
        <section className="admin-card glass">
          <h2 className="gold-text">Yeni Ürün Ekle</h2>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label>Ürün Adı</label>
              <input 
                type="text" 
                value={newProduct.name} 
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                placeholder="Örn: Biofinity Silikon"
              />
            </div>
            <div className="form-group">
              <label>Marka</label>
              <input 
                type="text" 
                value={newProduct.brand} 
                onChange={(e) => setNewProduct({...newProduct, brand: e.target.value})}
                placeholder="Örn: CooperVision"
              />
            </div>
            <div className="form-group">
              <label>Kategori</label>
              <select 
                value={newProduct.category} 
                onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
              >
                <option value="Kontak Lens">Kontak Lens</option>
                <option value="Renkli Lens">Renkli Lens</option>
                <option value="Torik Lens">Torik Lensler</option>
              </select>
            </div>
            <div className="form-group">
              <label>Fiyat (TL)</label>
              <input 
                type="text" 
                value={newProduct.price} 
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                placeholder="Örn: 1.200"
              />
            </div>
            <div className="form-group">
              <label>Ürün Görseli (PNG/JPG)</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageChange}
              />
              <small style={{display: 'block', marginTop: '5px', color: 'var(--text-secondary)', fontSize: '0.75rem'}}>
                * Maksimum 1MB. Daha büyük dosyalar yüklenemez.
              </small>
              {newProduct.imageUrl && (
                <div className="image-preview">
                  <img src={newProduct.imageUrl} alt="Önizleme" />
                </div>
              )}
            </div>
            <button type="submit" className="gold-btn">Ürünü Yayınla</button>
          </form>
        </section>

        {/* Product List */}
        <section className="admin-card glass">
          <h2 className="gold-text">Mevcut Ürünler ({products.length})</h2>
          <div className="admin-product-list">
            {products.map(p => (
              <div key={p.id} className="admin-product-item">
                <div className="item-main">
                  <div className="admin-thumbnail">
                     {p.imageUrl ? <img src={p.imageUrl} alt="" /> : <div className="no-img">No Img</div>}
                  </div>
                  <div className="item-info">
                    <strong>{p.name}</strong>
                    <span>{p.brand} · {p.category}</span>
                  </div>
                </div>
                <div className="item-actions">
                  <span className="price">{p.price} TL</span>
                  <button onClick={() => onDelete(p.id)} className="delete-btn">Sil</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .admin-page {
          padding-top: 120px;
          padding-bottom: 80px;
        }

        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
        }

        .admin-grid {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 40px;
        }

        .admin-card {
          padding: 30px;
          border-radius: 20px;
        }

        .admin-card h2 {
          margin-bottom: 30px;
          font-size: 1.4rem;
        }

        .admin-form .form-group {
          margin-bottom: 20px;
        }

        .admin-form label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .admin-form input, .admin-form select {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid var(--glass-border);
          background: rgba(255,255,255,0.02);
          color: var(--text-primary);
          outline: none;
        }

        .admin-form input:focus {
          border-color: var(--accent-color);
        }

        .admin-product-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          max-height: 500px;
          overflow-y: auto;
          padding-right: 10px;
        }

        .image-preview {
          margin-top: 15px;
          height: 120px;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          background: rgba(0,0,0,0.05);
        }

        .image-preview img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .admin-product-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          background: rgba(0,0,0,0.02);
          border-radius: 12px;
          border: 1px solid var(--glass-border);
        }

        .item-main {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .admin-thumbnail {
          width: 50px;
          height: 50px;
          border-radius: 8px;
          overflow: hidden;
          background: white;
          border: 1px solid var(--glass-border);
        }

        .admin-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .no-img {
          font-size: 0.6rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .item-info {
          display: flex;
          flex-direction: column;
        }

        .item-info span {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .item-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .delete-btn {
          color: #ff4d4d;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .admin-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
