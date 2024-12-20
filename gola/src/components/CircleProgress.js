import React from 'react';
import './CircleProgress.css'; // Ensure you have appropriate styles for the circles

const CircleProgress = ({ currentStage, onStageChange }) => {
  const stages = [
    'Conceptual Phase',
    'Principle Phase',
    'Finance Phase',
    'New Grant Phase',
    'Scaling & Growth Phase',
    'Startup Established Phase'
  ];

  // Handle the Next Stage
  const handleNextStage = () => {
    if (currentStage < stages.length - 1) {
      onStageChange(currentStage + 1);
    }
  };

  // Handle the Previous Stage
  const handlePreviousStage = () => {
    if (currentStage > 0) {
      onStageChange(currentStage - 1);
    }
  };

  // Handle direct click on a stage
  const handleStageClick = (index) => {
    onStageChange(index);
  };

  return (
    <div className="circle-progress-container">
      {/* Stage navigation */}
      <div className="stages">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`stage ${index <= currentStage ? 'active' : ''}`}
            onClick={() => handleStageClick(index)} // Allow stage click for navigation
          >
            {stage}
          </div>
        ))}
      </div>

      {/* Circle to represent current stage */}
      <div className="circle-container">
        <div className={`circle stage-${currentStage}`}></div>
      </div>

      {/* Controls for Next/Previous buttons */}
      <div className="controls">
        <button onClick={handlePreviousStage} disabled={currentStage === 0}>
          Previous
        </button>
        <button onClick={handleNextStage} disabled={currentStage === stages.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CircleProgress;
