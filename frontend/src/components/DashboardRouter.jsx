import React from "react";
import { useAuth } from "../contexts/AuthContext";

import AdminDashboard from "../pages/Dashboard";
// import ManagerDashboard from "../components/ManagerDashboard/ManagerDashboard";
// import EmployeeDashboard from "../components/EmployeeDashboard/EmployeeDashboard";
// import HRDashboard from "../components/HRDashboard/HRDashboard";
// import BDEDashboard from "../components/SalesDashboard/SalesDashboard";

const DashboardRouter = () => {
  // Always render the main Dashboard for any login, as requested.
  // The AdminDashboard is the main generic dashboard (Dashboard.jsx).
  return <AdminDashboard />;
};

export default DashboardRouter;
