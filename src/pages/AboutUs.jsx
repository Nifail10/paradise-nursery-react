function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1 id="about-page-title">About Paradise Nursery</h1>
        <p className="about-hero-text">
          Where green dreams come home
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="about-card">
            <div className="about-card-icon">🌱</div>
            <h2>Our Story</h2>
            <p>
              Founded with a passion for greenery, Paradise Nursery began as a small
              backyard garden and blossomed into a trusted destination for plant
              lovers everywhere. We believe that every space deserves a touch of
              nature, and every person deserves the joy that comes from nurturing
              a living, growing companion.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-card">
            <div className="about-card-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>
              At Paradise Nursery, our mission is to make plant parenthood
              accessible, joyful, and rewarding for everyone. We carefully curate
              each plant in our collection to ensure you receive only the healthiest,
              most vibrant specimens — along with expert guidance to help them
              thrive in your unique space.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-card">
            <div className="about-card-icon">🏡</div>
            <h2>Why Indoor Plants?</h2>
            <p>
              Indoor plants do more than beautify your home. Scientific studies have
              shown that houseplants can reduce stress by up to 37%, boost
              productivity, improve air quality by removing harmful toxins, and even
              enhance your mood and creativity. They're nature's own wellness
              solution, right in your living room.
            </p>
          </div>
        </section>

        <section className="about-benefits">
          <h2 className="benefits-title">Benefits of Houseplants</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">💨</div>
              <h3>Purify Air</h3>
              <p>Remove toxins like formaldehyde, benzene, and trichloroethylene</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">😌</div>
              <h3>Reduce Stress</h3>
              <p>Lower cortisol levels and promote a sense of calm and well-being</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🧠</div>
              <h3>Boost Focus</h3>
              <p>Increase concentration and productivity by up to 15%</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💤</div>
              <h3>Better Sleep</h3>
              <p>Certain plants release oxygen at night, improving sleep quality</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💧</div>
              <h3>Humidify Air</h3>
              <p>Naturally increase humidity, reducing dry skin and respiratory issues</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🎨</div>
              <h3>Enhance Decor</h3>
              <p>Add life, color, and texture to any room effortlessly</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
