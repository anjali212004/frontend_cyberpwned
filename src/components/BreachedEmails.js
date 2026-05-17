import React, { useState } from 'react';
import './BreachedEmails.css';

const BreachedEmails = () => {
  // Demo data
  const breachedEmails = [
    { id: 1, email: 'user1@example.com', breaches: 3, lastBreach: '2025-02-20', sites: ['DemoSite', 'TestApp', 'ExamplePortal'] },
    { id: 2, email: 'user2@example.com', breaches: 1, lastBreach: '2025-02-15', sites: ['SampleService'] },
    { id: 3, email: 'user3@example.com', breaches: 5, lastBreach: '2025-02-10', sites: ['TestApp', 'DemoSite', 'ExamplePortal', 'DataLeak', 'PrivacyViolation'] },
    { id: 4, email: 'user4@example.com', breaches: 2, lastBreach: '2025-01-25', sites: ['ExamplePortal', 'DemoSite'] },
    { id: 5, email: 'user5@example.com', breaches: 4, lastBreach: '2025-01-20', sites: ['PrivacyViolation', 'DataLeak', 'TestApp', 'ExamplePortal'] }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredEmails = breachedEmails
    .filter(item => 
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sites.some(site => site.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(item => {
      if (filter === 'all') return true;
      if (filter === 'high') return item.breaches > 3;
      if (filter === 'medium') return item.breaches > 1 && item.breaches <= 3;
      if (filter === 'low') return item.breaches === 1;
      return true;
    });

  return (
    <div className="breached-emails-container">
      <div className="breached-header">
        <h1>Breached Emails</h1>
        <div className="action-filters">
          <div className="search-breached">
            <input 
              type="text" 
              placeholder="Search email or site..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-dropdown">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Breaches</option>
              <option value="high">High Risk(3-5)</option>
              <option value="medium">Medium Risk (2-3)</option>
              <option value="low">Low Risk (1)</option>
            </select>
          </div>
          <button className="export-btn">Export Data</button>
        </div>
      </div>

      <div className="breached-table-container">
        <table className="breached-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Breach Count</th>
              <th>Last Breach</th>
              <th>Affected Sites</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmails.map(item => (
              <tr key={item.id}>
                <td>{item.email}</td>
                <td>
                  <span className={`breach-count ${
                    item.breaches > 3 ? 'high' : 
                    item.breaches > 1 ? 'medium' : 'low'
                  }`}>
                    {item.breaches}
                  </span>
                </td>
                <td>{item.lastBreach}</td>
                <td className="breach-sites">
                  {item.sites.map((site, index) => (
                    <span key={index} className="site-badge">{site}</span>
                  ))}
                </td>
                <td className="breach-actions">
                  <button className="details-btn">Details</button>
                  <button className="notify-btn">Notify</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BreachedEmails;