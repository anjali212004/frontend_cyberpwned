import React, { useState } from 'react';
import './AdminSetting.css';

const AdminSettings = () => {
  // Demo settings state
  const [settings, setSettings] = useState({
    notifications: {
      emailAlerts: true,
      newBreachNotifications: true,
      weeklyReports: false,
      userSignups: true
    },
    security: {
      twoFactorAuth: true,
      sessionTimeout: 30,
      ipRestriction: false,
      passwordExpiry: 90
    },
    appearance: {
      darkMode: false,
      compactView: true,
      accentColor: '#c00'
    },
    api: {
      enabled: true,
      rateLimit: 1000,
      keyExpiration: 30
    }
  });

  // Handler for toggling boolean settings
  const handleToggle = (category, setting) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [setting]: !settings[category][setting]
      }
    });
  };

  // Handler for updating value settings
  const handleValueChange = (category, setting, value) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [setting]: value
      }
    });
  };

  return (
    <div className="admin-settings-container">
      <h1>Settings</h1>
      
      <div className="settings-grid">
        {/* Notifications Card */}
        <div className="settings-card">
          <div className="settings-card-header">
            <h2>Notifications</h2>
            <p>Configure how and when notifications are sent</p>
          </div>
          <div className="settings-card-content">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Email Alerts</h3>
                <p>Send email notifications for critical events</p>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={settings.notifications.emailAlerts}
                    onChange={() => handleToggle('notifications', 'emailAlerts')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <h3>New Breach Notifications</h3>
                <p>Alert when new data breaches are detected</p>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={settings.notifications.newBreachNotifications}
                    onChange={() => handleToggle('notifications', 'newBreachNotifications')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <h3>Weekly Reports</h3>
                <p>Send weekly summary reports</p>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={settings.notifications.weeklyReports}
                    onChange={() => handleToggle('notifications', 'weeklyReports')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <h3>User Signups</h3>
                <p>Get notified when new users register</p>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={settings.notifications.userSignups}
                    onChange={() => handleToggle('notifications', 'userSignups')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Security Card */}
        <div className="settings-card">
          <div className="settings-card-header">
            <h2>Security</h2>
            <p>Manage security preferences and policies</p>
          </div>
          <div className="settings-card-content">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Two-Factor Authentication</h3>
                <p>Require 2FA for admin accounts</p>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={settings.security.twoFactorAuth}
                    onChange={() => handleToggle('security', 'twoFactorAuth')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <h3>Session Timeout</h3>
                <p>Minutes until inactive sessions expire</p>
              </div>
              <div className="setting-control">
                <select 
                  value={settings.security.sessionTimeout}
                  onChange={(e) => handleValueChange('security', 'sessionTimeout', parseInt(e.target.value))}
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">60 minutes</option>
                  <option value="120">2 hours</option>
                </select>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <h3>IP Restriction</h3>
                <p>Limit admin access to specific IP ranges</p>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={settings.security.ipRestriction}
                    onChange={() => handleToggle('security', 'ipRestriction')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <h3>Password Expiry</h3>
                <p>Days until password must be changed</p>
              </div>
              <div className="setting-control">
                <select 
                  value={settings.security.passwordExpiry}
                  onChange={(e) => handleValueChange('security', 'passwordExpiry', parseInt(e.target.value))}
                >
                  <option value="30">30 days</option>
                  <option value="60">60 days</option>
                  <option value="90">90 days</option>
                  <option value="180">180 days</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* API Settings Card */}
        <div className="settings-card">
          <div className="settings-card-header">
            <h2>API Configuration</h2>
            <p>Manage API access and limits</p>
          </div>
          <div className="settings-card-content">
            <div className="setting-item">
              <div className="setting-info">
                <h3>API Access</h3>
                <p>Enable API for programmatic access</p>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={settings.api.enabled}
                    onChange={() => handleToggle('api', 'enabled')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <h3>Rate Limit</h3>
                <p>Maximum requests per day</p>
              </div>
              <div className="setting-control">
                <select 
                  value={settings.api.rateLimit}
                  onChange={(e) => handleValueChange('api', 'rateLimit', parseInt(e.target.value))}
                >
                  <option value="500">500 requests</option>
                  <option value="1000">1,000 requests</option>
                  <option value="5000">5,000 requests</option>
                  <option value="10000">10,000 requests</option>
                </select>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <h3>API Key Expiration</h3>
                <p>Days until API keys expire</p>
              </div>
              <div className="setting-control">
                <select 
                  value={settings.api.keyExpiration}
                  onChange={(e) => handleValueChange('api', 'keyExpiration', parseInt(e.target.value))}
                >
                  <option value="30">30 days</option>
                  <option value="90">90 days</option>
                  <option value="180">180 days</option>
                  <option value="365">365 days</option>
                </select>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <h3>Manage API Keys</h3>
                <p>Create, view, and revoke API keys</p>
              </div>
              <div className="setting-control">
                <button className="manage-btn">Manage Keys</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Appearance Card */}
        <div className="settings-card">
          <div className="settings-card-header">
            <h2>Appearance</h2>
            <p>Customize the look and feel of the dashboard</p>
          </div>
          <div className="settings-card-content">
            <div className="setting-item">
              <div className="setting-info">
                <h3>Dark Mode</h3>
                <p>Use dark color scheme for admin panel</p>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={settings.appearance.darkMode}
                    onChange={() => handleToggle('appearance', 'darkMode')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <h3>Compact View</h3>
                <p>Show more data with reduced spacing</p>
              </div>
              <div className="setting-control">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={settings.appearance.compactView}
                    onChange={() => handleToggle('appearance', 'compactView')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="setting-item">
              <div className="setting-info">
                <h3>Accent Color</h3>
                <p>Choose the primary color for the UI</p>
              </div>
              <div className="setting-control">
                <input 
                  type="color" 
                  value={settings.appearance.accentColor}
                  onChange={(e) => handleValueChange('appearance', 'accentColor', e.target.value)}
                  className="color-picker"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="settings-actions">
        <button className="save-settings-btn">Save Changes</button>
        <button className="reset-settings-btn">Reset to Defaults</button>
      </div>
    </div>
  );
};

export default AdminSettings;