import React from 'react';
import BurgerCard from './BurgerCard';
import { burgerMenu } from '../data/burgerData';

/**
 * BurgerMenu Component
 * Displays the full menu of available burgers
 */
const BurgerMenu = ({ onAddToCart }) => {
  return (
    <div className="menu-section">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <div className="burger-grid">
          {burgerMenu.map((burger) => (
            <BurgerCard
              key={burger.id}
              burger={burger}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
