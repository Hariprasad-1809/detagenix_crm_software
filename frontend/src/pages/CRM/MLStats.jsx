import React from 'react';
import './MLStats.css';
import DashboardLayout from '../../components/DashboardComponents/DashboardLayout';
import { FaSyncAlt, FaChartBar, FaChartPie, FaHeartbeat, FaBrain } from 'react-icons/fa';

const MLStats = () => {
  return (
    <DashboardLayout>
      <div className="ml-stats-container">
        {/* Page Title Section */}
        <div className="ml-stats-header">
          <div className="header-left">
            <span className="ml-badge">ML Intelligence Center</span>
            <h2>Model Performance Dashboard</h2>
            <p>Live analytics from MongoDB with lead temperature distribution, prediction coverage, and model quality signals.</p>
          </div>
          <button className="refresh-btn">
            <FaSyncAlt />
            Refresh
          </button>
        </div>

        {/* Stats Cards Row */}
        <div className="stats-row">
          <div className="stat-card">
            <span className="label">TOTAL LEADS</span>
            <div className="value">0</div>
          </div>
          <div className="stat-card">
            <span className="label">PREDICTIONS</span>
            <div className="value">0</div>
          </div>
          <div className="stat-card">
            <span className="label">COVERAGE</span>
            <div className="value">0.0%</div>
          </div>
          <div className="stat-card">
            <span className="label">MODEL ACCURACY</span>
            <div className="value">N/A</div>
          </div>
        </div>

        {/* Main Analytics Section */}
        <div className="analytics-section">
          {/* Temperature Histogram */}
          <div className="analytics-card">
            <h3>
              <FaChartBar style={{ marginRight: '10px', color: '#3b82f6' }} />
              Temperature Histogram
            </h3>
            <div className="histogram-container">
              <div className="histogram-grid">
                {/* Visual grid lines via CSS background */}
              </div>
              <div className="histogram-labels">
                <div className="label-item">Hot</div>
                <div className="label-item">Warm</div>
                <div className="label-item">Cold</div>
              </div>
            </div>
          </div>

          {/* Lead Mix Composition */}
          <div className="analytics-card">
            <h3>
              <FaChartPie style={{ marginRight: '10px', color: '#10b981' }} />
              Lead Mix Composition
            </h3>
            <div className="pie-placeholder-container">
              <div className="pie-circle"></div>
              <div className="pie-legend">
                <div className="legend-item">
                  <span className="dot hot"></span> Hot
                </div>
                <div className="legend-item">
                  <span className="dot warm"></span> Warm
                </div>
                <div className="legend-item">
                  <span className="dot cold"></span> Cold
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="analytics-section">
          {/* Prediction Health */}
          <div className="analytics-card">
            <h3>
              <FaHeartbeat style={{ marginRight: '10px', color: '#ef4444' }} />
              Prediction Health
            </h3>
            <div className="health-content">
              <div className="health-panel">
                <span className="panel-label">Coverage</span>
                <div className="progress-container">
                  <div className="progress-bar"></div>
                </div>
                <span className="panel-value">0.0%</span>
              </div>
              <div className="health-panel">
                <span className="panel-label">Dominant Segment</span>
                <div className="panel-value">N/A (0 leads)</div>
              </div>
            </div>
          </div>

          {/* Model Intelligence */}
          <div className="analytics-card">
            <h3>
              <FaBrain style={{ marginRight: '10px', color: '#8b5cf6' }} />
              Model Intelligence
            </h3>
            <div className="intelligence-grid">
              <div className="info-item">
                <span className="info-label">MODEL TYPE</span>
                <div className="info-value">N/A</div>
              </div>
              <div className="info-item">
                <span className="info-label">FEATURES</span>
                <div className="info-value">N/A</div>
              </div>
              <div className="info-item">
                <span className="info-label">ACCURACY</span>
                <div className="info-value">N/A</div>
              </div>
              <div className="info-item">
                <span className="info-label">TRAINING DATE</span>
                <div className="info-value">N/A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MLStats;
