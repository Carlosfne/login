import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { login as loginService, register as registerService } from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(storedUser);
      }
    };
    fetchUser();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const success = await loginService(email, password);
    if (success) {
      setUser(email);
      await AsyncStorage.setItem('user', email);
      return true;
    }
    return false;
  };

  const register = async (email: string, password: string): Promise<boolean> => {
    const success = await registerService(email, password);
    if (success) {
      await AsyncStorage.setItem('user', email);
      setUser(email);
      return true;
    }
    return false;
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
