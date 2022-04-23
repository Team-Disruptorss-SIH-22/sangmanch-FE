// Signup & Login Forms
import Login from "./AuthForms/Login";
import UserSignup from "./AuthForms/UserSignup";
import AdminSignup from "./AuthForms/AdminSignup";
import Verify from "./AuthForms/Verify";

// Dispatch Forms
import ManufacturerForm from "./DispatchForms/ManufacturerForm";
import WarehouseForm from "./DispatchForms/WarehouseForm";
import MedicalStoreForm from "./DispatchForms/MedicalStoreForm";

// Admin
import AdminLayout from "./Admin/AdminLayout";
import DrugProgress from "./Admin/DrugProgress";
import AdminDashboard from "./Admin/AdminDashboard";
import NationalView from "./Admin/NationalView";
import Alerts from "./Admin/alerts/Alerts";
import Drugs from "./Admin/drugs/Drugs";
import Visualization from './Admin/Visualization';


// Medical Store Dashboard
import MedicalLayout from './MedicalStore/MedicalLayout';
import MedicalDashboard from './MedicalStore/MedicalDashboard';
import MedicalDrugs from "./MedicalStore/drugs/MedicalDrugs";


// Doctor Dashboard
import DoctorLayout from "./Doctor/DoctorLayout";
import DoctorDashboard from "./Doctor/DoctorDashboard";
import DoctorPrescriptions from "./Doctor/drugs/DoctorPrescriptions";

import Page404 from "./Page404";
import Home from "./Homepage/Home";

export {
	Login,
	Home,
	UserSignup,
	AdminSignup,
	Verify,
	Page404,
	ManufacturerForm,
	WarehouseForm,
	MedicalStoreForm,
	AdminLayout,
	DrugProgress,
	AdminDashboard,
	NationalView,
	Alerts,
	Drugs,
	Visualization,
	MedicalLayout,
	MedicalDashboard,
	MedicalDrugs,
	DoctorLayout,
	DoctorDashboard,
	DoctorPrescriptions
};
