import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

   // Custom color palette - mix of reds
   const colors = {
    darkRed: '#c14545',         // Primary dark red
    mediumRed: '#e45858',       // Medium red for accents
    lightRed: '#ff6b6b',        // Light red for hover states
    veryLightRed: '#ff8080',    // Very light red for subtle elements
    darkestBg: '#121212',       // Darkest background
    darkBg: '#1e1e1e',          // Dark background for sections
    lightBg: 'rgba(255, 75, 75, 0.08)', // Light red-tinted background
  };

  const plans = [
    {
      id: 'basic',
      name: 'BASIC',
      price: 0,
      period: 'month',
      features: [
        'Basic Security Scans',
        '5 Vulnerability Reports',
        'Email Support',
        '1 User License'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'PRO',
      price: 49.99,
      period: 'month',
      features: [
        'Advanced Security Scans',
        'Unlimited Vulnerability Reports',
        'Priority Support',
        '3 User Licenses',
        'Real-time Monitoring'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'ENTERPRISE',
      price: 99.99,
      period: 'month',
      features: [
        'Custom Security Solutions',
        'Dedicated Security Team',
        '24/7 Support',
        'Unlimited User Licenses',
        'Advanced Threat Protection',
        'Custom API Integration'
      ],
      popular: false
    }
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <div className='text-center'>
          <div style={{
            background: `linear-gradient(135deg, ${colors.darkRed}, ${colors.mediumRed})`,
            display: 'inline-block',
            padding: '15px 30px',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(193, 69, 69, 0.3)'
          }}>
            <h1 className="text-white mb-0">CYBER PWNED PRICING</h1>
          </div>
          {/* <h2 className="pricing-title"><span style={{color:"white"}}> </span></h2> */}
          <p className="pricing-subtitle py-3">Choose the perfect security package for your needs. Upgrade anytime to boost your protection level.</p>
        </div>

      </div>

      <div className="pricing-plans">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${selectedPlan === plan.id ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.popular && (
              <div className="popular-badge">
                MOST POPULAR
              </div>
            )}

            <div className="plan-content">
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price-amount">${plan.price}</span>
                <span className="price-period">/{plan.period}</span>
              </div>

              <hr className="plan-divider" />

              <ul className="feature-list">
                {plan.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-check">&#x2714;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`plan-button ${selectedPlan === plan.id ? 'selected-button' : ''}`}
              >
                {selectedPlan === plan.id ? 'CURRENT SELECTION' : 'SELECT PLAN'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-section">
        {/* <p className="contact-text">Need a custom solution? Contact our security experts.</p> */}
        {/* <button className="contact-button">
          CONTACT SALES
        </button> */}
      </div>
    </div>
  );
};

export default Pricing;