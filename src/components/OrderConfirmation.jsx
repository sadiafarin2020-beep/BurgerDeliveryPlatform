import React from 'react';

/**
 * OrderConfirmation Component
 * Displays order confirmation with order details
 */
const OrderConfirmation = ({ order, onBackToMenu }) => {
  if (!order) {
    return (
      <div className="confirmation-section">
        <div className="container">
          <div className="confirmation-content">
            <h2>Order Not Found</h2>
            <button className="btn-primary" onClick={onBackToMenu}>
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  const orderTotal = order.items.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0
  ) + 2.99; // Including delivery fee

  return (
    <div className="confirmation-section">
      <div className="container">
        <div className="confirmation-content">
          <div className="confirmation-icon">✅</div>
          <h2 className="confirmation-title">Order Confirmed!</h2>
          <p className="confirmation-message">
            Thank you for your order. We're preparing your delicious burgers!
          </p>

          <div className="order-details">
            <div className="detail-section">
              <h3>Order Information</h3>
              <div className="detail-row">
                <span>Order ID:</span>
                <span>#{order.id}</span>
              </div>
              <div className="detail-row">
                <span>Order Date:</span>
                <span>{new Date(order.date).toLocaleString()}</span>
              </div>
            </div>

            <div className="detail-section">
              <h3>Delivery Address</h3>
              <p>{order.customerInfo.name}</p>
              <p>{order.customerInfo.address}</p>
              <p>{order.customerInfo.city}, {order.customerInfo.zipCode}</p>
              <p>Phone: {order.customerInfo.phone}</p>
              <p>Email: {order.customerInfo.email}</p>
              {order.customerInfo.deliveryInstructions && (
                <p className="delivery-instructions">
                  <strong>Instructions:</strong> {order.customerInfo.deliveryInstructions}
                </p>
              )}
            </div>

            <div className="detail-section">
              <h3>Order Items</h3>
              <div className="order-items-list">
                {order.items.map((item) => (
                  <div key={item.id} className="order-item">
                    <div className="order-item-info">
                      <span className="order-item-name">{item.name}</span>
                      <span className="order-item-quantity">x{item.quantity}</span>
                    </div>
                    <span className="order-item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <div className="order-total">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${(orderTotal - 2.99).toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery Fee:</span>
                  <span>$2.99</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total:</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <button className="btn-primary" onClick={onBackToMenu}>
            Order More Burgers
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
