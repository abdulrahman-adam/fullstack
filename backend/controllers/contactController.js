// const contactModel = require('../models/contactModel');

// // Add Contact
// exports.addContact = (req, res) => {
//   const { name, telephone, email, message } = req.body;
//   const details = { name, telephone, email, message };

//   contactModel.createContact(details, (err) => {
//     if (err) {
//       res.status(500).json({ status: false, message: 'Your message has failed.' });
//     } else {
//       res.status(200).json({ status: true, message: 'Your message has been added.' });
//     }
//   });
// };

// // Get All Contacts
// exports.getContacts = (req, res) => {
//   contactModel.getAllContacts((err, results) => {
//     if (err) {
//       res.status(500).json({ status: false, message: 'Failed to retrieve contacts.' });
//     } else {
//       res.status(200).json({ status: true, data: results });
//     }
//   });
// };

// // Get Contact by ID
// exports.getContactById = (req, res) => {
//   const { id } = req.params;
//   contactModel.getContactById(id, (err, results) => {
//     if (err) {
//       res.status(500).json({ status: false, message: 'Failed to retrieve contact.' });
//     } else {
//       res.status(200).json({ status: true, data: results });
//     }
//   });
// };

// // Delete Contact
// exports.deleteContact = (req, res) => {
//   const { id } = req.params;
//   contactModel.deleteContact(id, (err) => {
//     if (err) {
//       res.status(500).json({ status: false, message: 'Contact deletion failed.' });
//     } else {
//       res.status(200).json({ status: true, message: 'Contact deleted successfully.' });
//     }
//   });
// };


const Contact = require('../models/Contact');
const mongoose = require('mongoose');


exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get Contact by ID
// const Contact = require('../models/Contact');  // Assuming you have a Contact model

exports.getContactById = async (req, res) => {
  try {
    const { id } = req.params; // Extract the contact ID from the URL

    // Validate that the ID is a valid MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ status: false, message: 'Invalid contact ID format.' });
    }

    // Find the contact by ID using Mongoose
    const contact = await Contact.findById(id);

    // If contact not found, return 404
    if (!contact) {
      return res.status(404).json({ status: false, message: 'Contact not found.' });
    }

    // If found, return the contact data
    res.status(200).json({ status: true, data: contact });
  } catch (err) {
    // If error occurs during database operation
    res.status(500).json({ status: false, message: 'Failed to retrieve contact.', error: err.message });
  }
};


// const mongoose = require('mongoose');
// const Contact = require('../models/Contact'); // Adjust the path if necessary

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ status: false, message: 'Invalid contact ID format.' });
    }

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ status: false, message: 'Contact not found.' });
    }

    res.status(200).json({ status: true, message: 'Contact deleted successfully.' });
  } catch (err) {
    res.status(500).json({ status: false, message: 'Failed to delete contact.', error: err.message });
  }
};



