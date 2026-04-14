import kontakCat from '../assets/kontak-cat.png';
import renkliCat from '../assets/renkli-cat.png';

const Home = ({ onNavigate, onShopNavigate }) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="section-container hero-content">
          <div className="hero-text">
            <h5 className="gold-text">PREMIUM LENS DENEYİMİ</h5>
            <h1>Bakışlarınıza <br /><span className="gold-text">Konfor</span> Katın</h1>
            <p>Dünyanın en seçkin lens markaları ve uzman çözümleriyle Kumrular Optik'te buluşun.</p>
            <div className="hero-btns">
              <button className="gold-btn" onClick={() => onShopNavigate('All')}>Koleksiyonu Keşfet</button>
              <button className="secondary-btn" onClick={() => onNavigate('about')}>Hakkımızda</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories / Collections */}
      <section className="collections section-container">
        <div className="section-header">
          <h2>Lens Koleksiyonlarımız</h2>
          <div className="accent-line"></div>
        </div>
        
        <div className="collection-grid dual-grid">
          <div className="collection-card glass" onClick={() => onShopNavigate('Kontak Lens')}>
            <div className="card-img">
               <img src={kontakCat} alt="Kontak Lensler" />
            </div>
            <div className="card-content">
              <h3>Kontak Lensler</h3>
              <p>Günlük, haftalık ve aylık seçeneklerle net görüş.</p>
              <span className="learn-more">İncele →</span>
            </div>
          </div>

          <div className="collection-card glass" onClick={() => onShopNavigate('Renkli Lens')}>
             <div className="card-img">
               <img src={renkliCat} alt="Renkli Lensler" />
            </div>
            <div className="card-content">
              <h3>Renkli Lensler</h3>
              <p>Doğal görünümlü renk seçenekleriyle stilinizi yansıtın.</p>
              <span className="learn-more">İncele →</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          background: #FFFFFF;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 70% 30%, rgba(166, 124, 0, 0.05) 0%, transparent 70%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-text h5 {
          letter-spacing: 4px;
          margin-bottom: 20px;
          font-size: 0.9rem;
        }

        .hero-text h1 {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          margin-bottom: 30px;
        }

        .hero-text p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 40px;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
        }

        .secondary-btn {
          padding: 12px 32px;
          border: 1px solid var(--glass-border);
          border-radius: var(--border-radius-sm);
          color: var(--text-primary);
          font-weight: 500;
          transition: var(--transition-smooth);
        }

        .secondary-btn:hover {
          background: var(--glass-bg);
          border-color: var(--text-primary);
        }

        .collections {
          padding: 100px 0;
        }

        .section-header {
          margin-bottom: 60px;
          text-align: center;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .accent-line {
          width: 60px;
          height: 3px;
          background: var(--accent-color);
          margin: 0 auto;
        }

        .collection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .collection-grid.dual-grid {
          grid-template-columns: repeat(2, 1fr);
          max-width: 900px;
          margin: 0 auto;
        }

        .collection-card {
          border-radius: var(--border-radius-md);
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition-smooth);
          height: 450px;
          display: flex;
          flex-direction: column;
        }

        .collection-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-color);
        }

        .card-img {
          height: 65%;
          width: 100%;
          transition: var(--transition-smooth);
          overflow: hidden;
        }

        .card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .collection-card:hover .card-img img {
          transform: scale(1.1);
        }

        .card-content {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 180px; /* Ensures consistent content height */
        }

        .card-content h3 {
          margin-bottom: 10px;
          font-size: 1.5rem;
        }

        .card-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 20px;
        }

        .learn-more {
          color: var(--accent-color);
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .hero {
            height: auto;
            padding: 120px 0 60px;
            text-align: center;
          }

          .hero-text h1 {
            font-size: 2.8rem;
            margin-bottom: 20px;
          }

          .hero-text p {
            font-size: 1rem;
            margin: 0 auto 30px;
          }

          .hero-btns {
            flex-direction: column;
            gap: 15px;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
          }

          .hero-btns button {
            width: 100%;
          }

          .collections {
            padding: 60px 0;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .collection-grid.dual-grid {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }

          .collection-card {
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
