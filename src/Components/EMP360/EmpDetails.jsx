import React from 'react'
import Footerrr from '../HeaderFooter/footer'
import Emp360 from '../HeaderFooter/EMP360Nav'

export default function EmpDetails() {
	return (
		<>
			<Emp360 />
			<div className="pt-6">
				<h1 className="mx-4 text-2xl font-bold">
					<span>Employee Details</span>
				</h1>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>

			<div className="flex justify-center items-center">
				<div className="w-10/12 ">
					<div className=" p-6 ">
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
								</tr>
								<tr>
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
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<Footerrr />
		</>
	)
}
