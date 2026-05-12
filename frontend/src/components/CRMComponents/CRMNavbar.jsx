import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartLine, FaTasks, FaFilter, FaUserFriends, FaBrain } from 'react-icons/fa';
import './CRMNavbar.css';

const CRMNavbar = () => {
    return (
        <aside className="crm-sidebar">
            <h3>CRM</h3>
            <nav>
                <ul>
                    <li><NavLink to="/crm/leads" activeClassName="active"><FaChartLine /> Leads Management</NavLink></li>
                    <li><NavLink to="/crm/sales-activities" activeClassName="active"><FaTasks /> Sales Activities</NavLink></li>
                    <li><NavLink to="/crm/sales-pipeline" activeClassName="active"><FaFilter /> Sales Pipeline & Forecast</NavLink></li>
                    <li><NavLink to="/crm/customer-management" activeClassName="active"><FaUserFriends /> Customer Management</NavLink></li>
                    <li><NavLink to="/crm/ai-insights" activeClassName="active"><FaBrain /> AI Insights</NavLink></li>
                </ul>
            </nav>
        </aside>
    );
};

export default CRMNavbar;
