import { api } from './api';

export const authService = {
  // Login user
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    
    if (response.success) {
      // Backend returns token and user directly on the response object
      sessionStorage.setItem('token', response.token);
      sessionStorage.setItem('user', JSON.stringify(response.user));
    }
    
    return response;
  },

  
  // Get current user
  getCurrentUser: () => {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!sessionStorage.getItem('token');
  },

  // Logout user
  logout: () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  },
};
