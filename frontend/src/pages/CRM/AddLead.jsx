import React, { useState } from 'react';
import './AddLead.css';
import DashboardLayout from '../../components/DashboardComponents/DashboardLayout';
import { crmService } from '../../services/crmService';
import { useNavigate } from 'react-router-dom';

const AddLead = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rolePosition: '',
    highestEducation: '',
    experience: '',
    location: '',
    expectedSalary: '',
    skills: '',
    linkedinProfile: '',
    willingToRelocate: 'Yes',
    companyName: '',
    companyWebsite: '',
    companyEmail: '',
    status: 'New',
    priority: 'Medium',
    classification: 'Warm'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Map form data to backend schema
      const leadData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        source: 'Manual Entry',
        status: formData.status,
        priority: formData.priority,
        classification: formData.classification,
        // Other fields can be stored in metadata if needed, but for now we follow the schema
      };

      const response = await crmService.leads.create(leadData);
      if (response.success || response.data) {
        alert('Lead added successfully!');
        navigate('/leads-management');
      }
    } catch (error) {
      console.error('Error adding lead:', error);
      alert('Failed to add lead. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="add-lead-page-container">
        <div className="add-lead-header">
          <h2>Add Lead</h2>
          <p>Fill in the details below to create a new lead in the system.</p>
        </div>

        <div className="add-lead-main-content">
          <form className="add-lead-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">NAME</label>
                  <input type="text" id="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">EMAIL</label>
                  <input type="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">PHONE</label>
                  <input type="tel" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="rolePosition">ROLE POSITION</label>
                  <input type="text" id="rolePosition" placeholder="e.g. Software Engineer" value={formData.rolePosition} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="highestEducation">HIGHEST EDUCATION</label>
                  <input type="text" id="highestEducation" placeholder="e.g. Bachelor's in CS" value={formData.highestEducation} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="experience">EXPERIENCE (YEARS)</label>
                  <input type="number" id="experience" placeholder="e.g. 5" value={formData.experience} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location">LOCATION</label>
                  <input type="text" id="location" placeholder="City, Country" value={formData.location} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="expectedSalary">EXPECTED SALARY (INR)</label>
                  <input type="text" id="expectedSalary" placeholder="e.g. 15,00,000" value={formData.expectedSalary} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="skills">SKILLS</label>
                <textarea id="skills" placeholder="List skills separated by commas" value={formData.skills} onChange={handleChange}></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="linkedinProfile">LINKEDIN PROFILE</label>
                  <input type="url" id="linkedinProfile" placeholder="https://linkedin.com/in/..." value={formData.linkedinProfile} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="willingToRelocate">WILLING TO RELOCATE</label>
                  <select id="willingToRelocate" value={formData.willingToRelocate} onChange={handleChange}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Maybe">Maybe</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companyName">COMPANY NAME</label>
                  <input type="text" id="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="companyWebsite">COMPANY WEBSITE</label>
                  <input type="url" id="companyWebsite" placeholder="https://..." value={formData.companyWebsite} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="companyEmail">COMPANY EMAIL</label>
                <input type="email" id="companyEmail" placeholder="company@example.com" value={formData.companyEmail} onChange={handleChange} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="status">STATUS</label>
                  <select id="status" value={formData.status} onChange={handleChange}>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Lost">Lost</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="priority">PRIORITY</label>
                  <select id="priority" value={formData.priority} onChange={handleChange}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Adding...' : 'Add Lead and Generate Prediction'}
            </button>
          </form>

          <div className="prediction-sidebar">
            <div className="prediction-card">
              <h3>Prediction Result</h3>
              <div className="prediction-placeholder">
                <div className="prediction-icon">🤖</div>
                <p>Fill in the lead details to see the AI prediction for conversion probability.</p>
              </div>
            </div>

            <div className="info-card">
              <h3>Lead Tips</h3>
              <ul>
                <li>Complete all fields for better AI accuracy.</li>
                <li>Verify the LinkedIn profile for background checks.</li>
                <li>Ensure email and phone are correct for follow-ups.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddLead;
