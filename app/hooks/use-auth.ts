"use client";

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  setCredentials,
  logout as logoutAction,
  setLoading,
  setError,
  initializeAuth,
} from '../store/slices/authSlice';
import { User } from '../types/user';
import { RootState } from '../store/store';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, token, isAuthenticated, loading, error } = useAppSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  const login = async (username: string, password: string) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      const { token, ...userData } = data;
      dispatch(setCredentials({ user: userData as User, token }));
      return { success: true };
    } catch (err: any) {
      dispatch(setError(err.message));
      return { success: false, error: err.message };
    } finally {
      dispatch(setLoading(false));
    }
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    login,
    logout,
  };
};

export default useAuth;
