// models/1.js
const mongoose = require('mongoose');

// Define the schema for the project
const projectSchema = new mongoose.Schema(
  {
    projectId: {
      type: String,
      required: true,
      unique: true,  // Ensure the project ID is unique
    },
    projectTitle: {
      type: String,
      required: true
    },
    institute: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    focusArea: {
      type: String,
      required: true
    },
    metrics: [
      {
        metric: {
          type: String,
          required: true
        },
        value: {
          type: String,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

// Create a model from the schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
