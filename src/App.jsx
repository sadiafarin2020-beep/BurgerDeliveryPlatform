import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BurgerMenu from './components/BurgerMenu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import { getCart, saveCart, clearCart } from './utils/storage';
import { saveOrder } from './utils/storage';

/**
 * Main App Component
 * Manages application state and routing between different views
 */
function App() {
  // Current view state: 'menu', 'cart', 'checkout', 'confirmation'
  const [currentView, setCurrentView] = useState('menu');
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = getCart();
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  // Calculate cart item count for header
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Navigation handler
  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  // Add item to cart
  const handleAddToCart = (burger) => {
    setCart(prevCart => {
      // Check if item already exists in cart
      const existingItem = prevCart.find(item => item.id === burger.id);
      
      if (existingItem) {
        // Update quantity if item exists
        return prevCart.map(item =>
          item.id === burger.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item to cart
        return [...prevCart, { ...burger, quantity: 1 }];
      }
    });
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  // Calculate cart total
  const calculateCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Handle checkout navigation
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setCurrentView('checkout');
  };

  // Handle order placement
  const handlePlaceOrder = (customerInfo) => {
    const orderData = {
      items: [...cart],
      customerInfo: customerInfo,
      total: calculateCartTotal() + 2.99 // Including delivery fee
    };

    // Save order to localStorage
    const savedOrder = saveOrder(orderData);
    
    // Clear cart after order placement
    clearCart();
    setCart([]);
    
    // Set order and navigate to confirmation
    setOrder(savedOrder);
    setCurrentView('confirmation');
  };

  // Handle back to menu from confirmation
  const handleBackToMenu = () => {
    setOrder(null);
    setCurrentView('menu');
  };

  // Render current view
  const renderView = () => {
    switch (currentView) {
      case 'menu':
        return <BurgerMenu onAddToCart={handleAddToCart} />;
      
      case 'cart':
        return (
          <Cart
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckout}
          />
        );
      
      case 'checkout':
        return (
          <Checkout
            cart={cart}
            total={calculateCartTotal()}
            onPlaceOrder={handlePlaceOrder}
          />
        );
      
      case 'confirmation':
        return (
          <OrderConfirmation
            order={order}
            onBackToMenu={handleBackToMenu}
          />
        );
      
      default:
        return <BurgerMenu onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="app">
      <Header 
        cartItemCount={cartItemCount} 
        onNavigate={handleNavigate}
      />
      <main className="main-content">
        {renderView()}
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Burger Delivery Platform - University Project</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
