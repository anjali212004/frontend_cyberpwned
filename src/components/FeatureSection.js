import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faDatabase, faGlobe, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeatureSection.css';

const FeatureSection = () => {
    const features = [
        { icon: faBolt, title: "Real-time Indexing", description: "New logs indexed within minutes. First to detect new variants and patterns.", color: "#FFD700" },
        { icon: faDatabase, title: "Massive Dataset", description: "Access to hundreds of millions of indexed logs with full historical data.", color: "#00BFFF" },
        { icon: faGlobe, title: "Global Coverage", description: "Comprehensive data from multiple regions and networks worldwide.", color: "#32CD32" },
        { icon: faShieldAlt, title: "Advanced Security", description: "Enterprise-grade security with granular access controls and audit logs.", color: "#FF4500" }
    ];

    return (
        <div className="container">
            <div className="feature-section-container">
                {/* Left Side - Code Box */}
                <div className="col-md-6 code-section">
                    <div className="try-now-section">
                        <h3 className="try-now-heading text-white">Try it Now</h3>
                        <p className="query-description text-white">Query billions of infostealer logs with sub-1s latency.</p>
                    </div>
                    <div className="input-section">
                        <input type="text" placeholder="Enter email" className="form-control" />
                        <div className="btn-group mt-2">
                            <button className="btn btn-primary">Python</button>
                            <button className="btn btn-secondary">JS</button>
                            <button className="btn btn-dark">Go</button>
                        </div>
                    </div>
                    <div className="code-content mt-3 border rounded">
                        <pre className="text-white">
                            {`import requests
import json

# Example search query
search_request = {
  "terms": ["admin"],
  "types": ["email"],
  "source": "xkeyscore",
  "wildcard": false
}

# Send request with demo key
response = requests.post(
  'https://api.keysco.re/search',
  headers={
    'Content-Type': 'application/json',
    'Authorization': 'Bearer demo_key'
  },
  json=search_request
)

data = response.json()`}
                        </pre>
                    </div>
                </div>
                {/* Right Side - Feature Cards */}
                <div className="col-md-6 feature-card-section d-flex flex-column justify-content-center">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card p-3 mb-3 d-flex align-items-center">
                            <div className="feature-icon-container me-3">
                                <FontAwesomeIcon icon={feature.icon} className="feature-icon" size="2x" style={{ color: feature.color }} />
                            </div>
                            <div className="feature-text text-white">
                                <h4 className="mb-1">{feature.title}</h4>
                                <p className="mb-0">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
