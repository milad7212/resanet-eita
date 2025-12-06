'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the type for the user object
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the type for the Auth context
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the Auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Failed to load user from localStorage:', error);
    }
    setIsInitialLoad(false);
  }, []);

  // Mock login function
  const login = async (email: string, password: string) => {
    // In a real app, you'd make an API call here
    if (email === 'test@example.com' && password === 'password') {
      const mockUser: User = {
        id: 1,
        name: 'کاربر تست',
        email: 'test@example.com',
      };
      setUser(mockUser);
      try {
        localStorage.setItem('user', JSON.stringify(mockUser));
      } catch (error) {
        console.error('Failed to save user to localStorage:', error);
      }
    } else {
      throw new Error('نام کاربری یا رمز عبور اشتباه است.');
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Failed to remove user from localStorage:', error);
    }
  };

  if (isInitialLoad) {
    return null; // Or a loading spinner
  }

  const value = {
    isAuthenticated: !!user,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
