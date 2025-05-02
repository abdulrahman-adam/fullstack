import React, { useEffect, useState } from 'react';
import {
  getStudents,
  deleteStudent,
  updateStudent,
} from '../../services/studentService';
import './StudentTable.css';

const BASE_URL = process.env.REACT_APP_API_URL;

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.error('Failed to fetch students', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        fetchStudents();
      } catch (err) {
        console.error('Failed to delete student', err);
      }
    }
  };

  const handleEdit = (student) => {
    setEditingId(student._id);
    setFormData({ ...student });
  };

  const handleUpdate = async () => {
    try {
      await updateStudent(editingId, formData);
      setEditingId(null);
      fetchStudents();
    } catch (err) {
      console.error('Failed to update student', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="table-container">
      <h2>Student List</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Telephone</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Country</th>
            <th>Image/PDF</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) =>
            editingId === student._id ? (
              <tr key={student._id}>
                <td><input name="name" value={formData.name} onChange={handleChange} /></td>
                <td><input name="telephone" value={formData.telephone} onChange={handleChange} /></td>
                <td><input name="email" value={formData.email} onChange={handleChange} /></td>
                <td>
                  <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </td>
                <td><input type="date" name="birthday" value={formData.birthday?.split('T')[0]} onChange={handleChange} /></td>
                <td><input name="country" value={formData.country} onChange={handleChange} /></td>
                <td>
                  <a href={`${BASE_URL}/uploads/${formData.imagePdf}`} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </td>
                <td>
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.telephone}</td>
                <td>{student.email}</td>
                <td>{student.gender}</td>
                <td>{new Date(student.birthday).toLocaleDateString()}</td>
                <td>{student.country}</td>
                <td>
                  {student.imagePdf?.endsWith('.pdf') ? (
                    <a href={`${BASE_URL}/uploads/${student.imagePdf}`} target="_blank" rel="noopener noreferrer">
                      PDF
                    </a>
                  ) : (
                    <img
                      src={`${BASE_URL}/uploads/${student.imagePdf}`}
                      alt="student file"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  )}
                </td>
                <td>
                  <button onClick={() => handleEdit(student)}>Edit</button>
                  <button onClick={() => handleDelete(student._id)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
