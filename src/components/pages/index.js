// HOC
import PublicRoute from "components/HOC/PublicRoute";
import PrivateRoute from "components/HOC/PrivateRoute";
import AlumniRoute from "components/HOC/AlumniRoute";

// Signup & Login Forms
import Login from "./AuthForms/Login";
import Signup from "./AuthForms/Signup";
import AlumniSignup from "./AuthForms/AlumniSignup";
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
import UserReports from "./User/UserReports";
import Events from "./User/Events";
import UserInfographics from "./User/UserInfographics";
import Requirements from "./User/Requirements";
import SearchReports from "./User/SearchReports";
import AlumniConnect from "./User/AlumniConnect";

// Alumni Dashboard
import AlumniLayout from "./Alumni/AlumniLayout";
import AlumniNews from "./Alumni/AlumniNews";
import AlumniRequests from "./Alumni/AlumniRequests";

import Page404 from "./Page404";
import Home from "./Homepage/Home";
import About from "./About/About";

export {
  PublicRoute,
  PrivateRoute,
  AlumniRoute,
  Login,
  Home,
  About,
  Signup,
  AlumniSignup,
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
  UserInfographics,
  Events,
  Settings,
  Requirements,
  AlumniConnect,
  AlumniLayout,
  AlumniNews,
  AlumniRequests,
  SearchReports
};
