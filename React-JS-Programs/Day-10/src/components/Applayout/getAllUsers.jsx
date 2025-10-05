import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Fetch all users from backend
export const getAllUsers = async () => {
  return await api.get('/users');
};

// Create a new user
export const createUser = async (userData) => {
  return await api.post('/users', userData);
};
