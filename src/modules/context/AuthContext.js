import React, { createContext, useContext, useState } from 'react';

const context = {
  auth: '',
  saveToken: () => {},
};

const AuthContext = createContext(context);

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(localStorage.getItem('access_token'));

  const saveToken = (token) => {
    localStorage.setItem('access_token', token);
    setAuth(token);
  };

  const value = { auth, saveToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, AuthContext };
