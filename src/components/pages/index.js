// HOC
import PublicRoute from "components/HOC/PublicRoute";
import PrivateRoute from "components/HOC/PrivateRoute";

// Signup & Login Forms
import Login from "./AuthForms/Login";
import Signup from "./AuthForms/Signup";
import AdminSignup from "./AuthForms/AdminSignup";
import Verify from "./AuthForms/Verify";

// Admin
import AdminLayout from "./Admin/AdminLayout";
import AdminDashboard from "./Admin/AdminDashboard";
import Reports from "./Admin/Reports";
import Settings from "./Admin/Setting";
import AdminInfographics from "./Admin/AdminInfographics";

// User Dashboard
import UserLayout from "./User/UserLayout";
import UserDashboard from "./User/UserDashboard";
import ReviewReport from "./User/ReviewReport";

// import Infographics from "./Admin/Infographics";
import ReportStatus from "./Admin/reports/ReportStatus"

import UserReports from "./User/UserReports";
import Events from "./User/Events";
import UserInfographics from "./User/UserInfographics";


import Page404 from "./Page404";
import Home from "./Homepage/Home";
import About from "./About/About";

export {
  PublicRoute,
  PrivateRoute,
  Login,
  Home,
  About,
  Signup,
  AdminSignup,
  Verify,
  Page404,
  AdminLayout,
  AdminDashboard,
  Reports,
  AdminInfographics,
  UserReports,
  UserLayout,
  UserDashboard,
  ReviewReport,
  ReportStatus,
  // Drugs,
  // Visualization,
  // MedicalDashboard,
  // MedicalDrugs,
  // DoctorDashboard,
  // DoctorPrescriptions

  UserInfographics,
  Events,
  Settings,
};
