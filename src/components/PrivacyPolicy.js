import React from 'react';

const PrivacyPolicy = () => {
  const mainBgColor = '#121212';
  const titleBoxStyle = {
    backgroundColor: 'rgba(220, 53, 69, 0.6)',  // Changed to red
    padding: '0px 25px',
    borderRadius: '8px',
    display: 'inline-block',
    margin: '-50px auto 30px auto',
    boxShadow: '0 4px 15px rgba(220, 53, 69, 0.3)',  // Changed to red
    position: 'relative'
  };

  const sectionTitleStyle = {
    backgroundColor: 'rgba(220, 53, 69, 0.6)',  // Changed to red
    padding: '10px 20px',
    borderRadius: '6px',
    display: 'inline-block',
    marginBottom: '20px',
    color: 'white',
    fontWeight: '600'
  };

  const sectionStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '25px',
    marginBottom: '25px',
    border: '1px solid rgba(220, 53, 69, 0.2)',  // Changed to red
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={{ backgroundColor: mainBgColor, minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 mb-5">
            <div className="card bg-dark shadow-lg border-0">
              <div className="card-body p-4 position-relative text-white">
                <div className="text-center py-5">
                  <div style={titleBoxStyle}>
                    <h1 className="mb-0 text-white">Privacy Policy</h1>
                  </div>
                </div>
                
                <section className="mb-4" style={sectionStyle}>
                  <h2 className="h4" style={sectionTitleStyle}>Information Collection</h2>
                  <p className='text-start'>When you use our password security check service, we collect:</p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item bg-transparent text-white border-0 text-start">
                      <strong className="text-danger text-start">Email addresses:</strong> Only to search our database for potential breaches
                    </li>
                    <li className="list-group-item bg-transparent text-white border-0 text-start">
                      <strong className="text-danger text-start">Passwords:</strong> We never store plain text passwords. We only use secure hashing to check against known breaches
                    </li>
                    <li className="list-group-item bg-transparent text-white border-0 text-start">
                      <strong className="text-danger">IP Addresses:</strong> For security and abuse prevention
                    </li>
                  </ul>
                </section>

                <section className="mb-4" style={sectionStyle}>
                  <h2 className="h4" style={sectionTitleStyle}>Data Usage</h2>
                  <p className='text-start'>We use the collected information solely to:</p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item bg-transparent text-white border-0 text-start">Check if your credentials have been compromised in known data breaches</li>
                    <li className="list-group-item bg-transparent text-white border-0 text-start">Improve our security services</li>
                    <li className="list-group-item bg-transparent text-white border-0 text-start">Protect against abuse of our services</li>
                  </ul>
                </section>

                <section className="mb-4" style={sectionStyle}>
                  <h2 className="h4" style={sectionTitleStyle}>Security Measures</h2>
                  <p className='text-start'>We implement robust security measures including:</p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item bg-transparent text-white border-0 text-start">End-to-end encryption for all data transmission</li>
                    <li className="list-group-item bg-transparent text-white border-0 text-start">Secure hashing of all password checks</li>
                    <li className="list-group-item bg-transparent text-white border-0 text-start">Regular security audits and updates</li>
                  </ul>
                </section>

                <section className="mb-4" style={sectionStyle}>
                  <h2 className="h4" style={sectionTitleStyle}>User Rights</h2>
                  <p className='text-start'>Your rights include:</p>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item bg-transparent text-white border-0 text-start">Request access to your personal data</li>
                    <li className="list-group-item bg-transparent text-white border-0 text-start">Request correction of your personal data</li>
                    <li className="list-group-item bg-transparent text-white border-0 text-start">Request deletion of your personal data</li>
                    <li className="list-group-item bg-transparent text-white border-0 text-start ">Object to processing of your personal data</li>
                  </ul>
                </section>

                <section className="mb-5" style={sectionStyle}>
                  <h2 className="h4" style={sectionTitleStyle}>Contact Information</h2>
                  <div className="p-3" style={{ backgroundColor: 'rgba(220, 53, 69, 0.1)', borderRadius: '8px' }}>
                    <p className="mb-2 text-start"><strong className="text-danger">Email:</strong> privacy@pwned-example.com</p>
                    <p className="mb-2 text-start"><strong className="text-danger">Address:</strong> 123 Security Street, Cyber City, CC 12345</p>
                    <p className="mb-0 text-start"><strong className="text-danger">Phone:</strong> (555) 123-4567</p>
                  </div>
                </section>

                <div className="text-center mt-4 ">
                  <p className="text-danger text-start">Last updated: February 18, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;