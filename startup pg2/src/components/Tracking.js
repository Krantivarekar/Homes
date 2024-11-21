import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2'; // Import necessary chart components
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const TrackingResearch = () => {
  const [researchData, setResearchData] = useState([]);

  useEffect(() => {
    // Fetch dummy data (replace with actual API calls)
    fetch('/api/research-data')
      .then((response) => response.json())
      .then((data) => {
        setResearchData(data);
      })
      .catch((error) => console.error('Error fetching research data:', error));
  }, []);

  // Dummy data for research progress metrics
  const researchMetrics = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Papers Published',
        data: [2, 4, 5, 7, 10, 12, 15],
        backgroundColor: '#4caf50',
      },
      {
        label: 'Funding Received ($)',
        data: [5000, 10000, 15000, 20000, 25000, 30000, 35000],
        backgroundColor: '#f44336',
      },
      {
        label: 'Collaborations Established',
        data: [1, 2, 3, 5, 6, 7, 8],
        backgroundColor: '#2196f3',
      },
    ],
  };

  // Dummy data for milestone completion
  const milestones = {
    labels: ['Milestone 1', 'Milestone 2', 'Milestone 3', 'Milestone 4', 'Milestone 5'],
    datasets: [
      {
        label: 'Completion (%)',
        data: [80, 60, 90, 70, 100],
        backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#9c27b0', '#2196f3'],
      },
    ],
  };

  // Dummy data for field contribution distribution
  const fieldDistribution = {
    labels: ['AI', 'Biotechnology', 'Physics', 'Chemistry', 'Mathematics'],
    datasets: [
      {
        data: [40, 20, 15, 10, 15],
        backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#2196f3', '#9c27b0'],
      },
    ],
  };

  return (
    <div className="tracking-page p-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Research Progress Tracker</h2>

      {/* Research Metrics Section */}
      <div className="mb-8 mt-20">
        <h3 className="text-3xl font-semibold mb-4 mt-30 text-gray-800">Research Metrics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Papers Published</h3>
            <Bar data={researchMetrics} />
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-red-600">Funding Received ($)</h3>
            <Bar data={researchMetrics} />
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Collaborations Established</h3>
            <Bar data={researchMetrics} />
          </div>
        </div>
      </div>

      {/* Milestones and Field Contribution Section (side by side) */}
<div className="mb-8 mt-80 grid grid-cols-1 sm:grid-cols-2 gap-8">
  {/* Milestone Completion */}
  <div className="card bg-white shadow-lg rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-4 text-orange-600">Completion Status</h3>
    <Pie data={milestones} options={{ responsive: true, maintainAspectRatio: true }} />
  </div>

  {/* Field Contribution Distribution */}
  <div className="card bg-white shadow-lg rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-4 text-purple-600">Research Fields</h3>
    <Pie data={fieldDistribution} options={{ responsive: true, maintainAspectRatio: true }} />
  </div>
</div>

    </div>
  );
};

export default TrackingResearch;
