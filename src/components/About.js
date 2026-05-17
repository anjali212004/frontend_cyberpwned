import React from 'react';
import { Lock, Database, CheckCircle, Target, Users, Book, Wrench, Bell, Server, ShieldAlert, LineChart, Settings } from 'lucide-react';

const About = () => {


  const sectionStyle = {
    backgroundColor: '#1e1e1e',
    borderRadius: '12px',
    padding: '25px',
    marginBottom: '25px',
    border: '1px solid rgba(193, 69, 69, 0.2)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const featureCardStyle = {
    backgroundColor: 'rgba(255, 75, 75, 0.08)',
    borderRadius: '12px',
    padding: '20px',
    height: '100%',
    border: '1px solid rgba(193, 69, 69, 0.25)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 12px rgba(193, 69, 69, 0.15)'
    }
  };

  const statCardStyle = {
    backgroundColor: 'rgba(255, 75, 75, 0.08)',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid rgba(193, 69, 69, 0.15)',
  };

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Hero Section */}
            <div className="text-center mb-5">
              <div style={{
                background: 'linear-gradient(135deg, #c14545, #e45858)',
                display: 'inline-block',
                padding: '15px 30px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(193, 69, 69, 0.3)'
              }}>
                <h1 className="text-white mb-0">About Cyber Pwned</h1>
              </div>
              <p className="text-white-50 mt-4">Empowering users with advanced cybersecurity intelligence</p>
            </div>

            {/* Mission Statement */}
            <section style={sectionStyle} className="text-white mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <Target size={32} style={{ color:'#e45858' }} />
                <h2 className="h3 mb-0">Our Mission</h2>
              </div>
              <p className="mb-4">
                At Cyber Pwned, we're committed to democratizing cybersecurity by providing individuals and organizations 
                with powerful tools to protect their digital identities. In an era where data breaches are becoming 
                increasingly common, we serve as your first line of defense against cyber threats.
              </p>
            </section>

            {/* Stats Section */}
            <section style={sectionStyle} className="text-white mb-5">
              <div className="row g-4">
                <div className="col-md-3">
                  <div style={statCardStyle}>
                    <Database size={32} style={{ color: '#e45858'}} className="mb-3" />
                    <h3 className="h2 mb-2">11B+</h3>
                    <p className="mb-0">Compromised Records</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div style={statCardStyle}>
                    <Users size={32} style={{ color: '#e45858' }} className="mb-3" />
                    <h3 className="h2 mb-2">2M+</h3>
                    <p className="mb-0">Protected Users</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div style={statCardStyle}>
                    <ShieldAlert size={32} style={{ color: '#e45858' }} className="mb-3" />
                    <h3 className="h2 mb-2">24/7</h3>
                    <p className="mb-0">Monitoring</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div style={statCardStyle}>
                    <Server size={32} style={{ color: '#e45858' }} className="mb-3" />
                    <h3 className="h2 mb-2">500+</h3>
                    <p className="mb-0">Data Sources</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Features */}
            <section style={sectionStyle} className="text-white mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <Wrench size={32} style={{ color:'#e45858' }} />
                <h2 className="h3 mb-0">Core Features</h2>
              </div>
              <div className="row g-4">
                <div className="col-md-4">
                  <div style={featureCardStyle}>
                    <Bell size={24} style={{ color: '#e45858' }} className="mb-3" />
                    <h3 className="h5 text-white">Real-time Alerts</h3>
                    <p className="text-white-50 mb-0">
                      Instant notifications when your data appears in new breaches, allowing immediate action to secure your accounts.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div style={featureCardStyle}>
                    <LineChart size={24} style={{ color: '#e45858' }} className="mb-3" />
                    <h3 className="h5 text-white">Risk Assessment</h3>
                    <p className="text-white-50 mb-0">
                      Advanced algorithms analyze your exposure level and provide personalized risk scores.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div style={featureCardStyle}>
                    <Settings size={24} style={{ color: '#e45858' }} className="mb-3" />
                    <h3 className="h5 text-white">Security Tools</h3>
                    <p className="text-white-50 mb-0">
                      Comprehensive suite of tools for password strength analysis and security optimization.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section style={sectionStyle} className="text-white mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <Book size={32} style={{ color: '#e45858' }} />
                <h2 className="h3 mb-0">How It Works</h2>
              </div>
              <div className="row g-4">
                <div className="col-md-3">
                  <div className="text-center p-3">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style={{ width: '50px', height: '50px', marginBottom: '15px', background: 'linear-gradient(135deg, #c14545,#e45858)' }}>
                      <span className="h5 mb-0 text-white">1</span>
                    </div>
                    <h4 className="h6 mb-2">Sign Up</h4>
                    <p className="small text-white-50">Create your secure account with basic information</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center p-3">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style={{ width: '50px', height: '50px', marginBottom: '15px', background: 'linear-gradient(135deg,#c14545, #e45858)' }}>
                      <span className="h5 mb-0 text-white">2</span>
                    </div>
                    <h4 className="h6 mb-2">Add Monitoring</h4>
                    <p className="small text-white-50">Input emails and domains you want to monitor</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center p-3">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style={{ width: '50px', height: '50px', marginBottom: '15px', background: 'linear-gradient(135deg, #c14545, #e45858)' }}>
                      <span className="h5 mb-0 text-white">3</span>
                    </div>
                    <h4 className="h6 mb-2">Get Alerts</h4>
                    <p className="small text-white-50">Receive notifications about any security breaches</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="text-center p-3">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style={{ width: '50px', height: '50px', marginBottom: '15px', background: 'linear-gradient(135deg, #c14545, #e45858)' }}>
                      <span className="h5 mb-0 text-white">4</span>
                    </div>
                    <h4 className="h6 mb-2">Take Action</h4>
                    <p className="small text-white-50">Follow our security recommendations to protect your data</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Security Features */}
            <section style={sectionStyle} className="text-white">
              <div className="d-flex align-items-center gap-3 mb-4">
                <Lock size={32} style={{ color: '#e45858'}} />
                <h2 className="h3 mb-0">Advanced Security Features</h2>
              </div>
              <div className="p-4" style={{ backgroundColor: 'rgba(255, 75, 75, 0.08)', borderRadius: '8px' }}>
                <ul className="list-unstyled mb-0">
                  <li className="mb-4 d-flex align-items-start gap-3">
                    <CheckCircle size={24} style={{ color: '#e45858' }} className="flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="h6 text-white text-start">Deep Web Monitoring</h4>
                      <p className="text-white-50 mb-0 text-start">
                        Our advanced crawlers scan the deep web and dark web for your information, providing early 
                        warning of potential data exposures before they become public.
                      </p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start gap-3">
                    <CheckCircle size={24} style={{ color: '#e45858'}} className="flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="h6 text-white text-start">Password Security Analysis</h4>
                      <p className="text-white-50 mb-0 text-start">
                        Advanced algorithms assess password strength and identify potential vulnerabilities in your 
                        security practices, providing actionable recommendations for improvement.
                      </p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start gap-3">
                    <CheckCircle size={24} style={{ color: '#e45858' }} className="flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="h6 text-white text-start">API Integration</h4>
                      <p className="text-white-50 mb-0 text-start">
                        Enterprise-grade API access for seamless integration with your existing security infrastructure 
                        and automated monitoring systems.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <CheckCircle size={24} style={{ color: '#e45858' }} className="flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="h6 text-white text-start">Compliance & Reporting</h4>
                      <p className="text-white-50 mb-0 text-start">
                        Comprehensive reporting tools help maintain compliance with GDPR, CCPA, and other data 
                        protection regulations through detailed breach notification and response tracking.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;