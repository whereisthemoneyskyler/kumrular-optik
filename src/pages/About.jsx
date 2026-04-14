import React from 'react';

const About = () => {
  return (
    <div className="about-page fade-in">
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="section-container about-hero-content">
          <h1 className="gold-text">Hikayemiz</h1>
          <p>Yılların Tecrübesi, Geleceğin Vizyonu</p>
        </div>
      </section>

      <section className="about-content section-container">
        <div className="about-grid">
          <div className="about-main-text">
            <h2>Kumrular Optik</h2>
            <div className="accent-line"></div>
            <p>
              1995 yılından bu güne kadar hizmet verdiğimiz optik sektöründe kazanmış olduğumuz bilgi birikimi, tecrübe ve deneyimlerimizi paylaşmak için 2016 yılında <strong>KUMRULAR OPTİK</strong>'i siz değerli müşterilerimizin hizmetine açtık.
            </p>
            <p>
              Dünyaca ünlü lens markalarını, sektöre yeni katılan ileri teknoloji ürünleri ve gelişmeleri, yılların verdiği tecrübe, deneyim ve KUMRULAR OPTİK farkı ile siz sayın müşterilerimizin beğenisine sunuyor, her zaman kaliteli ürünleri en doğru şekilde sizlerle buluşturuyoruz.
            </p>
            <p>
              Amacımız, güvenilir, dürüst ve güler yüzlü hizmet anlayışımız ile bu günlere gelebilmemizde en büyük destekçimiz olan siz sayın müşterilerimizde alışkanlık yaratabilmek ve kalıcı olmaktır.
            </p>
            <p>
              İşte bu sebeple, geleceğe daha güvenle bakan gözlerde bizlerin de katkısı olması adına sizleri, Kumrular Caddesi, Kızılay - ANKARA da hizmet veren <strong>KUMRULAR OPTİK</strong>'e bekliyoruz. Saygılarımızla...
            </p>
          </div>

          <aside className="about-sidebar">
            <div className="info-card glass">
              <h3 className="gold-text">Çalışma Saatlerimiz</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span>Pazartesi - Cumartesi</span>
                  <span>07:00 - 20:00</span>
                </div>
                <div className="hour-item">
                  <span>Pazar</span>
                  <span>11:00 - 17:00</span>
                </div>
              </div>
            </div>

            <div className="info-card glass">
              <h3 className="gold-text">Lokasyon</h3>
              <p>Kumrular Caddesi No: 14/B<br />Kızılay - Çankaya / ANKARA</p>
              <button className="gold-btn small-btn">Yol Tarifi Al</button>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .about-hero {
          height: 40vh;
          background: #F8F9FA;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
        }

        .about-hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 10px;
        }

        .about-content {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 60px;
        }

        .about-main-text h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .about-main-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 25px;
        }

        .about-sidebar {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-card {
          padding: 30px;
          border-radius: 20px;
        }

        .info-card h3 {
          margin-bottom: 20px;
          font-size: 1.3rem;
        }

        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .hour-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--text-secondary);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          padding-bottom: 8px;
        }

        .small-btn {
          width: 100%;
          margin-top: 15px;
          padding: 10px;
          font-size: 0.9rem;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-hero h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
