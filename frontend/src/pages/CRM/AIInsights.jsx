import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardComponents/DashboardLayout';
import StatCard from '../../components/StatCard';
import { 
  FaFilter, 
  FaSearch, 
  FaUndo, 
  FaChevronLeft, 
  FaChevronRight, 
  FaBrain, 
  FaLightbulb, 
  FaArrowRight,
  FaCheckCircle,
  FaInfoCircle,
  FaUpload,
  FaMagic,
  FaHistory
} from 'react-icons/fa';
import './AIInsights.css';

const AIInsights = () => {
  const [loading, setLoading] = useState(false);
  const [insightsData, setInsightsData] = useState([]); // Empty by default
  const [searchQuery, setSearchQuery] = useState('');
  
  // Input form state
  const [formData, setFormData] = useState({
    sourceType: 'All Sources',
    conversationText: '',
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setFormData({
      sourceType: 'All Sources',
      conversationText: '',
      file: null
    });
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    setLoading(true);
    // Real generation logic would go here
  };

  return (
    <DashboardLayout>
      <div className="ai-insights-container">
        <div className="ai-insights-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <FaBrain style={{ color: '#0ea5e9', fontSize: '20px' }} />
            <h2 style={{ margin: 0 }}>AI Insights</h2>
          </div>
          <p>Harness the power of AI to predict lead behavior and optimize your sales strategy.</p>
        </div>

        {/* SECTION 1 — SUMMARY CARDS (Empty State) */}
        <div className="stats-grid">
          <StatCard title="Total Insights" value="0" change="--" changeType="neutral" icon={<FaBrain />} />
          <StatCard title="Lead Predictions" value="0" change="--" changeType="neutral" />
          <StatCard title="Conversion Accuracy" value="0%" change="--" changeType="neutral" />
          <StatCard title="Active Recommendations" value="0" change="--" changeType="neutral" />
        </div>

        <div className="ai-insights-main-layout">
          <div className="ai-insights-left-panel">
            {/* SECTION 2 — INPUT & FILTER FORM */}
            <div className="filter-card">
              <div className="filter-header">
                <h3><FaMagic size={14} /> Generate & Filter Insights</h3>
              </div>
              <form className="filter-form" onSubmit={handleGenerate}>
                <div className="form-row">
                  <div className="form-group">
                    <label>SOURCE TYPE</label>
                    <select 
                      name="sourceType" 
                      className="styled-input"
                      value={formData.sourceType}
                      onChange={handleInputChange}
                    >
                      <option>All Sources</option>
                      <option>Website</option>
                      <option>Referral</option>
                      <option>Social Media</option>
                      <option>Direct Upload</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>FILE UPLOAD</label>
                    <div className="file-upload-input-wrapper">
                      <FaUpload className="upload-icon" />
                      <input type="file" className="file-input" />
                      <span className="file-placeholder">Choose file or drag here</span>
                    </div>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group full-width">
                    <label>CONVERSATION TEXT AREA</label>
                    <textarea 
                      name="conversationText"
                      className="styled-input text-area-input" 
                      placeholder="Paste conversation or lead details here for AI analysis..."
                      value={formData.conversationText}
                      onChange={handleInputChange}
                      rows="4"
                    ></textarea>
                  </div>
                </div>

                <div className="form-divider"><span>OR FILTER EXISTING</span></div>

                <div className="form-row">
                  <div className="form-group">
                    <label>DATE RANGE</label>
                    <input type="date" className="styled-input" />
                  </div>
                  <div className="form-group">
                    <label>PREDICTION TYPE</label>
                    <select className="styled-input">
                      <option>All Predictions</option>
                      <option>High Potential</option>
                      <option>Medium Potential</option>
                      <option>Low Potential</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group full-width">
                    <label>SEARCH INPUT</label>
                    <div className="search-wrapper">
                      <FaSearch className="search-icon" />
                      <input 
                        type="text" 
                        placeholder="Search by Lead Name or Prediction..." 
                        className="styled-input search-padding"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-actions">
                  <button type="submit" className="apply-btn" disabled={loading}>
                    {loading ? 'Generating...' : 'Generate Insights'}
                  </button>
                  <button type="button" className="reset-btn" onClick={handleClear}><FaUndo /> Clear</button>
                </div>
              </form>
            </div>

            {/* SECTION 3 — AI INSIGHTS TABLE (Empty State) */}
            <div className="table-card">
              <div className="table-header">
                <h3>Insights Directory</h3>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>LEAD NAME</th>
                      <th>PREDICTION</th>
                      <th>CONFIDENCE</th>
                      <th>RECOMMENDATION</th>
                      <th>STATUS</th>
                      <th>CREATED DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {insightsData.length > 0 ? (
                      insightsData.map((row) => (
                        <tr key={row.id}>
                          <td className="lead-name-cell">{row.leadName}</td>
                          <td>{row.prediction}</td>
                          <td>{row.confidence}%</td>
                          <td className="recommendation-cell">{row.recommendation}</td>
                          <td>{row.status}</td>
                          <td>{row.createdDate}</td>
                          <td><button className="view-btn">View</button></td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="empty-state">
                          <div className="empty-content">
                            <FaInfoCircle size={32} color="#cbd5e1" />
                            <p>No insights generated yet.</p>
                            <span className="empty-subtitle">Insights will appear here after processing your data.</span>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="pagination disabled">
                <button className="page-btn" disabled><FaChevronLeft /> Previous</button>
                <div className="page-numbers">
                  <button className="number-btn active">1</button>
                </div>
                <button className="page-btn" disabled>Next <FaChevronRight /></button>
              </div>
            </div>
          </div>

          {/* SECTION 4 — RECOMMENDATION PANEL (Empty State) */}
          <div className="ai-insights-right-panel">
            <div className="recommendation-panel-card">
              <div className="panel-header">
                <h3><FaLightbulb color="#94a3b8" /> AI Recommendations</h3>
              </div>
              
              <div className="recommendation-list empty">
                <div className="empty-panel-content">
                  <FaHistory size={24} color="#e2e8f0" style={{ marginBottom: '12px' }} />
                  <p>Awaiting AI analysis</p>
                  <span>Your high-priority follow-ups will be listed here.</span>
                </div>
              </div>

              <div className="panel-footer">
                <p><FaCheckCircle color="#cbd5e1" /> AI Engine Ready</p>
                <button className="refresh-insights-btn" disabled>Refresh AI Engine</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AIInsights;
