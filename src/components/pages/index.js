// HOC
import AdminRoute from "components/HOC/AdminRoute";
import UserSignupRoute from "components/HOC/UserSignupRoute";
import OldUserRoute from "components/HOC/OldUserRoute";
import UserRoute from "components/HOC/UserRoute";

// Signup & Login Forms
import Login from "./AuthForms/Login";
import UserSignup from "./AuthForms/UserSignup";
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

import UserReports from "./User/reports/UserReports";
import Infographics from "./Admin/Infographics";
import ReportStatus from "./Admin/reports/ReportStatus"

import UserReports from "./User/UserReports";
import Events from "./User/Events";
import UserInfographics from "./User/UserInfographics";


import Page404 from "./Page404";
import Home from "./Homepage/Home";

export {
  AdminRoute,
  OldUserRoute,
  UserSignupRoute,
  Login,
  Home,
  UserSignup,
  AdminSignup,
  Verify,
  Page404,
  AdminLayout,
  AdminDashboard,
  Reports,
  AdminInfographics,
  UserReports,
  UserRoute,
  UserLayout,
  UserDashboard,

  Infographics,
  ReportStatus,
  // Drugs,
  // Visualization,
  Settings,
  MedicalLayout,
  // MedicalDashboard,
  // MedicalDrugs,
  DoctorLayout,
  // DoctorDashboard,
  // DoctorPrescriptions

  UserInfographics,
  Events,
  Settings,
  main
};
