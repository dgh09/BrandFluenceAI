import React, { createContext, useContext, useState, useEffect } from 'react';
import type { UserType } from '../types';

interface AuthUser {
  id: string;
  email: string;
  nombre: string;
  tipo: UserType;
  avatar?: string;
}

interface RegisterData {
  email: string;
  password: string;
  tipo: UserType;
  companyName?: string;
  position?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => boolean;
  register: (data: RegisterData) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const mockUsers: Array<AuthUser & { password: string }> = [
  {
    id: 'creator-001',
    email: 'maria@creator.com',
    password: 'creator123',
    nombre: 'María García',
    tipo: 'creator',
    avatar: ''
  },
  {
    id: 'brand-001',
    email: 'nike@brand.com',
    password: 'brand123',
    nombre: 'Nike Sports',
    tipo: 'brand',
    avatar: ''
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const foundUser = mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (foundUser) {
      const authUser: AuthUser = {
        id: foundUser.id,
        email: foundUser.email,
        nombre: foundUser.nombre,
        tipo: foundUser.tipo,
        avatar: foundUser.avatar
      };
      setUser(authUser);
      localStorage.setItem('auth_user', JSON.stringify(authUser));
      return true;
    }

    return false;
  };

  const register = (data: RegisterData): boolean => {
    // Check if email already exists
    const existingUser = mockUsers.find(u => u.email === data.email);
    if (existingUser) {
      return false; // Email already registered
    }

    // Create new user
    const newUser: AuthUser = {
      id: `${data.tipo}-${Date.now()}`,
      email: data.email,
      nombre: data.companyName || 'Nuevo Usuario',
      tipo: data.tipo,
      avatar: ''
    };

    // In a real app, this would be saved to database
    // For now, we'll just add it to localStorage for the session
    setUser(newUser);
    localStorage.setItem('auth_user', JSON.stringify(newUser));
    localStorage.setItem('pending_onboarding', 'true');

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
    localStorage.removeItem('pending_onboarding');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
