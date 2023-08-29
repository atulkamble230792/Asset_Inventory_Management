import Nav from '../../HeaderFooter/Nav.jsx'
import Footerrr from '../../HeaderFooter/footer.jsx'

import '../../../styles.css'
import React, { useEffect, useState } from 'react'

export default function L1Dashboard() {
	const [dashboard, setDashboard] = useState([])

	useEffect(() => {
		fetch('/data/dashboard.json') // Assuming your JSON file is named "data.json" and located in the same directory
			.then((response) => response.json())
			.then((data) => setDashboard(data.dashboard))
			.catch((error) => console.log(error))
	}, [])

	return (
		<>
			<Nav />
			{/* <Example /> */}
			<div className="flex justify-center items-center pt-6">
				<div className="line w-1/2 "></div>
				<h1 className="text-center mx-4 text-2xl font-bold">Dashboard</h1>
				<div className="line w-1/2 "></div>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>

			<div class="p-8">
				<table class="table">
					<thead>
						<tr>
							<th className="text-center">Sr.no</th>
							<th className="text-center">Application Name</th>
							<th className="text-center">Completed</th>
							<th className="text-center">Completed with issue</th>
							<th className="text-center">Running</th>
							<th className="text-center">Pending</th>
							<th className="text-center">Skip</th>
							<th className="text-center">Hold</th>
							<th className="text-center">Abort</th>
							<th className="text-center">Holiday</th>
							<th className="text-center">NA</th>
							<th className="text-center">Checklist Auth Status</th>
						</tr>
					</thead>
					<tbody>
						{dashboard.map((dashboard, index) => (
							<tr key={index}>
								<td className="text-center">{dashboard.SrNo}</td>
								<td className="text-center">{dashboard.ApplicationName}</td>
								<td className="text-center">{dashboard.Completed}</td>
								<td className="text-center">{dashboard.CompletedWithIssue}</td>
								<td className="text-center">{dashboard.Running}</td>
								<td className="text-center">{dashboard.Pending}</td>
								<td className="text-center">{dashboard.Skip}</td>
								<td className="text-center">{dashboard.Hold}</td>
								<td className="text-center">{dashboard.Abort}</td>
								<td className="text-center">{dashboard.Holiday}</td>
								<td className="text-center">{dashboard.Nothing}</td>
								<td className="text-center">{dashboard.ChecklistAuthStatus}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Footerrr />
		</>
	)
}
