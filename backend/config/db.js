

// OPCO
// CVEC
// bursier
// burser
// https://cvec.etudiant.gouv.fr/
// https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021261989/
// https://fo.visale.fr/#/fr/login
// l'amiable
// https://www.linkedin.com/checkpoint/enterprise/login/56745737?application=learning 
// https://www.linkedin.com/checkpoint/enterprise/login/56745737?application=learning 

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); // Force stop the app if DB connection fails
  }
};

module.exports = connectDB;
