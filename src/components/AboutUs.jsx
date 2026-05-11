import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus" id="aboutus-page">
      {/* ── Hero Section ── */}
      <header className="aboutus-hero">
        <span className="aboutus-hero-badge">🌿 Who We Are</span>
        <h1 className="aboutus-hero-title">
          About <span className="aboutus-accent">Paradise Nursery</span>
        </h1>
        <p className="aboutus-hero-tagline">
          Where green dreams come home
        </p>
      </header>

      {/* ── Introduction ── */}
      <section className="aboutus-content">
        <div className="aboutus-intro">
          <div className="aboutus-card aboutus-card--wide" id="aboutus-intro-card">
            <div className="aboutus-card-icon">🏡</div>
            <h2>Welcome to Paradise Nursery</h2>
            <p>
              Welcome to Paradise Nursery, your trusted destination for beautiful
              indoor plants and nature-inspired living. We are passionate about
              bringing greenery into homes and creating a peaceful environment
              through carefully selected houseplants. Since our founding, we have
              grown from a small backyard garden into a beloved online nursery,
              serving thousands of plant enthusiasts who share our vision of
              greener, healthier living spaces.
            </p>
            <p>
              Every plant in our collection is handpicked by our team of
              horticultural experts who ensure only the healthiest, most vibrant
              specimens make it to your doorstep. We partner with sustainable
              growers who share our commitment to environmentally responsible
              cultivation practices.
            </p>
          </div>
        </div>

        {/* ── Mission & Vision Cards ── */}
        <div className="aboutus-grid" id="aboutus-mission-section">
          <div className="aboutus-card">
            <div className="aboutus-card-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide high-quality indoor plants that improve
              air quality, reduce stress, and enhance the beauty of living
              spaces. From low-maintenance succulents to vibrant flowering
              plants, Paradise Nursery offers plants suitable for every home
              and lifestyle. We strive to make plant parenthood accessible,
              joyful, and rewarding — whether you're a seasoned gardener or
              nurturing your very first seedling.
            </p>
          </div>

          <div className="aboutus-card">
            <div className="aboutus-card-icon">🌍</div>
            <h2>Our Vision</h2>
            <p>
              We envision a world where every home breathes with life — where
              lush greenery is not a luxury but a way of living. Our goal is
              to become the most trusted name in indoor gardening, inspiring
              millions of people to reconnect with nature and experience the
              transformative power of plants. Together, we are building a
              greener tomorrow, one plant at a time.
            </p>
          </div>
        </div>

        {/* ── Philosophy Section ── */}
        <div className="aboutus-philosophy" id="aboutus-philosophy">
          <div className="aboutus-card aboutus-card--wide">
            <div className="aboutus-card-icon">💚</div>
            <h2>Our Philosophy</h2>
            <p>
              We believe plants are more than decoration — they create positivity,
              freshness, and a deep connection with nature. Studies show that
              spending just a few minutes around houseplants can significantly
              lower blood pressure, reduce anxiety, and boost creativity. Our
              team works tirelessly to ensure every customer enjoys a wonderful
              plant shopping experience, from browsing our curated collection to
              unboxing their new green companion.
            </p>
            <p>
              At Paradise Nursery, sustainability isn't just a buzzword — it's
              the foundation of everything we do. We use eco-friendly packaging,
              support local growers, and donate a portion of every sale to
              reforestation initiatives around the globe.
            </p>
          </div>
        </div>

        {/* ── Benefits of Indoor Plants ── */}
        <div className="aboutus-benefits" id="aboutus-benefits">
          <h2 className="aboutus-benefits-title">
            Benefits of Indoor Plants
          </h2>
          <div className="aboutus-benefits-grid">
            <div className="aboutus-benefit">
              <div className="aboutus-benefit-icon">💨</div>
              <h3>Purify Air</h3>
              <p>Remove harmful toxins like formaldehyde, benzene, and trichloroethylene from your indoor environment</p>
            </div>
            <div className="aboutus-benefit">
              <div className="aboutus-benefit-icon">😌</div>
              <h3>Reduce Stress</h3>
              <p>Lower cortisol levels and promote a sense of calm, helping you unwind after a long day</p>
            </div>
            <div className="aboutus-benefit">
              <div className="aboutus-benefit-icon">🧠</div>
              <h3>Boost Focus</h3>
              <p>Increase concentration and productivity by up to 15% with greenery in your workspace</p>
            </div>
            <div className="aboutus-benefit">
              <div className="aboutus-benefit-icon">💤</div>
              <h3>Better Sleep</h3>
              <p>Certain plants release oxygen at night, naturally improving your sleep quality</p>
            </div>
            <div className="aboutus-benefit">
              <div className="aboutus-benefit-icon">💧</div>
              <h3>Humidify Air</h3>
              <p>Naturally increase humidity, reducing dry skin, sore throats, and respiratory issues</p>
            </div>
            <div className="aboutus-benefit">
              <div className="aboutus-benefit-icon">🎨</div>
              <h3>Enhance Decor</h3>
              <p>Add life, color, and organic texture to any room effortlessly and affordably</p>
            </div>
          </div>
        </div>

        {/* ── Closing ── */}
        <div className="aboutus-closing" id="aboutus-closing">
          <div className="aboutus-card aboutus-card--highlight">
            <div className="aboutus-card-icon">🌱</div>
            <h2>Let's Grow Together</h2>
            <p>
              Thank you for choosing Paradise Nursery. Whether you're looking
              to purify your air, brighten up a corner, or start a full indoor
              jungle, we're here to guide you every step of the way. Join our
              growing community of plant lovers and let's make the world a
              greener, happier place — one leaf at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
