import React, { createContext, useContext, useState, useEffect } from 'react';
import type { UserType } from '../types';

interface AuthUser {
  id: string;
  email: string;
  nombre: string;
  tipo: UserType;
  avatar?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => boolean;
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

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
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
