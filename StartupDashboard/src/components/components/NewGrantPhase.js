import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Award, CheckCircle2, AlertCircle, TrendingUp, Cast, FileText, DollarSign } from 'lucide-react';

const mockStartupData = {
  basicInfo: {
    name: "InnovateTech Solutions",
    founders: [
      { name: "Alex Rodriguez", role: "CEO" },
      { name: "Sarah Chen", role: "CTO" }
    ],
    productDescription: "AI-powered sustainability analytics platform",
    legalStructure: "C-Corporation",
    incorporationDate: "2023-06-15",
    teamSize: 8,
    targetMarket: "Enterprise sustainability departments",
    revenueModel: "SaaS subscription"
  },
  grantOpportunities: [
    {
      name: "Green Innovation Grant",
      provider: "Climate Tech Foundation",
      fundingAmount: "$250,000",
      deadline: "2024-03-15",
      status: "In Review",
      matchScore: 0.85
    },
    {
      name: "Tech Startup Accelerator",
      provider: "National Innovation Council",
      fundingAmount: "$500,000",
      deadline: "2024-04-30",
      status: "Pending",
      matchScore: 0.72
    }
  ],
  grantHistory: [
    { name: "Seed Funding Round", amount: 150000, date: "2023-09-01" },
    { name: "R&D Grant", amount: 100000, date: "2023-11-15" },
    { name: "Market Expansion", amount: 200000, date: "2024-01-10" }
  ],
  complianceStatus: {
    registrationDocs: true,
    annualReports: true,
    grantAgreements: true
  },
  financialSummary: {
    totalFundingApplied: "$1,250,000",
    successRate: "75%",
    industryAverageSuccessRate: "60%"
  }
};

const NewGrant = () => {
  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px;
          }
          .header {
            background-color: #1e3a8a;
            color: white;
            padding: 24px;
            border-radius: 8px;
            margin-bottom: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .header-title {
            font-size: 2rem;
            font-weight: bold;
          }
          .header-subtitle {
            margin-top: 8px;
            font-size: 1.25rem;
            color: #93c5fd;
          }
          .icon-container {
            background-color: #2563eb;
            padding: 16px;
            border-radius: 50%;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
          }
          .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 24px;
          }
          .card-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
          }
          .card-title svg {
            margin-right: 8px;
          }
          .grant {
            background-color: #f3f4f6;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 16px;
          }
          .grant-title {
            font-weight: bold;
            font-size: 1.125rem;
          }
          .grant-provider {
            font-size: 0.875rem;
            color: #6b7280;
          }
          .grant-status {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: bold;
            display: inline-block;
          }
          .grant-status.in-review {
            background-color: #fde68a;
            color: #92400e;
          }
          .grant-status.pending {
            background-color: #bfdbfe;
            color: #1e40af;
          }
          .chart-container {
            margin-top: 24px;
          }
          .chart-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 16px;
          }
          .compliance-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
          }
        `}
      </style>

      <div className="container">
        <header className="header">
          <div>
            <h1 className="header-title">{mockStartupData.basicInfo.name}</h1>
            <p className="header-subtitle">{mockStartupData.basicInfo.productDescription}</p>
          </div>
          <div className="icon-container">
            <Award size={40} />
          </div>
        </header>

        <div className="grid">
          <div className="card">
            <h2 className="card-title">
              <Cast /> Startup Details
            </h2>
            <p><strong>Founders:</strong> {mockStartupData.basicInfo.founders.map(f => `${f.name} (${f.role})`).join(', ')}</p>
            <p><strong>Team Size:</strong> {mockStartupData.basicInfo.teamSize}</p>
            <p><strong>Legal Structure:</strong> {mockStartupData.basicInfo.legalStructure}</p>
            <p><strong>Incorporation Date:</strong> {mockStartupData.basicInfo.incorporationDate}</p>
            <p><strong>Target Market:</strong> {mockStartupData.basicInfo.targetMarket}</p>
            <p><strong>Revenue Model:</strong> {mockStartupData.basicInfo.revenueModel}</p>
          </div>

          <div className="card">
            <h2 className="card-title">
              <TrendingUp /> Grant Opportunities
            </h2>
            {mockStartupData.grantOpportunities.map((grant, index) => (
              <div key={index} className="grant">
                <div className="grant-header">
                  <h3 className="grant-title">{grant.name}</h3>
                  <span className={`grant-status ${grant.status.toLowerCase().replace(/\s/g, '-')}`}>
                    {grant.status}
                  </span>
                </div>
                <p className="grant-provider">{grant.provider}</p>
                <p><strong>Funding Amount:</strong> {grant.fundingAmount}</p>
                <p><strong>Application Deadline:</strong> {grant.deadline}</p>
                <p><strong>Matching Score:</strong> {(grant.matchScore * 100).toFixed(0)}%</p>
              </div>
            ))}
          </div>

          <div className="card">
            <h2 className="card-title">
              <FileText /> Compliance Status
            </h2>
            {Object.entries(mockStartupData.complianceStatus).map(([key, value]) => (
              <div key={key} className="compliance-item">
                <span>{key.replace(/([A-Z])/g, ' $1')}</span>
                {value ? (
                  <CheckCircle2 className="text-green-500" />
                ) : (
                  <AlertCircle className="text-red-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="chart-container">
          <h2 className="chart-title">Grant Funding History</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockStartupData.grantHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default NewGrant;
