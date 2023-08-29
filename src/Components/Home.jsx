import React from 'react'
import Graph from '../Images/graph-up-svgrepo-com.svg'
import Checklist from '../Images/checklist-svgrepo-com.svg'
import EMP_360 from '../Images/street-view-svgrepo-com.svg'
import Team from '../Images/team-work-svgrepo-com.svg'
import Wearhouse from '../Images/warehouse-inventory-stock-merchandise-svgrepo-com.svg'
import Employee from '../Images/employee-svgrepo-com.svg'
import test from '../Images/test-tube-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import Footerrr from './HeaderFooter/footer'

const Home = () => {
	// const [imageUrl, setImageUrl] = useState('checklist-svgrepo-com.svg')
	// const [imageUrl, setImageUrl] = useState('graph-up-svgrepo-com.svg')

	return (
		<div>
			{/* Navigation Panel */}
			{/* <div className="navbar bg-slate-600 text-white flex justify-center items-center">
				<div className="navbar-center">
					<a className="btn btn-ghost normal-case text-xl">
						Welcome to E-checklist Modules
					</a>
				</div>
				<div className="flex justify-end pr-2">
						<a>
							Sandesh Lohot
							<span className="badge">Admin</span>
						</a>
					</div>
			</div> */}

			<div className="navbar bg-slate-600 text-white flex justify-between items-center">
				<div className="navbar-center justify-center items-center">
					<div className="normal-case text-xl">
						Welcome to E-checklist Modules
					</div>
				</div>
				<div className="flex items-center pr-2">
					<div>
						<span className="pr-2 text-xl">Welcome</span>Abhijeet Patil
					</div>
					<button
						type="submit"
						// class="w-full p-3 rounded-xl bg-[#3944F7] text-l font-semibold text-black"
						className="btn btn-active btn-primary ml-2 text-white font-semibold "
					>
						<Link to="/">Logout</Link>
					</button>
				</div>
			</div>

			<div className="card_div">
				<div className="card w-full bg-base-100 border-2 border-slate-400 rounded-2xl shadow-xl  h-screen">
					<div className="card-body">
						<div className="normal-case text-xl font-bold pt-2">
							<p>Menu</p>
						</div>
						<div className="flex flex-wrap">
							<div className="p-2">
								<div className="h-52 w-52 fill-red border-2 border-slate-400 rounded-2xl">
									<Link to="/checklist">
										<img
											src={Checklist}
											alt="Checklist"
											className="h-40 w-40 flex justify-center pl-8 pt-2"
										/>
										<span className="text-xl text-center font-bold flex justify-center pt-2">
											Checklist
										</span>
									</Link>
								</div>
							</div>
							<div className="p-2">
								<div className="h-52 w-52 fill-red border-2 border-slate-400 rounded-2xl">
									<Link to="/EmployeeHome">
										<img
											src={Employee}
											alt="Employee Portal"
											className="h-40 w-40 flex justify-center pl-8 pt-2"
										/>
										<span className="text-xl text-center font-bold flex justify-center pt-2">
											Employee Portal
										</span>
									</Link>
								</div>
							</div>
							<div className="p-2">
								<div className="h-52 w-52 fill-red border-2 border-slate-400 rounded-2xl">
									<Link to="/esclationMatrix">
										<img
											src={Graph}
											alt="Escalation Matrix"
											className="h-40 w-40 flex justify-center pl-8 pt-2"
										/>
										<span className="text-xl text-center font-bold flex justify-center pt-2">
											Escalation Matrix
										</span>
									</Link>
								</div>
							</div>

							<div className="p-2">
								<div className="h-52 w-52 fill-red border-2 border-slate-400 rounded-2xl">
									<Link to="/AssetInventory">
										<img
											src={Wearhouse}
											alt="Asset Inventory"
											className="h-40 w-40 flex justify-center pl-8 pt-2"
										/>
										<span className="text-xl text-center font-bold flex justify-center pt-2">
											Asset Inventory
										</span>
									</Link>
								</div>
							</div>

							<div className="p-2">
								<div className="h-52 w-52 fill-red border-2 border-slate-400 rounded-2xl">
									<Link to="/EmpDashboard">
										<img
											src={EMP_360}
											alt="Employee 360"
											className="h-40 w-40 flex justify-center pl-8 pt-2"
										/>
										<span className="text-xl text-center font-bold flex justify-center pt-2">
											Employee 360
										</span>
									</Link>
								</div>
							</div>

							<div className="p-2">
								<div className="h-52 w-52 fill-red border-2 border-slate-400 rounded-2xl">
									<Link to="/AvailibilityPortal">
										<img
											src={Team}
											alt="Availibility Status"
											className="h-40 w-40 flex justify-center pl-8 pt-2"
										/>
										<span className="text-xl text-center font-bold flex justify-center pt-2">
											Availibility Status
										</span>
									</Link>
								</div>
							</div>

							{/* <div className="p-2">
								<div className="h-52 w-52 fill-red border-2 border-slate-400 rounded-2xl">
									<a href="/testComp">
										<img
											src={test}
											alt="Test Component"
											className="h-40 w-40 flex justify-center pl-8 pt-2"
										/>
										<span className="text-xl text-center font-bold flex justify-center pt-2">
											Test Component
										</span>
									</a>
								</div>
							</div> */}
							{/* ... and so on, add the remaining card elements */}
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<Footerrr />
		</div>
	)
}

export default Home
