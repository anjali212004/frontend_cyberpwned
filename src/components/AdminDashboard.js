import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // Demo data for the dashboard
  const stats = [
    { title: 'Total Users', value: '12,845', icon: '👥', color: '#c00' },
    { title: 'Breached Emails', value: '58,932', icon: '📧', color: '#e63946' },
    { title: 'Searches Today', value: '432', icon: '🔍', color: '#a00' },
    { title: 'New Alerts', value: '87', icon: '🔔', color: '#c33' }
  ];

  const recentBreaches = [
    { site: 'ExampleSite', date: '2025-02-15', records: '2.3M' },
    { site: 'DemoPortal', date: '2025-02-10', records: '1.1M' },
    { site: 'TestService', date: '2025-02-05', records: '5.7M' },
    { site: 'SampleApp', date: '2025-01-29', records: '780K' }
  ];

  return (
    <div className="admin-dashboard">
      <h1>Dashboard</h1>
      
      <div className="stat-cards">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index} style={{ borderTop: `4px solid ${stat.color}` }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3>{stat.title}</h3>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card recent-breaches">
          <h2>Recent Breaches</h2>
          <table>
            <thead>
              <tr>
                <th>Site</th>
                <th>Date</th>
                <th>Records</th>
              </tr>
            </thead>
            <tbody>
              {recentBreaches.map((breach, index) => (
                <tr key={index}>
                  <td>{breach.site}</td>
                  <td>{breach.date}</td>
                  <td>{breach.records}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="dashboard-card activity-log">
          <h2>Recent Activity</h2>
          <ul className="activity-list">
            <li>
              <span className="activity-time">10:45 AM</span>
              <span className="activity-desc">Admin user updated breach information for SampleApp</span>
            </li>
            <li>
              <span className="activity-time">09:32 AM</span>
              <span className="activity-desc">New user registered: user123@example.com</span>
            </li>
            <li>
              <span className="activity-time">08:15 AM</span>
              <span className="activity-desc">Alert generated for 15 new compromised accounts</span>
            </li>
            <li>
              <span className="activity-time">Yesterday</span>
              <span className="activity-desc">System updated with new breach data</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;