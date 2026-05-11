// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isCrmOpen, setIsCrmOpen] = useState(false);
//   const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);

//   useEffect(() => {
//     // Check for token in sessionStorage on app load
//     const token = sessionStorage.getItem('token');
//     const userData = sessionStorage.getItem('user');
    
//     if (token && userData) {
//       setIsAuthenticated(true);
//       setUser(JSON.parse(userData));
//     }
//     setLoading(false);
//   }, []);

//   const login = (token, userData) => {
//     sessionStorage.setItem('token', token);
//     sessionStorage.setItem('user', JSON.stringify(userData));
//     setIsAuthenticated(true);
//     setUser(userData);
//   };

//   const logout = () => {
//     sessionStorage.removeItem('token');
//     sessionStorage.removeItem('user');
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   const toggleCrm = () => {
//     setIsCrmOpen(!isCrmOpen);
//   };

//   const toggleUserManagement = () => {
//     setIsUserManagementOpen(!isUserManagementOpen);
//   };

//   const value = {
//     isAuthenticated,
//     user,
//     loading,
//     login,
//     logout,
//     isCrmOpen,
//     setIsCrmOpen,
//     toggleCrm,
//     isUserManagementOpen,
//     setIsUserManagementOpen,
//     toggleUserManagement
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sidebar States
  const [isCrmOpen, setIsCrmOpen] = useState(false);
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);
  const [isHrmsOpen, setIsHrmsOpen] = useState(false); // ✅ ADDED

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const userData = sessionStorage.getItem('user');
    
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (token, userData) => {
    try {
      // Handle direct token and user data from Login component
      if (token && userData) {
        setIsAuthenticated(true);
        setUser(userData);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(userData));
        return { success: true };
      } else {
        // Handle credentials login via authService
        const response = await authService.login(token); // Notice 'token' parameter may hold credentials here if called with 1 arg
        
        // Use user directly from response
        const loggedInUser = response.user;
        
        setIsAuthenticated(true);
        setUser(loggedInUser);
        return response;
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setUser(null);
    setIsCrmOpen(false);
    setIsUserManagementOpen(false);
    setIsHrmsOpen(false);
  };

  // Toggle CRM
  const toggleCrm = () => {
    setIsCrmOpen(!isCrmOpen);
    setIsUserManagementOpen(false);
    setIsHrmsOpen(false); // Close others
  };

  // Toggle User Management
  const toggleUserManagement = () => {
    setIsUserManagementOpen(!isUserManagementOpen);
    setIsCrmOpen(false);
    setIsHrmsOpen(false);
  };

  // ✅ Toggle HRMS
  const toggleHrms = () => {
    setIsHrmsOpen(!isHrmsOpen);
    setIsCrmOpen(false);
    setIsUserManagementOpen(false);
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,

    // Sidebar states
    isCrmOpen,
    setIsCrmOpen,
    toggleCrm,

    isUserManagementOpen,
    setIsUserManagementOpen,
    toggleUserManagement,

    isHrmsOpen,          
    setIsHrmsOpen,       
    toggleHrms          
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

