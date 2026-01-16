import React from 'react';

/**
 * Cart Component
 * Displays cart items with quantity controls and total calculation
 */
const Cart = ({ cart, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  const total = calculateTotal();

  // Handle quantity change
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      onRemoveItem(itemId);
    } else {
      onUpdateQuantity(itemId, newQuantity);
    }
  };

  // Handle image loading errors with fallback
  const handleImageError = (e, itemName) => {
    e.target.src = 'https://via.placeholder.com/100x100?text=' + encodeURIComponent(itemName);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-section">
        <div className="container">
          <h2 className="section-title">Your Cart</h2>
          <div className="empty-cart">
            <p>Your cart is empty. Add some burgers to get started! 🍔</p>
            <button 
              className="btn-primary"
              onClick={() => window.location.reload()}
            >
              Browse Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-section">
      <div className="container">
        <h2 className="section-title">Your Cart</h2>
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    onError={(e) => handleImageError(e, item.name)}
                  />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)} each</p>
                </div>
                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee:</span>
              <span>$2.99</span>
            </div>
            <div className="summary-row total-row">
              <span>Total:</span>
              <span>${(total + 2.99).toFixed(2)}</span>
            </div>
            <button 
              className="btn-primary checkout-btn"
              onClick={onCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
