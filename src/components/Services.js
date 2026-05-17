import React from 'react';
import { Shield, Cpu, Lock, Search } from 'lucide-react';
import './Services.css'; // Assuming you'll create this CSS file

const Services = () => {
  const services = [
    {
      title: "Security Auditing",
      description: "Comprehensive analysis of your systems to identify vulnerabilities before they can be exploited.",
      details: "Our security audit process includes thorough network scanning, vulnerability assessment, configuration review, and detailed reporting with actionable recommendations to enhance your security posture.",
      icon: <Shield className="service-icon" />
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyber attacks to evaluate system security and identify weak points in your infrastructure.",
      details: "Our ethical hackers use industry-standard and custom tools to perform controlled attacks against your systems, uncovering vulnerabilities that automated scanners might miss. We provide detailed attack vectors and mitigation strategies.",
      icon: <Lock className="service-icon" />
    },
    {
      title: "Threat Intelligence",
      description: "Real-time monitoring and analysis of potential security threats targeting your organization.",
      details: "Our threat intelligence platform collects and analyzes data from multiple sources to provide early warning of emerging threats. We track threat actors, monitor dark web activities, and deliver customized alerts relevant to your industry.",
      icon: <Search className="service-icon" />
    },
    {
      title: "Security Consulting",
      description: "Expert guidance on improving your security infrastructure and implementing best practices.",
      details: "Our consultants work with your team to develop comprehensive security strategies, compliance frameworks, incident response plans, and security awareness training programs tailored to your organization's specific needs.",
      icon: <Cpu className="service-icon" />
    }
  ];

  return (
    <section className="pricing-container">
      <div className="container">
        <div className="services-content">
          <div className="services-header">
            <h2 className="services-title">Security Services That <span className="highlight">Protect Your Digital Assets</span></h2>
            <p className="services-description">
              Pwned provides industry-leading cybersecurity services to identify vulnerabilities before malicious actors can exploit them.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-container">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-details">
                  {/* <p>{service.details}</p> */}
                </div>
              </div>
            ))}
          </div>
          
          {/* <div className="cta-container">
            <button className="primary-btn">
              Get Started
            </button>
            <button className="secondary-btn">
              Contact Us
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;