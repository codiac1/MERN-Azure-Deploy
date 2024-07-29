import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { Base_URL } from '../config';

const initialState = {
  user: null,
  token: localStorage.getItem('token')
};

const AuthContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return { ...state, token: action.payload.token };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'LOGOUT':
    case 'AUTH_ERROR':
      localStorage.removeItem('token');
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state.token) {
      setAuthToken(state.token);
      fetchUser();
    }
  }, [state.token]);

  // Set default headers for axios
  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${Base_URL}/api/auth/me`);
      dispatch({ type: 'SET_USER', payload: res.data });
    } catch (error) {
      console.error("Failed to fetch user", error);
      dispatch({ type: 'AUTH_ERROR' });
    }
  };

  const login = async (formData) => {
    try {
      const res = await axios.post(`${Base_URL}/api/auth/login`, formData);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      console.error("Login error:", error);
      dispatch({ type: 'AUTH_ERROR' });
      throw error;
    }
  };

  const register = async (formData) => {
    try {
      const res = await axios.post(`${Base_URL}/api/auth/register`, formData);
      dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
    } catch (error) {
      console.error("Register error:", error);
      dispatch({ type: 'AUTH_ERROR' });
      throw error;
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{
      user: state.user,
      token: state.token,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };