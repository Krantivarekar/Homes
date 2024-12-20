// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection string
const dbUri = process.env.MONGO_URI || 'mongodb://localhost:27017/RP1';

// Connect to MongoDB
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Import routes (using '1.js' for routes)
const projectRoutes = require('./routes/1');

// Use routes
app.use('/api/project', projectRoutes);

// Default route to check server status
app.get('/', (req, res) => {
  res.send('Welcome to the Smart Irrigation and Crop Management System API');
});

// Set the port to listen on
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
