'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for a single cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Define the type for the Cart context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

// Create the context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the Cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Provider component
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add item to cart or update quantity if it already exists
  const addToCart = (itemToAdd: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemToAdd.id);
      if (existingItem) {
        // If item exists, update its quantity
        return prevItems.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + itemToAdd.quantity }
            : item
        );
      }
      // If item doesn't exist, add it to the cart
      return [...prevItems, itemToAdd];
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Update quantity of an item
  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
