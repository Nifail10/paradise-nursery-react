import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const location = useLocation();

  return (
    <nav className="navbar" id="main-navbar">
      <Link to="/" className="nav-brand">
        <span className="brand-icon">🌿</span>
        <span className="brand-text">Paradise Nursery</span>
      </Link>
      <div className="nav-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          id="nav-home"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          Home
        </Link>
        <Link
          to="/plants"
          className={`nav-link ${location.pathname === '/plants' ? 'active' : ''}`}
          id="nav-plants"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c4-4 8-7.5 8-12a8 8 0 00-16 0c0 4.5 4 8 8 12z"/>
            <path d="M12 22V10"/>
          </svg>
          Plants
        </Link>
        <Link
          to="/about"
          className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          id="nav-about"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          About
        </Link>
        <Link to="/cart" className="nav-cart-link" id="nav-cart">
          <div className="cart-icon-wrapper">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
            </svg>
            {cartQuantity > 0 && (
              <span className="cart-badge" id="cart-badge">
                {cartQuantity}
              </span>
            )}
          </div>
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
