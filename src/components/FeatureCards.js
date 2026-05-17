import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faDatabase, faGlobe, faShieldAlt, faChartBar, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import './FeatureCards.css';

const FeatureCards = () => {
  const colors = {
    darkRed: '#c14545',         // Primary dark red
    mediumRed: '#e45858',       // Medium red for accents
    lightRed: '#ff6b6b',        // Light red for hover states
    veryLightRed: '#ff8080',    // Very light red for subtle elements
    darkestBg: '#121212',       // Darkest background
    darkBg: '#1e1e1e',          // Dark background for sections
    lightBg: 'rgba(255, 75, 75, 0.08)', // Light red-tinted background
  };
  const features = [
    {
      Icon: faBolt,
      title: "Real-time Indexing",
      description: "New logs indexed within minutes. First to detect new variants and patterns.",
    },
    {
      Icon: faDatabase,
      title: "Massive Dataset",
      description: "Access to hundreds of millions of indexed logs with full historical data.",
    },
    {
      Icon: faGlobe,
      title: "Global Coverage",
      description: "Comprehensive data from multiple regions and networks worldwide.",
    },
    {
      Icon: faShieldAlt,
      title: "Advanced Security",
      description: "Enterprise-grade security with granular access controls and audit logs.",
    },
    {
      Icon: faChartBar,
      title: "Analytics",
      description: "Advanced analytics and visualization tools for threat intelligence.",
    },
    {
      Icon: faSyncAlt,
      title: "Automation",
      description: "Powerful automation tools for threat detection and response workflows.",
    }
  ];
  
  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
      <div className="container feature-container">
      <div className="heading-section py-5">
      <div style={{
                background: `linear-gradient(135deg, ${colors.darkRed}, ${colors.mediumRed})`,
                display: 'inline-block',
                padding: '15px 30px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(193, 69, 69, 0.3)'
              }}>
                <h1 className="text-white mb-0">Advanced Capabilities</h1>
        </div>
        <h2 className="main-heading"></h2>
        <p className="sub-heading">
          Comprehensive tools and features to power your threat intelligence operations
        </p>
      </div>
      <div className="cards-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card mb-5" style={{ backgroundColor: '#3b2e30', borderColor: 'rgba(220, 53, 69, 0.90)' }}>
            <div className="icon-wrapper" style={{ backgroundColor: 'rgba(220, 53, 69, 0.20)' }}>
              <FontAwesomeIcon icon={feature.Icon} className="icon-style" style={{ color: 'rgba(220, 53, 69, 0.90)' }} />
            </div>
            <h3 className="feature-title" style={{ color: 'rgba(238, 237, 237, 0.9)' }}>{feature.title}</h3>
            <p className="feature-description" style={{ color: 'white' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FeatureCards;