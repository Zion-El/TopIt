"use client";
import usePost from '@/hooks/usePost';
import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the user object
interface User {
  id: number;
  username: string;
}

// Define the shape of the AuthContext
interface AuthContextType {
  isLoggedIn: boolean;
  userData: User | null;
  handleLogin: (token: string, userData: User) => void;
  // handleRegister: (token: string, userData: User) => void;
  handleLogout: () => void;

}

// Create the AuthContext
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Define the AuthProvider props
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!localStorage.getItem('token')
  );
  const [lastActiveTimestamp, setLastActiveTimestamp] = useState<number>(
    Date.now()
  );
  const [userData, setUserData] = useState<User | null>(null);

  const MAX_INACTIVITY_DURATION = 50 * 60 * 10000;

  useEffect(() => {
    const handleActivity = () => {
      setLastActiveTimestamp(Date.now());
    };

    // Add event listeners to track user activity
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);

    // Check if there is a token in the localStorage and set the login state
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const info = localStorage.getItem('details');
      if (info) {
        setUserData(JSON.parse(info));
      }
    }

    return () => {
      // Clean up event listeners
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };
  }, []);

    
  // useEffect(() => {
  //   const logoutAfterInactivity = setInterval(() => {
  //     const currentTime = Date.now();
  //     if (
  //       isLoggedIn &&
  //       currentTime - lastActiveTimestamp > MAX_INACTIVITY_DURATION
  //     ) {
  //       logout();
  //     }
  //   }, 1000);

  //   return () => {
  //     clearInterval(logoutAfterInactivity);
  //   };
  // }, [isLoggedIn, lastActiveTimestamp]);

  const handleLogin = (token: string, userData: User) => {
    localStorage.setItem('token', token);
    localStorage.setItem('details', JSON.stringify(userData));
    setIsLoggedIn(true);
    setLastActiveTimestamp(Date.now());
    setUserData(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('details');
    setIsLoggedIn(false);
  };


  const values = {
    isLoggedIn,
    userData,
    handleLogin,
    handleLogout
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};
