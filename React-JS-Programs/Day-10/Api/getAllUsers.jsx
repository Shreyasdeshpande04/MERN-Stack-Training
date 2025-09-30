import axios from "axios";

// Axios instance with base URL
const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// Export function to get all users
export const getAllUsers = async () => {
  return await api.get("/getAll");
};
