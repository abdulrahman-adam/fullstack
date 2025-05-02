// const db = require('../config/db');

// // Create Contact
// exports.createContact = (details, callback) => {
//   const sql = 'INSERT INTO contacts SET ?';
//   db.query(sql, details, callback);
// };

// // Get All Contacts
// exports.getAllContacts = (callback) => {
//   const sql = 'SELECT * FROM contacts';
//   db.query(sql, callback);
// };

// // Get Contact by ID
// exports.getContactById = (id, callback) => {
//   const sql = 'SELECT * FROM contacts WHERE id = ?';
//   db.query(sql, [id], callback);
// };

// // Delete Contact
// exports.deleteContact = (id, callback) => {
//   const sql = 'DELETE FROM contacts WHERE id = ?';
//   db.query(sql, [id], callback);
// };



const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  telephone: { type: String, required: true }, // Change to String for flexibility
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true }
});

module.exports = mongoose.model('Contact', ContactSchema);

