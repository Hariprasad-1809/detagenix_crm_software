import React from 'react';
import DashboardLayout from '../DashboardComponents/DashboardLayout';

export default function SecurityCompliance() {
  const auditLogs = [
    { id: 1, action: 'User Login', user: 'admin@detagenix.com', time: '2026-05-07 09:00 AM', status: 'Success' },
    { id: 2, action: 'Export Salary Data', user: 'hr@detagenix.com', time: '2026-05-07 10:15 AM', status: 'Blocked (Data Masking)' },
    { id: 3, action: 'Database Backup', user: 'System', time: '2026-05-07 02:00 AM', status: 'Success' }
  ];

  return (
    <DashboardLayout>
      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>Security & Compliance Logs</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Audit logs, data masking alerts, and backup statuses.</p>

        <div style={{ marginBottom: '20px' }}>
          <button style={{ padding: '8px 15px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>
            Trigger Manual Backup
          </button>
          <button style={{ padding: '8px 15px', backgroundColor: '#17a2b8', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Configure Data Masking
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#F1F3F5', textAlign: 'left' }}>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Time</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Action</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>User</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map(log => (
              <tr key={log.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '12px' }}>{log.time}</td>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>{log.action}</td>
                <td style={{ padding: '12px' }}>{log.user}</td>
                <td style={{ padding: '12px', color: log.status.includes('Success') ? 'green' : 'red' }}>{log.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
