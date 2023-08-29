import React, { useState } from 'react'
import Emp360 from '../HeaderFooter/EMP360Nav'
import Footerrr from '../HeaderFooter/footer'

export default function EmpPortal() {
	const [showPopup, setShowPopup] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		setShowPopup(true)
	}

	return (
		<>
			<Emp360 />
			<div className="pt-6">
				<h1 className="mx-4 text-2xl font-bold">
					<span>Employee Form</span>
				</h1>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>
			<div className="flex h-full justify-center items-center p-4">
				<div className="w-1/2 p-6">
					<div className="p-2 py-6 bg-slate-200 text-gray-900 rounded-lg border-slate-400 border-2">
						<h1 className="text-2xl font-bold">Employee Details Form</h1>
						<form onSubmit={handleSubmit}>
							<div className="grid gap-6 mb-6 md:grid-cols-2">
								<div>
									<label htmlFor="empID" className="label">
										Employee ID
									</label>
									<input
										type="text"
										id="empID"
										className="input w-full"
										placeholder="Employee ID"
										required
									/>
								</div>
								<div>
									<label htmlFor="name" className="label">
										Name
									</label>
									<input
										type="text"
										id="name"
										className="input w-full"
										placeholder="John Doe"
										required
									/>
								</div>
								<div>
									<label htmlFor="title" className="label">
										Title
									</label>
									<input
										type="text"
										id="title"
										className="input w-full"
										placeholder="Software Engineer"
										required
									/>
								</div>
								<div>
									<label htmlFor="department" className="label">
										Department
									</label>
									<input
										type="text"
										id="department"
										className="input w-full"
										placeholder="Engineering"
										required
									/>
								</div>
								<div>
									<label htmlFor="manager" className="label">
										Manager
									</label>
									<input
										type="text"
										id="manager"
										className="input w-full"
										placeholder="Jane Smith"
										required
									/>
								</div>
								<div>
									<label htmlFor="email" className="label">
										Email address
									</label>
									<input
										type="email"
										id="email"
										className="input w-full"
										placeholder="johndoe@example.com"
										required
									/>
								</div>
								<div>
									<label htmlFor="phone" className="label">
										Phone number
									</label>
									<input
										type="tel"
										id="phone"
										className="input w-full"
										placeholder="123-456-7890"
										required
									/>
								</div>
								<div>
									<label htmlFor="hireDate" className="label">
										Hire date
									</label>
									<input
										type="date"
										id="hireDate"
										className="input w-full"
										required
									/>
								</div>
								<div>
									<label htmlFor="address" className="label">
										Address
									</label>
									<input
										type="text"
										id="address"
										className="input w-full"
										placeholder="123 Main St, City, Country"
										required
									/>
								</div>
								<div>
									<label htmlFor="skills" className="label">
										Skills
									</label>
									<input
										type="text"
										id="skills"
										className="input w-full"
										placeholder="JavaScript, React, Node.js"
										required
									/>
								</div>
							</div>
							<button type="submit" className="button bg-blue-600 text-white">
								Submit
							</button>
						</form>
					</div>
				</div>
				<div className="w-10/12">
					<div className="w-1/2 p-6 ">
						{/* Table to display records */}
						<table className="table2 ">
							<thead className="table2Th text-sm">
								<tr>
									<th className="table2ThTr bg-[#03203c] text-white">
										Employee ID
									</th>
									<th className="table2ThTr bg-[#03203c] text-white">Name</th>
									<th className="table2ThTr bg-[#03203c] text-white">Title</th>
									<th className="table2ThTr bg-[#03203c] text-white">
										Department
									</th>
									<th className="table2ThTr bg-[#03203c] text-white">
										Manager
									</th>
									<th className="table2ThTr bg-[#03203c] text-white">
										Email address
									</th>
									<th className="table2ThTr bg-[#03203c] text-white">
										Phone number
									</th>
									<th className="table2ThTr bg-[#03203c] text-white">
										Hire date
									</th>
									<th className="table2ThTr bg-[#03203c] text-white">
										Address
									</th>
									<th className="table2ThTr bg-[#03203c] text-white">Skills</th>
									<th className="table2ThTr bg-[#03203c] text-white">Delete</th>
								</tr>
							</thead>
							<tbody>
								<tr className="text-sm">
									<td className="table2ThTr">1</td>
									<td className="table2ThTr">John Doe</td>
									<td className="table2ThTr">Software Engineer</td>
									<td className="table2ThTr">Engineering</td>
									<td className="table2ThTr">Jane Smith</td>
									<td className="table2ThTr">john.doe@company.com</td>
									<td className="table2ThTr">123-456-7890</td>
									<td className="table2ThTr">2023-01-01</td>
									<td className="table2ThTr">
										123 Main Street, Anytown, CA 12345
									</td>
									<td className="table2ThTr">Java, Python, C++</td>
									<td className="table2ThTr">
										<i class="fa-solid fa-trash text-red-500"></i>
									</td>
								</tr>
								<tr>
									<td className="table2ThTr">2</td>
									<td className="table2ThTr">Jane Smith</td>
									<td className="table2ThTr">Manager</td>
									<td className="table2ThTr">Engineering</td>
									<td className="table2ThTr">None</td>
									<td className="table2ThTr">jane.smith@company.com</td>
									<td className="table2ThTr">555-666-7777</td>
									<td className="table2ThTr">2019-01-01</td>
									<td className="table2ThTr">
										456 Elm Street, Anytown, CA 12345
									</td>
									<td className="table2ThTr">Project management, leadership</td>
									<td className="table2ThTr">
										<i class="fa-solid fa-trash text-red-500"></i>
									</td>
								</tr>
								<tr>
									<td className="table2ThTr">3</td>
									<td className="table2ThTr">Mike Johnson</td>
									<td className="table2ThTr">Senior Software Engineer</td>
									<td className="table2ThTr">Engineering</td>
									<td className="table2ThTr">Jane Smith</td>
									<td className="table2ThTr">mike.johnson@company.com</td>
									<td className="table2ThTr">555-666-8888</td>
									<td className="table2ThTr">2018-01-01</td>
									<td className="table2ThTr">
										123 Main Street, Anytown, CA 12345
									</td>
									<td className="table2ThTr">
										Java, Python, C++, machine learning
									</td>
									<td className="table2ThTr">
										<i class="fa-solid fa-trash text-red-500"></i>
									</td>
								</tr>
								<tr>
									<td className="table2ThTr">4</td>
									<td className="table2ThTr">Sarah Lee</td>
									<td className="table2ThTr">UI/UX Designer</td>
									<td className="table2ThTr">Design</td>
									<td className="table2ThTr">John Doe</td>
									<td className="table2ThTr">sarah.lee@company.com</td>
									<td className="table2ThTr">123-456-9012</td>
									<td className="table2ThTr">2020-01-01</td>
									<td className="table2ThTr">
										456 Elm Street, Anytown, CA 12345
									</td>
									<td className="table2ThTr">
										Adobe XD, Sketch, Figma, HTML, CSS
									</td>
									<td className="table2ThTr">
										<i class="fa-solid fa-trash text-red-500"></i>
									</td>
								</tr>
								{/* <tr>
									<td className="table2ThTr">5</td>
									<td className="table2ThTr">Rana</td>
									<td className="table2ThTr">DevOps Engineer</td>
									<td className="table2ThTr">Infrastructure</td>
									<td className="table2ThTr">Mike Johnson</td>
									<td className="table2ThTr">rana@company.com</td>
									<td className="table2ThTr">555-666-0000</td>
									<td className="table2ThTr">2021-01-01</td>
									<td className="table2ThTr">
										678 Maple Street, Anytown, CA 12345
									</td>
									<td className="table2ThTr">
										AWS, Azure, GCP, Kubernetes, Ansible
									</td>
									<td className="table2ThTr">
										<i class="fa-solid fa-trash text-red-500"></i>
									</td>
								</tr>
								<tr>
									<td className="table2ThTr">6</td>
									<td className="table2ThTr">John Smith</td>
									<td className="table2ThTr">Sales Manager</td>
									<td className="table2ThTr">Sales</td>
									<td className="table2ThTr">None</td>
									<td className="table2ThTr">john.smith@company.com</td>
									<td className="table2ThTr">123-456-7890</td>
									<td className="table2ThTr">2022-01-01</td>
									<td className="table2ThTr">
										789 Oak Street, Anytown, CA 12345
									</td>
									<td className="table2ThTr">
										Sales, marketing, customer relationship management
									</td>
									<td className="table2ThTr">
										<i class="fa-solid fa-trash text-red-500"></i>
									</td>
								</tr>
								<tr>
									<td className="table2ThTr">7</td>
									<td className="table2ThTr">Jane Doe</td>
									<td className="table2ThTr">Accountant</td>
									<td className="table2ThTr">Finance</td>
									<td className="table2ThTr">None</td>
									<td className="table2ThTr">jane.doe@company.com</td>
									<td className="table2ThTr">555-666-7777</td>
									<td className="table2ThTr">2023-01-01</td>
									<td className="table2ThTr">
										901 Pine Street, Anytown, CA 12345
									</td>
									<td className="table2ThTr">Accounting, bookkeeping, taxes</td>
									<td className="table2ThTr">
										<i class="fa-solid fa-trash text-red-500"></i>
									</td>
								</tr> */}
							</tbody>
						</table>
					</div>
				</div>
				{/* Popup message */}
				{showPopup && (
					<div className="fixed inset-0 flex items-center justify-center">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							Records are inserted successfully!
						</div>
					</div>
				)}
			</div>
			<Footerrr />
		</>
	)
}
