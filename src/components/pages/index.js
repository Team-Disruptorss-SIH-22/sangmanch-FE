// HOC
import AdminRoute from "components/HOC/AdminRoute";
import UserSignupRoute from "components/HOC/UserSignupRoute";
import UserRoute from "components/HOC/UserRoute";
import FormRoute from "components/HOC/FormRoute";

// Signup & Login Forms
import Login from "./AuthForms/Login";
import UserSignup from "./AuthForms/UserSignup";
import AdminSignup from "./AuthForms/AdminSignup";
import Verify from "./AuthForms/Verify";

// Dispatch Forms
import ManufacturerForm from "./DispatchForms/ManufacturerForm";
import WarehouseForm from "./DispatchForms/WarehouseForm";
import MedicalStoreSales from "./DispatchForms/MedicalStoreSales";
import MedicalStoreReciept from "./DispatchForms/MedicalStoreReceipt";
import PrescriptionUploading from "./DispatchForms/PrescriptionUploading";

// Admin
import AdminLayout from "./Admin/AdminLayout";
import DrugProgress from "./Admin/DrugProgress";
import Dashboard from "./Admin/Dashboard";
import NationalView from "./Admin/NationalView";
import Alerts from "./Admin/alerts/Alerts";
import Drugs from "./Admin/Drugs";

import Page404 from "./Page404";
import Home from "./Homepage/Home";

export {
  AdminRoute,
  UserRoute,
  UserSignupRoute,
  FormRoute,
  Login,
  Home,
  UserSignup,
  AdminSignup,
  Verify,
  Page404,
  ManufacturerForm,
  WarehouseForm,
  MedicalStoreReciept,
  MedicalStoreSales,
  PrescriptionUploading,
  AdminLayout,
  DrugProgress,
  Dashboard,
  NationalView,
  Alerts,
  Drugs
};
