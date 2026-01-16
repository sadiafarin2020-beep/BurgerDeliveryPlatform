/**
 * Utility functions for managing localStorage and sessionStorage
 * Handles cart, orders, and user data persistence
 */

// Cart Management
export const getCart = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.removeItem('cart');
};

// Order Management
export const saveOrder = (order) => {
  const orders = getOrders();
  const newOrder = {
    ...order,
    id: Date.now(), // Simple ID generation
    date: new Date().toISOString()
  };
  orders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(orders));
  return newOrder;
};

export const getOrders = () => {
  const orders = localStorage.getItem('orders');
  return orders ? JSON.parse(orders) : [];
};

export const getOrderById = (orderId) => {
  const orders = getOrders();
  return orders.find(order => order.id === parseInt(orderId));
};

// User Data Management (optional, for checkout form persistence)
export const saveUserData = (userData) => {
  sessionStorage.setItem('userData', JSON.stringify(userData));
};

export const getUserData = () => {
  const userData = sessionStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};
