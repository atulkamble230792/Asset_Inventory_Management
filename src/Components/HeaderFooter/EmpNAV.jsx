import React from 'react'
import { Link } from 'react-router-dom'
import UserCircle from '../../Images/user-circle-svgrepo-com.svg'

const EmpNAV = () => {
	return (
		<>
			<div className="navbar bg-base-400 bg-slate-600 text-white">
				<div className="flex-1">
					<Link
						to="/EmpDashboard"
						className="btn btn-ghost normal-case text-xl"
					>
						<i class="fa-solid fa-user-tie"></i> Employee 360
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 font-semibold text-lg">
						<li>
							<Link to="/Home">
								{' '}
								<i class="fa fa-home" aria-hidden="true"></i>Home
							</Link>
						</li>
						<li>
							<Link to="/EmployeeLeave">Leave Request</Link>
						</li>

						<li>
							<Link to="#">Company Calender</Link>
						</li>

						<li>
							<Link to="#">Add Compoff</Link>
						</li>
						<li>
							<Link to="#">Timesheet</Link>
						</li>

						<li>
							<Link to="/AvailibilityPortal">Availibility Portal</Link>
						</li>
					</ul>
				</div>
				<div className="dropdown dropdown-end">
					<label tabIndex="0" className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src={UserCircle} className="bg-white" alt="Avatar" />
						</div>
					</label>
					<ul
						tabIndex="0"
						className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<Link className="justify-between">
								Abhijeet Patil
								<span className="badge">Admin</span>
							</Link>
						</li>
						<li>
							<Link to="/logout">Logout</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default EmpNAV
