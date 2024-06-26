import axios from 'axios';

const API_URL = 'https://ai-certs-sxb7.onrender.com/tasks';
// const API_URL = 'http://localhost:5000/tasks';

export const getTasks = () => axios.get(API_URL);
export const getTask = (id) => axios.get(`${API_URL}/${id}`);
export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
