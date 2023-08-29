// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Login from './Login'
// function App() {
// 	return (
// 		<>
// 			<Router>
// 				<Routes>
// 					<Route path="/" element={<Login />} />
// 				</Routes>
// 			</Router>
// 		</>
// 	)
// }

// export default App

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Components/Home'
// Checklist Import
import ChecklistHome from './Components/Checklist/ChecklistHome'
import L1Checklist from './Components/Checklist/l1-analyst/l1_checklist'
import L2Checklist from './Components/Checklist/l2-analyst/l2_checklist'
import L1Dashboard from './Components/Checklist/l1-analyst/l1_Dashboard'
import PendingTask from './Components/Checklist/l1-analyst/PendingTask'
import HandoverReport from './Components/Checklist/Handover/Handover-Report'
import ShiftHandover from './Components/Checklist/Handover/Handover'
import Encrypt from './Components/Checklist/admin/Encrypt'
//EMP Portal
import EmpHome from './Components/EmpPortal/EmpHome'
import EmpLeave from './Components/EmpPortal/EmpLeave'
import Availibility from './Components/EmpPortal/Availibility'
// Escalation matrix
import EscalationMatrix from './Components/EscalationMatrix/EsclationMatrix'
//Asset Enventory
import AssetInventory from './Components/assetInventory/AssetInventory'
import InventoryForm from './Components/assetInventory/InventoryForm'
// emp360
import Emp360Dashboard from './Components/EMP360/Dashboard'
import EmpPortal from './Components/EMP360/EmpPortal'
import EmpDetails from './Components/EMP360/EmpDetails'
// test Component
import EmployeeDetails from './Components/testComponent'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
				{/* Checklist */}
				<Route path="/checklist" element={<ChecklistHome />} />
				<Route path="/l1-analyst/l1_checklist" element={<L1Checklist />} />
				<Route path="/l2-analyst/l2_checklist" element={<L2Checklist />} />
				<Route path="/l1-analyst/dashboard" element={<L1Dashboard />} />
				<Route path="/l1-analyst/pending-task" element={<PendingTask />} />
				<Route path="/handover-report" element={<HandoverReport />} />
				<Route path="/handover" element={<ShiftHandover />} />
				<Route path="/admin/encrypt" element={<Encrypt />} />
				{/* EMployee Portal */}
				<Route path="/EmployeeHome" element={<EmpHome />} />
				<Route path="/EmployeeLeave" element={<EmpLeave />} />
				<Route path="/AvailibilityPortal" element={<Availibility />} />
				{/* Escalation portal */}
				<Route path="/esclationMatrix" element={<EscalationMatrix />} />
				{/* AssetInventory */}
				<Route path="/AssetInventory" element={<AssetInventory />} />
				<Route path="/InventoryForm" element={<InventoryForm />} />
				{/* EMP360 */}
				<Route path="/EmpDashboard" element={<Emp360Dashboard />} />
				<Route path="/EmpPortal" element={<EmpPortal />} />
				<Route path="/EmpDetails" element={<EmpDetails />} />
				{/* test component */}
				<Route path="/testComp" element={<EmployeeDetails />} />
			</Routes>
		</Router>
	)
}

export default App
