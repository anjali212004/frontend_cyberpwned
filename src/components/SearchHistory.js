import React, { useState } from 'react';
import './SearchHistory.css';

const SearchHistory = () => {
  // Demo data
  const searchHistory = [
    { id: 1, email: 'search1@example.com', user: 'John Doe', timestamp: '2025-02-28 09:23:45', result: 'Breached', breachCount: 3 },
    { id: 2, email: 'search2@example.com', user: 'Jane Smith', timestamp: '2025-02-28 08:14:22', result: 'Not Breached', breachCount: 0 },
    { id: 3, email: 'search3@example.com', user: 'Robert Johnson', timestamp: '2025-02-27 16:42:05', result: 'Breached', breachCount: 1 },
    { id: 4, email: 'search4@example.com', user: 'Samantha Lee', timestamp: '2025-02-27 15:31:47', result: 'Breached', breachCount: 5 },
    { id: 5, email: 'search5@example.com', user: 'Michael Wilson', timestamp: '2025-02-27 14:22:31', result: 'Not Breached', breachCount: 0 }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');

  const getFilteredDate = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);
    
    return { today, yesterday, lastWeek };
  };

  const { today, yesterday, lastWeek } = getFilteredDate();

  const filteredHistory = searchHistory
    .filter(item => 
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.user.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(item => {
      const searchDate = new Date(item.timestamp);
      if (dateFilter === 'all') return true;
      if (dateFilter === 'today') return searchDate.toDateString() === today.toDateString();
      if (dateFilter === 'yesterday') return searchDate.toDateString() === yesterday.toDateString();
      if (dateFilter === 'week') return searchDate >= lastWeek;
      return true;
    });

  return (
    <div className="search-history-container">
      <div className="search-history-header">
        <h1>Search History</h1>
        <div className="search-filters">
          <div className="search-input">
            <input 
              type="text" 
              placeholder="Search email or user..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="date-filter">
            <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="week">Last 7 Days</option>
            </select>
          </div>
          <button className="clear-btn" onClick={() => {
            setSearchTerm('');
            setDateFilter('all');
          }}>Clear Filters</button>
        </div>
      </div>

      <div className="search-history-stats">
        <div className="stat-box">
          <h3>Total Searches</h3>
          <p>{searchHistory.length}</p>
        </div>
        <div className="stat-box">
          <h3>Breached Results</h3>
          <p>{searchHistory.filter(item => item.result === 'Breached').length}</p>
        </div>
        <div className="stat-box">
          <h3>Today's Searches</h3>
          <p>{searchHistory.filter(item => new Date(item.timestamp).toDateString() === today.toDateString()).length}</p>
        </div>
      </div>

      <div className="search-table-container">
        <table className="search-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Email</th>
              <th>Searched By</th>
              <th>Result</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.map(item => (
              <tr key={item.id}>
                <td>{item.timestamp}</td>
                <td>{item.email}</td>
                <td>{item.user}</td>
                <td>
                  <span className={`result-badge ${item.result === 'Breached' ? 'breached' : 'clean'}`}>
                    {item.result} {item.breachCount > 0 && `(${item.breachCount})`}
                  </span>
                </td>
                <td className="search-actions">
                  <button className="details-btn">View Details</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchHistory;