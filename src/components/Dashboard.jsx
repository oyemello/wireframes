import React from 'react';
import TableSection from './TableSection';
import './Dashboard.css';

export default function Dashboard({ activeTab, searchTerm }) {
  return (
    <div className="dashboard-grid mcp-frame">
      <div className="dashboard-column">
        <TableSection 
          title={`Left Monitor - Tab ${activeTab}`} 
          description="Primary data stream"
          searchTerm={searchTerm}
        />
      </div>
      <div className="dashboard-column">
        <TableSection 
          title={`Right Monitor - Tab ${activeTab}`} 
          description="Secondary data stream"
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
}
