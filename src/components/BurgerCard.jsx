import React from 'react';

/**
 * BurgerCard Component
 * Displays individual burger item with details and add to cart functionality
 */
const BurgerCard = ({ burger, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(burger);
  };

  // Handle image loading errors with fallback
  const handleImageError = (e) => {
    // Fallback to a placeholder image if the original fails to load
    e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(burger.name);
  };

  return (
    <div className="burger-card">
      <div className="burger-image">
        <img 
          src={burger.image} 
          alt={burger.name}
          onError={handleImageError}
        />
      </div>
      <div className="burger-info">
        <h3 className="burger-name">{burger.name}</h3>
        <p className="burger-description">{burger.description}</p>
        <div className="burger-footer">
          <span className="burger-price">${burger.price.toFixed(2)}</span>
          <span className="burger-category">{burger.category}</span>
        </div>
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BurgerCard;
