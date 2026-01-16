import React from 'react';

/**
 * Header Component
 * Displays navigation and cart icon with item count
 */
const Header = ({ cartItemCount, onNavigate }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="logo" onClick={() => onNavigate('menu')} style={{ cursor: 'pointer' }}>
            🍔 Burger Delivery
          </h1>
          <nav className="nav">
            <button 
              type="button"
              className="nav-link" 
              onClick={() => onNavigate('menu')}
            >
              Menu
            </button>
            <button 
              type="button"
              className="nav-link cart-button" 
              onClick={() => onNavigate('cart')}
            >
              🛒 Cart {cartItemCount > 0 && `(${cartItemCount})`}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
