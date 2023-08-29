import Nav from '../../HeaderFooter/Nav'
import Footerrr from '../../HeaderFooter/footer'
import React, { useState } from 'react'

const TowerOptions = [
	'Automations',
	'FCR',
	'Corporate',
	'FCR Projects',
	'Enterprise',
	'ITSM',
]

const ApplicationOptions = [
	'FCR',
	'FCC',
	'UPI',
	'IMPS',
	'NACH',
	'OGL',
	'Retails Asset',
	'Y-colors',
]

export default function HandoverReport() {
	const [showTable, setShowTable] = useState(false)
	const handleFormSubmit = () => {
		setShowTable(true)
	}
	return (
		<>
			<Nav />
			<div className="flex justify-center items-center pt-6">
				<h1 className="text-center mx-4 text-2xl font-bold">
					<span>Handover Report</span>
				</h1>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>

			{/* Form */}
			<div className="flex p-6 md:flex-row space-x-8 items-center justify-center">
				<div className="Flex justify-center items-center">
					<div className="p-8 border rounded-lg shadow-lg w-80 mx-auto">
						<form className="flex flex-wrap gap-4">
							<div className="flex flex-col w-full">
								<label htmlFor="tower" className="label">
									Tower
								</label>
								<select id="tower" name="tower" className="input">
									<option disabled selected>
										Select Tower
									</option>
									{TowerOptions.map((tower) => (
										<option key={tower} value={tower}>
											{tower}
										</option>
									))}
								</select>
							</div>

							<div className="flex flex-col w-full">
								<label htmlFor="appName" className="label">
									Application Name
								</label>
								<select id="appName" name="appName" className="input">
									<option disabled selected>
										Select Application
									</option>
									{ApplicationOptions.map((appName) => (
										<option key={appName} value={appName}>
											{appName}
										</option>
									))}
								</select>
							</div>

							<div className="flex flex-col w-full">
								<label htmlFor="fromDate" className="label">
									From Date
								</label>
								<input
									type="date"
									id="fromDate"
									name="fromDate"
									className="input"
									required
								/>
							</div>

							<div className="flex flex-col w-full">
								<label htmlFor="toDate" className="label">
									To Date
								</label>
								<input
									type="date"
									id="toDate"
									name="toDate"
									className="input"
									required
								/>
							</div>

							<div className="w-full">
								<button
									type="submit"
									onClick={handleFormSubmit}
									className="btn btn-active btn-success text-white font-semibold mt-4"
									style={{ backgroundColor: '#3944f7' }}
								>
									View Report
								</button>
							</div>
						</form>
					</div>
				</div>

				{/* Table */}

				<div className="p-4">
					{showTable ? (
						<table className="table">
							<thead>
								<tr>
									<th>Application Name</th>
									<th>Addition Date</th>
									<th>Handover Given By</th>
									<th>Mail/Time</th>
									<th>Activity Details</th>
									<th>Ticket No</th>
									<th>CRM Ticket</th>
									<th>Status</th>
									<th>Completed By</th>
									<th>Priority</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>FCR</td>
									<td>2023-07-25</td>
									<td>John Doe</td>
									<td>09:30 AM</td>
									<td>Sample Activity 1</td>
									<td>ABC123</td>
									<td>CRM456</td>
									<td>Completed</td>
									<td>John Doe</td>
									<td>High</td>
								</tr>
								<tr>
									<td>IMPS</td>
									<td>2023-07-26</td>
									<td>Jane Smith</td>
									<td>11:45 AM</td>
									<td>Sample Activity 2</td>
									<td>DEF456</td>
									<td>CRM789</td>
									<td>In Progress</td>
									<td>Rohit</td>
									<td>Medium</td>
								</tr>
								<tr>
									<td>Retails Asset</td>
									<td>2023-07-27</td>
									<td>Mike Johnson</td>
									<td>03:15 PM</td>
									<td>Sample Activity 3</td>
									<td>GHI789</td>
									<td>CRM123</td>
									<td>Pending</td>
									<td>Rana</td>
									<td>High</td>
								</tr>
								<tr>
									<td>OGL</td>
									<td>2023-07-28</td>
									<td>Sarah Lee</td>
									<td>10:00 AM</td>
									<td>Sample Activity 4</td>
									<td>JKL101</td>
									<td>CRM234</td>
									<td>Hold</td>
									<td>Rana</td>
									<td>Low</td>
								</tr>
								<tr>
									<td>FCR Projects</td>
									<td>2023-07-29</td>
									<td>Michael Smith</td>
									<td>01:30 PM</td>
									<td>Sample Activity 5</td>
									<td>MNO567</td>
									<td>CRM567</td>
									<td>Completed with Issue</td>
									<td>John Doe</td>
									<td>High</td>
								</tr>
							</tbody>
						</table>
					) : (
						<pre></pre>
					)}
				</div>
			</div>
			<Footerrr />
		</>
	)
}
