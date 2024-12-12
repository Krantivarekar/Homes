import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const initialStartupData = {
  startup_name: 'InnovaTech Solutions',
  founders: [
    { name: 'Sarah Johnson', role: 'CEO' },
    { name: 'Michael Chen', role: 'CTO' }
  ],
  product_description: 'AI-powered sustainability tracking platform',
  legal_structure: 'C-Corporation',
  incorporation_date: '2023-06-15',
  market_opportunity: 'Enterprise sustainability reporting',
  team_size: 12,
  target_market: 'Mid to large enterprises',
  revenue_model: 'SaaS subscription'
};

const grantOpportunities = [
  {
    GrantName: 'Innovation in Sustainability Grant',
    GrantProvider: 'Green Tech Foundation',
    EligibilityCriteria: 'Sustainability-focused startups',
    ApplicationDeadline: '2024-03-15',
    FundingAmountAvailable: '$250,000',
    GrantType: 'Research & Development',
    EligibilityMatchScore: 85
  },
  {
    GrantName: 'Tech Startup Accelerator',
    GrantProvider: 'National Innovation Council',
    EligibilityCriteria: 'Early-stage tech companies',
    ApplicationDeadline: '2024-04-01',
    FundingAmountAvailable: '$500,000',
    GrantType: 'Seed Funding',
    EligibilityMatchScore: 75
  }
];

const grantSubmissionMetrics = {
  NumberOfGrantsApplied: 3,
  SuccessRate: 66.7,
  SubmissionDeadlines: [
    { name: 'Green Tech Grant', deadline: '2024-03-15' },
    { name: 'Innovation Council', deadline: '2024-04-01' }
  ]
};

const grantEvaluationCriteria = [
  { criteria: 'Innovation', weight: 30 },
  { criteria: 'Impact', weight: 25 },
  { criteria: 'Viability', weight: 25 },
  { criteria: 'Market Readiness', weight: 20 }
];

const fundingAllocation = [
  { category: 'R&D', spending: 45 },
  { category: 'Marketing', spending: 20 },
  { category: 'Product Development', spending: 25 },
  { category: 'Operational Expenses', spending: 10 }
];

const Grant = () => {
  const [startup] = useState(initialStartupData);
  const [grants] = useState(grantOpportunities);
  const [submissionMetrics] = useState(grantSubmissionMetrics);
  const [evaluationCriteria] = useState(grantEvaluationCriteria);

  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px;
          }
          .header {
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 24px;
          }
          .section {
            background-color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 24px;
          }
          .section-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 16px;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
          }
          .table {
            width: 100%;
            border-collapse: collapse;
          }
          .table th, .table td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
          }
          .table th {
            background-color: #f9f9f9;
          }
          .progress-bar-container {
            background-color: #e5e5e5;
            border-radius: 4px;
            height: 10px;
          }
          .progress-bar {
            background-color: #007bff;
            height: 10px;
            border-radius: 4px;
          }
          .chart-container {
            width: 100%;
            height: 300px;
          }
        `}
      </style>

      <div className="container">
        <h1 className="header">Startup Grant Tracking Dashboard</h1>

        {/* Startup Overview */}
        <div className="section">
          <h2 className="section-title">Startup Profile</h2>
          <div className="grid">
            <div>
              <p><strong>Name:</strong> {startup.startup_name}</p>
              <p><strong>Product:</strong> {startup.product_description}</p>
              <p><strong>Legal Structure:</strong> {startup.legal_structure}</p>
              <p><strong>Incorporation Date:</strong> {startup.incorporation_date}</p>
            </div>
            <div>
              <p><strong>Team Size:</strong> {startup.team_size}</p>
              <p><strong>Target Market:</strong> {startup.target_market}</p>
              <p><strong>Revenue Model:</strong> {startup.revenue_model}</p>
            </div>
          </div>
        </div>

        {/* Grant Opportunities */}
        <div className="section">
          <h2 className="section-title">Grant Opportunities</h2>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Grant Name</th>
                  <th>Provider</th>
                  <th>Deadline</th>
                  <th>Funding Amount</th>
                  <th>Eligibility Score</th>
                </tr>
              </thead>
              <tbody>
                {grants.map((grant, index) => (
                  <tr key={index}>
                    <td>{grant.GrantName}</td>
                    <td>{grant.GrantProvider}</td>
                    <td>{grant.ApplicationDeadline}</td>
                    <td>{grant.FundingAmountAvailable}</td>
                    <td>
                      <div className="progress-bar-container">
                        <div
                          className="progress-bar"
                          style={{ width: `${grant.EligibilityMatchScore}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Other sections (Grant Submission Metrics, Evaluation Criteria, etc.) would follow the same pattern */}
      </div>
    </div>
  );
};

export default Grant;
