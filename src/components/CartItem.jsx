import { useSelector, useDispatch } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../store/CartSlice';
import { useNavigate } from 'react-router-dom';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    alert('🛒 Checkout Coming Soon!\n\nWe\'re working hard to bring you a seamless checkout experience. Stay tuned!');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any plants yet. Start exploring our collection!</p>
          <button
            className="continue-shopping-btn"
            onClick={() => navigate('/plants')}
            id="continue-shopping-empty"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Browse Plants
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1 id="cart-page-title">Shopping Cart</h1>
        <p className="cart-summary-text">
          {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>

      <div className="cart-layout">
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item" id={`cart-item-${item.id}`}>
              <div className="cart-item-image-wrapper">
                <img src={item.image} alt={item.name} className="cart-item-image" />
              </div>
              <div className="cart-item-details">
                <div className="cart-item-top">
                  <div>
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-unit-price">
                      ${item.cost.toFixed(2)} each
                    </p>
                  </div>
                  <button
                    className="cart-delete-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                    title="Remove item"
                    id={`delete-btn-${item.id}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                      <line x1="10" y1="11" x2="10" y2="17"/>
                      <line x1="14" y1="11" x2="14" y2="17"/>
                    </svg>
                  </button>
                </div>
                <div className="cart-item-bottom">
                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      id={`dec-btn-${item.id}`}
                    >
                      −
                    </button>
                    <span className="qty-display">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      id={`inc-btn-${item.id}`}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    ${(item.cost * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-row">
              <span>Total Items</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row summary-total">
              <span>Grand Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <button
              className="checkout-btn"
              onClick={handleCheckout}
              id="checkout-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              Checkout
            </button>
            <button
              className="continue-shopping-btn"
              onClick={() => navigate('/plants')}
              id="continue-shopping-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
