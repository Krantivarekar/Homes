// routes/1.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/1'); // Update if needed

// Define a route for getting project data (GET request)
router.get('/', projectController.getAllProjects);

// Define a route for creating project data (POST request)
router.post('/', projectController.createProject);

module.exports = router;
