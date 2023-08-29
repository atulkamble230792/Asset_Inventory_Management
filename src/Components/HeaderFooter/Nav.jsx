import React from 'react'
import { Link } from 'react-router-dom'
import UserCircle from '../../Images/user-circle-svgrepo-com.svg'

const Nav = () => {
	return (
		<>
			<div className="navbar bg-base-400 bg-slate-600 text-white">
				<div className="flex-1">
					<Link to="/checklist" className="btn btn-ghost normal-case text-xl">
						<i className="fa fa-list-ol" aria-hidden="true"></i> E-Checklist
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 font-semibold text-lg">
						<li>
							<Link to="/Home">Home</Link>
						</li>
						{/* <li tabIndex="0">
							<details>
								<summary>Admin Master</summary>
								<ul className="p-2 bg-slate-700 text-white z-40">
									<li>
										<Link to="/admin/application">Application Name's</Link>
									</li>
									<li>
										<Link to="/admin/master-checklist">Master Checklist</Link>
									</li>
								</ul>
							</details>
						</li>

						<li tabIndex="0">
							<details>
								<summary>RoleMaster</summary>
								<ul className="p-2 bg-slate-700 text-white z-40">
									<li>
										<Link to="/rolemaster/menu-master">Menu Master</Link>
									</li>
									<li>
										<Link to="/rolemaster/role-master">Role Master</Link>
									</li>
									<li>
										<Link to="/rolemaster/role-master-mapping">
											Role Master Mapping
										</Link>
									</li>
									<li>
										<Link to="/rolemaster/employee-master">
											Employee Master
										</Link>
									</li>
									<li>
										<Link to="/rolemaster/tower">Tower</Link>
									</li>
								</ul>
							</details>
						</li> */}
						<li tabIndex="0">
							<details>
								<summary>L2 Analyst</summary>
								<ul className="p-2  bg-slate-700 text-white z-40">
									<li>
										<Link to="/l2-analyst/l2_checklist">Checklist</Link>
									</li>
									{/* <li>
										<Link to="/l2-analyst/chronology">Chronology</Link>
									</li> */}
									<li>
										<Link to="/l1-analyst/dashboard">Dashboard</Link>
									</li>
								</ul>
							</details>
						</li>
						<li tabIndex="0">
							<details>
								<summary>L1 Analyst</summary>
								<ul className="p-2  bg-slate-700 text-white z-40">
									<li>
										<Link to="/l1-analyst/l1_checklist">Checklist</Link>
									</li>
									{/* <li>
										<Link to="/l1-analyst/chronology">Chronology</Link>
									</li> */}
									<li>
										<Link to="/l1-analyst/pending-task">Pending Task</Link>
									</li>
									<li>
										<Link to="/l1-analyst/dashboard">Dashboard</Link>
									</li>
								</ul>
							</details>
						</li>
						<li tabIndex="0">
							<details>
								<summary>Handover</summary>
								<ul className="p-2  bg-slate-700 text-white z-40">
									<li>
										<Link to="/handover">Shift Handover</Link>
									</li>
									<li>
										<Link to="/handover-report">Handover Report</Link>
									</li>
								</ul>
							</details>
						</li>
						<li tabIndex="0">
							<details>
								<summary>Administration</summary>
								<ul className="p-2  bg-slate-700 text-white z-40">
									<li>
										<Link to="/admin">Checklist Authorization</Link>
									</li>

									<li>
										<Link to="/admin/encrypt">Encrypt / Decrypt</Link>
									</li>

									<li>
										<Link to="/admin/checklist-download">
											Checklist Download
										</Link>
									</li>
									<li>
										<Link to="/handover-report">Handover Reports</Link>
									</li>
								</ul>
							</details>
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

export default Nav
