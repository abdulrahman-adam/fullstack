// src/services/studentService.js
import api from './api';

export const createStudent = (formData) => {
  return api.post('/api/students/add', formData);
};

// You can later add more actions like:
export const getStudents = () => api.get('/api/students');
export const updateStudent = (id, data) => api.put(`/api/students/${id}`, data);
export const deleteStudent = (id) => api.delete(`/api/students/${id}`);
