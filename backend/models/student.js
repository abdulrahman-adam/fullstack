const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  imagePdf: { type: String }, // store file path or URL
  birthday: { type: Date },
  country: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
