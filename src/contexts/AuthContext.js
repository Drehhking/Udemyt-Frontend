import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [purchasedCourses, setPurchasedCourses] = useState([]); // Store purchased courses
  

  // useEffect(() => {
    // const storedUser = JSON.parse(localStorage.getItem('user_data'));
    // if (storedUser) {
      // setUser(storedUser);
      // setPurchasedCourses(storedUser.purchasedCourses || []);
    // }
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user_data');
  
    if (token && userData) {
      const parsedUserData = JSON.parse(userData);
      login(token, parsedUserData); // This function should set the user and token in the context
      setPurchasedCourses(parsedUserData.purchasedCourses || []);
    }
  }, []);
  

  

  const login = (token, userData) => {
    setToken(token);
    setUser(userData);
    setPurchasedCourses(userData.purchasedCourses || []);
    localStorage.setItem('token', token);
    localStorage.setItem('user_data', JSON.stringify(userData));
    // setAuthState({ token, user });
  };

  

  const logout = () => {
    setToken(null);
    setUser(null);
    setPurchasedCourses([]); 
    localStorage.removeItem('token');
    localStorage.removeItem('user_data');
    window.location.href = "/login"
  };

  return (
    <AuthContext.Provider value={{ user, token, purchasedCourses, login, logout, setPurchasedCourses }}>
      {children}
    </AuthContext.Provider>
  );
};
