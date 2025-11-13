'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from './CartContext';

// Define the type for a single order
export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
}

// Define the type for the Order context
interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
}

// Create the context with a default value
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Custom hook to use the Order context
export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

// Provider component
interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider = ({ children }: OrderProviderProps) => {
  const [orders, setOrders] = useState<Order[]>([]);

  // Add a new order
  const addOrder = (order: Order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const value = {
    orders,
    addOrder,
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};
