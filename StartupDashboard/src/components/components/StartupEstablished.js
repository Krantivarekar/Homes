import React from 'react';
import { 
  Award, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Globe, 
  FileText,
  Zap,
  PieChart,
  Target,
  Layers
} from 'lucide-react';

const StartupEstablished = () => {
  const startupdata = {
    StartupName: "EcoTech Solutions",
    Tagline: "Powering Smart Cities with Sustainable Innovation",
    Founders: [
      { 
        Name: "Rajesh Patel", 
        Role: "CEO", 
        Image: "/api/placeholder/200/200",
        Experience: "15 years in renewable energy",
        Background: "Former senior executive at GUVNL",
        Achievements: [
          "Forbes 30 Under 30 - Energy Sector",
          "Emerging Entrepreneur Award"
        ]
      },
      { 
        Name: "Priya Sharma", 
        Role: "CTO", 
        Image: "/api/placeholder/200/200",
        Experience: "12 years in software engineering",
        Background: "PhD in IoT from IIT Gandhinagar",
        Achievements: [
          "Gujarat Innovation Award",
          "12 Research Papers Published"
        ]
      }
    ],
    ProductDescription: "Cutting-edge solar energy management and IoT solutions for smart urban infrastructure",
    CompanyStats: {
      Customers: 45,
      ProjectsCompleted: 22,
      EnergySaved: "250,000 kWh",
      CarbonReduced: "175 metric tons"
    }
  };

  return (
    <>
      <style>{`
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #f0f9ff 0%, #cbebff 100%);
          color: #2c3e50;
          line-height: 1.6;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem;
        }
        .header {
          background: linear-gradient(90deg, #2c3e50 0%, #34495e 100%);
          color: white;
          border-radius: 16px;
          padding: 2.5rem;
          text-align: center;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          margin-bottom: 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255,255,255,0.05);
          transform: skew(-15deg);
        }
        .header h1 {
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }
        .header p {
          font-size: 1.25rem;
          font-weight: 300;
          opacity: 0.9;
          position: relative;
          z-index: 1;
        }
        .main-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }
        .card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .card-title {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid #3498db;
          padding-bottom: 0.5rem;
        }
        .card-title svg {
          margin-right: 1rem;
          color: #3498db;
        }
        .founders-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .founder-card {
          display: flex;
 align-items: center;
          gap: 1.5rem;
          background: #f9fafb;
          padding: 1.5rem;
          border-radius: 12px;
        }
        .founder-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #3498db;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .key-metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          text-align: center;
        }
        .metric-card {
          background: #f0f4f8;
          border-radius: 12px;
          padding: 1.5rem;
          transition: transform 0.3s ease;
        }
        .metric-card:hover {
          transform: scale(1.05);
        }
        .metric-value {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .metric-label {
          font-size: 0.875rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .progress-container {
          margin-bottom: 1.5rem;
        }
        .progress-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .progress-bar {
          width: 100%;
          height: 10px;
          background: #e5e7eb;
          border-radius: 20px;
          overflow: hidden;
        }
        .progress {
          height: 100%;
          border-radius: 20px;
          transition: width 0.5s ease-in-out;
        }
        .innovation-list {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 1rem;
        }
        .innovation-item {
          display: flex;
          align-items: center;
          background: #f0f4f8;
          padding: 1rem;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }
        .innovation-item:hover {
          transform: translateX(10px);
          background: #e6f2ff;
        }
      `}</style>
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>{startupdata.StartupName}</h1>
          <p>{startupdata.Tagline}</p>
        </div>

        {/* Main Content Grid */}
        <div className="main-grid">
          {/* Left Column */}
          <div>
            {/* Company Overview */}
            <div className="card">
              <h2 className="card-title">
                <Globe /> Company Overview
              </h2>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                <div>
                  <h3 style={{fontWeight: 700, marginBottom: '1rem', color: '#2c3e50'}}>Product</h3>
                  <p style={{color: '#4a5568'}}>{startupdata.ProductDescription}</p>
                </div>
                <div>
                  <h3 style={{fontWeight: 700, marginBottom: '1rem', color: '#2c3e50'}}>Company Stats</h3>
                  <ul style={{listStyle: 'none', padding: 0}}>
                    {Object.entries(startupdata.CompanyStats).map(([key, value]) => (
                      <li key={key} style={{
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        marginBottom: '0.75rem',
                        borderBottom: '1px solid #edf2f7',
                        paddingBottom: '0.5rem'
                      }}>
                        <span style={{fontWeight: 500, color: '#4a5568'}}>{key}:</span>
                        <span style={{fontWeight: 'bold', color: '#3498db'}}>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Founders Section */}
            <div className="card" style={{marginTop: '2rem'}}>
              <h2 className="card-title">
                <Briefcase /> Founders
              </h2>
              <div className="founders-grid">
                {startupdata.Founders.map ((founder) => (
                  <div key={founder.Name} className="founder-card">
                    <img 
                      src={founder.Image} 
                      alt={founder.Name} 
                      className="founder-image"
                    />
                    <div>
                      <h3 style={{
                        fontSize: '1.25rem', 
                        fontWeight: 700, 
                        color: '#2c3e50', 
                        marginBottom: '0.5rem'
                      }}>
                        {founder.Name}
                      </h3>
                      <p style={{color: '#4a5568', marginBottom: '0.25rem'}}>{founder.Role}</p>
                      <p style={{
                        fontSize: '0.875rem', 
                        color: '#6b7280', 
                        marginBottom: '0.75rem'
                      }}>
                        {founder.Experience}
                      </p>
                      <ul style={{
                        fontSize: '0.75rem', 
                        color: '#3498db', 
                        listStyle: 'none', 
                        padding: 0,
                        margin: 0
                      }}>
                        {founder.Achievements.map((achievement) => (
                          <li key={achievement} style={{marginBottom: '0.25rem'}}>
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Key Metrics */}
            <div className="card">
              <h2 className="card-title">
                <TrendingUp /> Key Metrics
              </h2>
              <div className="key-metrics-grid">
                <div className="metric-card">
                  <div className="metric-value" style={{color: '#3498db'}}>45</div>
                  <div className="metric-label">Customers</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value" style={{color: '#2ecc71'}}>22</div>
                  <div className="metric-label">Projects</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value" style={{color: '#9b59b6'}}>₹1.25M</div>
                  <div className="metric-label">Monthly Revenue</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value" style={{color: '#e74c3c'}}>175</div>
                  <div className="metric-label">Tons CO2 Reduced</div>
                </div>
              </div>
            </div>

            {/* Product Impact */}
            <div className="card" style={{marginTop: '2rem'}}>
              <h2 className="card-title">
                <Zap style={{color: '#f39c12'}} /> Product Impact
              </h2>
              <div>
                <div className="progress-container">
                  <div className="progress-label">
                    <span>Energy Efficiency</span>
                    <span style={{fontWeight: 'bold', color: '#2ecc71'}}>92%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress" 
                      style={{
                        width: '92%', 
                        backgroundColor: '#2ecc71'
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="progress-container">
                  <div className="progress-label">
                    <span>Customer Satisfaction</span>
                    <span style={{fontWeight: 'bold', color: '#3498db'}}>88%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress" 
                      style={{
                        width: '88%', 
                        backgroundColor: '#3498db'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Highlights */}
            <div className="card" style={{marginTop: '2rem'}}>
              <h2 className="card-title">
                <Award style={{color: '#9b59b6'}} /> Innovation Highlights
              </h2>
              <ul className="innovation-list">
                <li className="innovation-item">
                  <Target style={{marginRight: '1rem', color: '#3498db'}} size={24} />
                  AI Solar Prediction
                </li>
                <li className="innovation-item">
                  <Layers style={{marginRight: '1rem', color: '#2ecc71'}} size={24} />
                  IoT Energy Management </li>
                <li className="innovation-item">
                  <PieChart style={{marginRight: '1rem', color: '#e74c3c'}} size={24} />
                  Urban Energy Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartupEstablished;