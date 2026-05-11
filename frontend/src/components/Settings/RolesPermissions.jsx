import React, { useState } from 'react';
import DashboardLayout from '../DashboardComponents/DashboardLayout';

export default function RolesPermissions() {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', description: 'Full access to all modules and AI settings' },
    { id: 2, name: 'HR Manager', description: 'Access to HRMS, Attendance, and Payroll' },
    { id: 3, name: 'Sales Executive', description: 'Access to CRM and Sales pipeline' },
    { id: 4, name: 'Employee', description: 'Access to self-service, leave, and attendance' }
  ]);

  return (
    <DashboardLayout>
      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2>Roles & Permissions (RBAC)</h2>
          <button style={{ padding: '8px 12px', backgroundColor: '#28A745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            + Create New Role
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#F1F3F5', textAlign: 'left' }}>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Role Name</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Description</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map(role => (
              <tr key={role.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>{role.name}</td>
                <td style={{ padding: '12px' }}>{role.description}</td>
                <td style={{ padding: '12px' }}>
                  <button style={{ marginRight: '10px', padding: '5px 10px', cursor: 'pointer', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}>Edit Permissions</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
