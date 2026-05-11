import React, { useState } from 'react';
import DashboardLayout from '../DashboardComponents/DashboardLayout';

export default function CompanyProfile() {
  const [profile, setProfile] = useState({
    companyName: 'Detagenix',
    registrationNumber: 'REG123456',
    email: 'contact@detagenix.com',
    phone: '+1 234 567 8900',
    address: '123 Business Avenue, Tech Hub',
    website: 'https://www.detagenix.com'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Company Profile Saved');
  };

  return (
    <DashboardLayout>
      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>Company Profile</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Global configuration for the company details.</p>
        
        <form onSubmit={handleSave} style={{ display: 'grid', gap: '15px', maxWidth: '600px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Company Name</label>
            <input type="text" name="companyName" value={profile.companyName} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Registration Number</label>
            <input type="text" name="registrationNumber" value={profile.registrationNumber} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email Address</label>
            <input type="email" name="email" value={profile.email} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone Number</label>
            <input type="text" name="phone" value={profile.phone} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Address</label>
            <textarea name="address" value={profile.address} onChange={handleChange} rows="3" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Save Profile
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}
