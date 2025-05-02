const Student = require('../models/Student');
const mongoose = require('mongoose');


// Create Student
exports.createStudent = async (req, res) => {
  try {
    const { name, telephone, email, gender, birthday, country } = req.body;
    const imagePdf = req.file ? req.file.filename : null;

    const student = new Student({
      name,
      telephone,
      email,
      gender,
      birthday,
      country,
      imagePdf,
    });

    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error creating student', error });
  }
};

// Get All Students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
};

// Get Single Student
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching student', error });
  }
};

// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const { name, telephone, email, gender, birthday, country } = req.body;
    const updateData = { name, telephone, email, gender, birthday, country };

    if (req.file) {
      updateData.imagePdf = req.file.filename;
    }

    const student = await Student.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!student) return res.status(404).json({ message: 'Student not found' });

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error });
  }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error });
  }
};
