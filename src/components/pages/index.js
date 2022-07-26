// HOC
import AdminRoute from "components/HOC/AdminRoute";
import UserSignupRoute from "components/HOC/UserSignupRoute";
import UserRoute from "components/HOC/UserRoute";
import FormRoute from "components/HOC/FormRoute";
import DoctorRoute from "components/HOC/DoctorRoute";
import MedicalRoute from "components/HOC/MedicalRoute";

// Signup & Login Forms
import Login from "./AuthForms/Login";
import UserSignup from "./AuthForms/UserSignup";
import AdminSignup from "./AuthForms/AdminSignup";
import Verify from "./AuthForms/Verify";

// Dispatch Forms
// import ManufacturerForm from "./DispatchForms/ManufacturerForm";
// import WarehouseForm from "./DispatchForms/WarehouseForm";
// import MedicalStoreSales from "./DispatchForms/MedicalStoreSales";
import MedicalStoreReceipt from "./DispatchForms/MedicalStoreReceipt";
// import PrescriptionUploading from "./DispatchForms/PrescriptionUploading";

// Admin
import AdminLayout from "./Admin/AdminLayout";
import DrugProgress from "./Admin/DrugProgress";
import AdminDashboard from "./Admin/AdminDashboard";
// import NationalView from "./Admin/NationalView";
import Reports from "./Admin/reports/Reports";
import Drugs from "./Admin/drugs/Drugs";
import Visualization from "./Admin/Visualization";
import Settings from "./Admin/Setting";

// Medical Store Dashboard
import MedicalLayout from "./MedicalStore/MedicalLayout";
import MedicalDashboard from "./MedicalStore/MedicalDashboard";
import MedicalDrugs from "./MedicalStore/drugs/MedicalDrugs";

// Doctor Dashboard
import DoctorLayout from "./Doctor/DoctorLayout";
import DoctorDashboard from "./Doctor/DoctorDashboard";
import DoctorPrescriptions from "./Doctor/drugs/DoctorPrescriptions";

import Page404 from "./Page404";
import Home from "./Homepage/Home";

export {
  AdminRoute,
  UserRoute,
  UserSignupRoute,
  FormRoute,
  DoctorRoute,
  MedicalRoute,
  Login,
  Home,
  UserSignup,
  AdminSignup,
  Verify,
  Page404,
  MedicalStoreReceipt,
  AdminLayout,
  DrugProgress,
  AdminDashboard,
  Reports,
  Drugs,
  Visualization,
  Settings,
  MedicalLayout,
  MedicalDashboard,
  MedicalDrugs,
  DoctorLayout,
  DoctorDashboard,
  DoctorPrescriptions
};
