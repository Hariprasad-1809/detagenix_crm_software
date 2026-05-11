import React from 'react';
import DashboardLayout from '../DashboardComponents/DashboardLayout';

export default function AISettings() {
  return (
    <DashboardLayout>
      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>AI Intelligence Layer Settings</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Manage AI Agents, Credits, and Features across CRM & HRMS.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          
          {/* Credits Widget */}
          <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '10px' }}>AI Credits Usage</h3>
            <div style={{ backgroundColor: '#e9ecef', borderRadius: '4px', height: '20px', width: '100%', marginBottom: '10px' }}>
              <div style={{ backgroundColor: '#28A745', height: '100%', width: '75%', borderRadius: '4px' }}></div>
            </div>
            <p>75,000 / 100,000 Credits Used</p>
          </div>

          {/* AI Features Toggle */}
          <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '10px' }}>Enable/Disable System Features</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>AI Assistant (Chat)</span>
              <input type="checkbox" defaultChecked />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>AI Resume Screening (HR)</span>
              <input type="checkbox" defaultChecked />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>AI Fraud Detection (Payroll & Logs)</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Lead Priority Scoring (CRM)</span>
              <input type="checkbox" defaultChecked />
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
