import Nav from '../../HeaderFooter/Nav.jsx'
import Footerrr from '../../HeaderFooter/footer.jsx'
// import TableComponent from './testSample.jsx'
import '../../../styles.css'
import React, { useEffect, useState } from 'react'

export default function L2Checklist() {
	const [lcheck, setLcheck] = useState([])

	useEffect(() => {
		fetch('/data/l2check.json') // Assuming your JSON file is named "data.json" and located in the same directory
			.then((response) => response.json())
			.then((data) => setLcheck(data.lcheck))
			.catch((error) => console.log(error))
	}, [])

	return (
		<>
			<Nav />
			{/* <Example /> */}
			<div className="flex justify-center items-center pt-6">
				<div className="line w-1/2 "></div>
				<h1 className="text-center mx-4 text-2xl font-bold">
					<span>L2_Checklist</span>
				</h1>
				<div className="line w-1/2 "></div>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>

			<div class="p-8">
				<table class="table">
					<thead>
						<tr>
							<th className="text-center">Sr.no</th>
							<th className="text-center">Estimated Start Time</th>
							<th className="text-center">Activity</th>
							<th className="text-center">Start Time</th>
							<th className="text-center">End Time</th>
							<th className="text-center">Time Taken</th>
							<th className="text-center">Status</th>
							<th className="text-center">Ticket NO</th>
							<th className="text-center">Remarks</th>
							<th className="text-center">Action</th>
							<th className="text-center">Assign To</th>
						</tr>
					</thead>
					<tbody>
						{lcheck.map((lcheck, index) => (
							<tr key={index}>
								<td className="text-center">{lcheck.srNo}</td>
								<td className="text-center">{lcheck.estimatedStartTime}</td>
								<td className="text-center">{lcheck.activity}</td>
								<td className="text-center">{lcheck.startTime}</td>
								<td className="text-center">{lcheck.endTime}</td>
								<td className="text-center">{lcheck.timeTaken}</td>
								{/* <td className="text-center">{lcheck.status}</td> */}
								<td className="text-center">
									<select class="select select-info w-32 max-h-10">
										<option disabled selected>
											Select Status
										</option>
										<option>Completed</option>
										<option>Completed With Error</option>
										<option>In Progress</option>
										<option>Not required</option>
									</select>
								</td>
								{/* <select>
              {values.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select> */}
								<td className="text-center">{lcheck.ticketNo}</td>
								<td className="text-center">{lcheck.remarks}</td>
								<td className="text-center">{lcheck.action}</td>
								<td className="text-center">{lcheck.assignTo}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Footerrr />
		</>
	)
}
