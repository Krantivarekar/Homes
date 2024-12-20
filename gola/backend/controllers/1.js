// controllers/1.js
const Project = require('../models/1'); // Import the Project model

// Function to create a new project with a custom projectId
const createProject = async (req, res) => {
  try {
    const { projectTitle, institute, location, focusArea, metrics } = req.body;

    // Generate a custom projectId (e.g., RP1, RP2, RP3, etc.)
    const lastProject = await Project.findOne().sort({ projectId: -1 }).limit(1);
    const lastProjectId = lastProject ? parseInt(lastProject.projectId.replace('RP', '')) : 0;
    const newProjectId = `RP${lastProjectId + 1}`;

    // Create a new project with the custom ID
    const newProject = new Project({
      projectId: newProjectId,
      projectTitle,
      institute,
      location,
      focusArea,
      metrics
    });

    // Save the new project to the database
    await newProject.save();

    // Respond with the created project data
    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating the project', error });
  }
};

module.exports = { createProject };
