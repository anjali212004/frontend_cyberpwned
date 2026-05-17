import React from 'react';
import { Calendar, Users, Database, AlertTriangle } from 'lucide-react';

const BreachCard = () => {
  const colors = {
    darkRed: '#c14545',         // Primary dark red
    mediumRed: '#e45858',       // Medium red for accents
    lightRed: '#ff6b6b',        // Light red for hover states
    veryLightRed: '#ff8080',    // Very light red for subtle elements
    darkestBg: '#121212',       // Darkest background
    darkBg: '#1e1e1e',          // Dark background for sections
    lightBg: 'rgba(255, 75, 75, 0.08)', // Light red-tinted background
  };

  const breaches = [
    {
      title: '123RF',
      logo: '123RF logo', // You can replace this with the actual logo image or icon
      date: '22 March 2020',
      addedToHIBP: '15 November 2020',
      accounts: '8,661,578',
      data: ['Email addresses', 'IP addresses', 'Names', 'Passwords', 'Phone numbers', 'Physical addresses', 'Usernames'],
      severity: 'High Severity Breach',
      description: 'In March 2020, the stock photo site 123RF suffered a data breach...',
    },
    {
      title: '126',
      logo: '126 logo', // Replace with the logo
      date: '1 January 2012',
      addedToHIBP: '8 October 2016',
      accounts: '6,414,191',
      data: ['Email addresses', 'Passwords'],
      severity: 'Unverified Breach',
      description: 'In approximately 2012, it\'s alleged that the Chinese email service known as 126 suffered a data breach...',
    },
    {
      title: '17',
      logo: '17 logo', // Replace with the logo
      date: '19 April 2016',
      addedToHIBP: '8 July 2016',
      accounts: '4,009,640',
      data: ['Device information', 'Email addresses', 'IP addresses', 'Passwords', 'Usernames'],
      severity: 'High Severity Breach',
      description: 'In April 2016, customer data obtained from the streaming app known as "17" appeared listed...',
    },
    {
      title: '17173',
      logo: '17173 logo', // Replace with the logo
      date: '28 December 2011',
      addedToHIBP: '28 April 2018',
      accounts: '7,485,802',
      data: ['Email addresses', 'Passwords', 'Usernames'],
      severity: 'Unverified Breach',
      description: 'In late 2011, a series of data breaches in China affected up to 100 million users...',
    },
    {
      title: '1win',
      logo: '1win logo', // Replace with the logo
      date: '2 November 2024',
      addedToHIBP: '3 February 2025',
      accounts: '96,166,543',
      data: ['Dates of birth', 'Email addresses', 'Geographic locations', 'IP addresses', 'Passwords', 'Phone numbers'],
      severity: 'High Severity Breach',
      description: 'In November 2024, the online betting platform 1win suffered a data breach...',
    },
    {
      title: '2,844 Separate Data Breaches',
      logo: '2,844 Separate Data Breaches logo', // Replace with the logo
      date: '19 February 2018',
      addedToHIBP: '26 February 2018',
      accounts: '80,115,532',
      data: ['Email addresses', 'Passwords'],
      severity: 'Unverified Breach',
      description: 'In February 2018, a massive collection of almost 3,000 alleged data breaches was found online...',
    },
    {
      title: '2fast4u',
      logo: '2fast4u logo', // Replace with the logo
      date: '20 December 2017',
      addedToHIBP: '7 January 2018',
      accounts: '17,706',
      data: ['Email addresses', 'Passwords', 'Usernames'],
      severity: 'High Severity Breach',
      description: 'In December 2017, the Belgian motorcycle forum 2fast4u discovered a data breach...',
    },
  ];

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-5">
              <div style={{
                background: `linear-gradient(135deg, ${colors.darkRed}, ${colors.mediumRed})`,
                display: 'inline-block',
                padding: '15px 30px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(193, 69, 69, 0.3)'
              }}>
                <h1 className="text-white mb-0">Notable Data Breaches</h1>
              </div>
            </div>

            {/* Breach Cards */}
            {breaches.map((breach, index) => (
              <div key={index} className="card bg-dark text-white border-0 shadow-lg mb-4">
                <div className="card-body p-0">

                  <div style={{  
                    background: `linear-gradient(135deg, ${colors.darkRed}, ${colors.mediumRed})`,
                    display: 'flex',
                    padding: '20px',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    // borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(193, 69, 69, 0.3)',
                    alignItems: 'center',
                    gap: '15px',
                  }}>
                    {/* <img src={breach.logo} alt={breach.title} width={32} height={32} /> */}
                    <h2 className="h4 mb-0">{breach.title}</h2>
                  </div>

                  <div className="p-4">
                    <p className="mb-4" style={{ lineHeight: '1.6' }}>
                      {breach.description}
                    </p>

                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <div
                          style={{
                            backgroundColor: 'rgba(83, 159, 149, 0.1)',
                            borderRadius: '8px',
                            padding: '15px',
                            border: '1px solid rgba(204, 88, 80, 0.2)',
                          }}
                        >
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <Calendar size={20} className="text-teal-300" />
                            <strong className="text-teal-300">Breach Date:</strong>
                          </div>
                          <p className="mb-0">{breach.date}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          style={{
                            backgroundColor: 'rgba(83, 159, 149, 0.1)',
                            borderRadius: '8px',
                            padding: '15px',
                            border: '1px solid rgba(204, 88, 80, 0.2)',
                          }}
                        >
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <AlertTriangle size={20} className="text-teal-300" />
                            <strong className="text-teal-300">Added to HIBP:</strong>
                          </div>
                          <p className="mb-0">{breach.addedToHIBP}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          style={{
                            backgroundColor: 'rgba(83, 159, 149, 0.1)',
                            borderRadius: '8px',
                            padding: '15px',
                            border: '1px solid rgba(204, 88, 80, 0.2)',
                          }}
                        >
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <Users size={20} className="text-teal-300" />
                            <strong className="text-teal-300">Compromised Accounts:</strong>
                          </div>
                          <p className="mb-0">{breach.accounts}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          style={{
                            backgroundColor: 'rgba(83, 159, 149, 0.1)',
                            borderRadius: '8px',
                            padding: '15px',
                            border: '1px solid rgba(204, 88, 80, 0.2)',
                          }}
                        >
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <Database size={20} className="text-teal-300" />
                            <strong className="text-teal-300">Compromised Data:</strong>
                          </div>
                          <ul className="list-unstyled mb-0 text-start">
                            {breach.data.map((item, idx) => (
                              <li key={idx}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: 'rgba(255, 59, 48, 0.1)',
                        borderRadius: '8px',
                        padding: '15px',
                        border: '1px solid rgba(255, 59, 48, 0.2)',
                      }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <AlertTriangle size={20} color="#ff3b30" />
                        <strong className="text-danger">{breach.severity}</strong>
                      </div>
                      <p className="mb-0 mt-2">
                        This breach is considered high severity due to the exposure of plain text passwords
                        and the large number of affected accounts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreachCard;
