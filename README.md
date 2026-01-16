# Burger Delivery Platform

A web-based Online Burger Delivery Platform built with React for a university project. This is a frontend-only application that demonstrates React component architecture, state management, and data persistence using localStorage/sessionStorage.

## Features

- 🍔 **Burger Menu Display** - Browse through a variety of delicious burgers with images, descriptions, and prices
- 🛒 **Shopping Cart** - Add items to cart, update quantities, and remove items
- 💳 **Checkout Process** - Capture customer delivery information
- ✅ **Order Confirmation** - View order details and confirmation
- 💾 **Data Persistence** - Cart and orders are saved in localStorage/sessionStorage
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## Technology Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **localStorage/sessionStorage** - Data persistence
- **CSS3** - Styling with responsive design

## Project Structure

```
BurgerDeliveryPlatform/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── BurgerMenu.jsx      # Menu display component
│   │   ├── BurgerCard.jsx      # Individual burger card
│   │   ├── Cart.jsx            # Shopping cart component
│   │   ├── Checkout.jsx        # Checkout form component
│   │   └── OrderConfirmation.jsx # Order confirmation page
│   ├── data/
│   │   └── burgerData.js       # Static burger menu data
│   ├── utils/
│   │   └── storage.js          # localStorage/sessionStorage utilities
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## How It Works

### State Management
- Uses React `useState` and `useEffect` hooks for state management
- Cart state is synchronized with localStorage
- Orders are saved to localStorage when placed

### Data Persistence
- **Cart**: Stored in `localStorage` - persists across browser sessions
- **Orders**: Stored in `localStorage` - order history is maintained
- **User Data**: Stored in `sessionStorage` - cleared when browser session ends

### Component Architecture
- **App.jsx**: Main component managing routing and global state
- **Header**: Navigation and cart indicator
- **BurgerMenu**: Displays all available burgers
- **Cart**: Shows cart items with quantity controls
- **Checkout**: Form for capturing delivery information
- **OrderConfirmation**: Displays order details after placement

## Features Explained

### Menu Display
- Static burger data is loaded from `src/data/burgerData.js`
- Each burger displays image, name, description, price, and category
- Users can add burgers to cart directly from the menu

### Shopping Cart
- View all items in cart
- Increase/decrease item quantities
- Remove items from cart
- See subtotal, delivery fee, and total price
- Cart persists in localStorage

### Checkout
- Form validation for required fields
- User information is saved to sessionStorage for convenience
- Order summary displayed alongside form

### Order Confirmation
- Shows order ID, date, delivery address, and items
- Order is saved to localStorage
- Cart is cleared after order placement

## Project Constraints

This is a **frontend-only** project for educational purposes:
- ❌ No backend server
- ❌ No database
- ❌ No authentication
- ❌ No payment gateway
- ❌ No real delivery tracking

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational purposes as part of a university project.

## Author

University Project - Burger Delivery Platform
