import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <div className="landing-badge">🌿 Welcome to</div>
        <h1 className="landing-title">
          Paradise <span className="title-accent">Nursery</span>
        </h1>
        <p className="landing-subtitle">
          Transform your living space into a lush green sanctuary. Discover our
          curated collection of premium houseplants — from air-purifying
          champions to stunning succulents — each handpicked to bring life,
          beauty, and wellness into your home.
        </p>
        <button
          className="landing-btn"
          onClick={() => navigate('/plants')}
          id="get-started-btn"
        >
          <span>Get Started</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="landing-decorations">
        <div className="floating-leaf leaf-1">🍃</div>
        <div className="floating-leaf leaf-2">🌱</div>
        <div className="floating-leaf leaf-3">🌿</div>
        <div className="floating-leaf leaf-4">☘️</div>
        <div className="floating-leaf leaf-5">🍀</div>
      </div>
    </div>
  );
}

export default LandingPage;
