// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const contactRoutes = require('./routes/contactRoutes');
// const mongoose = require("mongoose");

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:4200',
//   // origin: 'http://localhost:4200',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
// app.use(bodyParser.json());

// // Routes
// app.use('/api/contact', contactRoutes);

// // Root Route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Ayacodia API!');
// });

// // Start Server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
// CORS setup to allow requests from localhost:3001 (React app)
const corsOptions = {
  // origin: ['http://localhost:3001'],
  origin: process.env.CLIENT_ORIGIN,
  // origin: ['https://ayacodia.com'], // Add localhost:3001 here
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));

// Middlewares
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
const studentRoutes = require('./routes/student');

// THE SECTION OF THE STUDENT 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/students', studentRoutes);

// 👇 Add this route to test the server in browser
app.get('/', (req, res) => {
  res.send('✅ Your application works well!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
