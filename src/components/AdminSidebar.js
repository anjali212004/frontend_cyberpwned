import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
    { name: 'Users', path: '/admin/users', icon: '👥' },
    { name: 'Breached Emails', path: '/admin/breached-emails', icon: '📧' },
    { name: 'Search History', path: '/admin/search-history', icon: '🔍' },
    { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Pwned Admin</h2>
      </div>
      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <Link 
            to={item.path} 
            key={item.name}
            className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-text">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="sidebar-footer">
        <Link to="/" className="logout-btn">Logout</Link>
      </div>
    </div>
  );
};

export default AdminSidebar;