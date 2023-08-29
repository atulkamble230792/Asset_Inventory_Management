import Footerrr from '../HeaderFooter/footer'
import EmpNAV from '../HeaderFooter/EmpNAV'

import React, { useState } from 'react'
export default function EmpLeave() {
	// const [employeeName, setEmployeeName] = useState('')
	// const [employeeId, setEmployeeId] = useState('')
	// const [leaveStartDate, setLeaveStartDate] = useState('')
	// const [leaveEndDate, setLeaveEndDate] = useState('')
	// const [reasonForLeave, setReasonForLeave] = useState('')
	// const [medicalCertificate, setMedicalCertificate] = useState('')

	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	// Handle form submission logic here
	// 	console.log('Form submitted!')
	// }

	const [showPopup, setShowPopup] = useState(false)
	const [employeeName, setEmployeeName] = useState('')
	const [employeeId, setEmployeeId] = useState('')
	const [leaveStartDate, setLeaveStartDate] = useState('')
	const [leaveEndDate, setLeaveEndDate] = useState('')
	const [reasonForLeave, setReasonForLeave] = useState('')
	const [medicalCertificate, setMedicalCertificate] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		// Your form submission logic goes here
		setShowPopup(false) // Close the pop-up after form submission
	}
	const sampleRecords = [
		{
			id: 1,
			leaveType: 'Annual Leave',
			from: '2023-08-01',
			to: '2023-08-05',
			numberOfDays: 5,
			reason: 'Vacation',
			status: 'Approved',
			approvedBy: 'John Doe',
		},
		{
			id: 2,
			leaveType: 'Medical Leave',
			from: '2023-08-10',
			to: '2023-08-12',
			numberOfDays: 3,
			reason: 'Fever',
			status: 'Approved',
			approvedBy: 'Jane Smith',
		},
		{
			id: 3,
			leaveType: 'Other Leave',
			from: '2023-08-15',
			to: '2023-08-15',
			numberOfDays: 1,
			reason: 'Personal',
			status: 'Pending',
			approvedBy: '',
		},
	]

	return (
		<>
			<EmpNAV />
			{/* <div className="p-8">
				<h1 className="text-3xl font-semibold mb-4">Leaves</h1>
			</div> */}
			<div className="p-4">
				<div className="p-4  flex justify-between  mt-2">
					<h1 className="text-3xl font-semibold mb-4 just">Leaves</h1>
					<button
						className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mb-6"
						onClick={() => setShowPopup(true)}
					>
						Add Leave
					</button>
				</div>
			</div>
			<div className="ml-20 mr-20 w-11/12 flex justify-center items-center">
				{showPopup && (
					<div className="p-8 w-12/12 flex justify-center items-center">
						<div className="p-4 border rounded-lg shadow-lg">
							<form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
								<div className="flex flex-col w-full sm:w-1/2 md:w-1/3">
									<label
										htmlFor="employeeName"
										className="text-sm font-medium text-gray-700"
									>
										Employee Name
									</label>
									<input
										type="text"
										id="employeeName"
										name="employeeName"
										className="input"
										value={employeeName}
										onChange={(e) => setEmployeeName(e.target.value)}
										required
									/>
								</div>

								<div className="flex flex-col w-full sm:w-1/2 md:w-1/3">
									<label
										htmlFor="employeeId"
										className="text-sm font-medium text-gray-700"
									>
										Employee ID
									</label>
									<input
										type="text"
										id="employeeId"
										name="employeeId"
										className="input"
										value={employeeId}
										onChange={(e) => setEmployeeId(e.target.value)}
										required
									/>
								</div>

								<div className="flex flex-col w-full sm:w-1/2 md:w-1/3">
									<label
										htmlFor="leaveStartDate"
										className="text-sm font-medium text-gray-700"
									>
										Leave Start Date
									</label>
									<input
										type="date"
										id="leaveStartDate"
										name="leaveStartDate"
										className="input"
										value={leaveStartDate}
										onChange={(e) => setLeaveStartDate(e.target.value)}
										required
									/>
								</div>

								<div className="flex flex-col w-full sm:w-1/2 md:w-1/3">
									<label
										htmlFor="leaveEndDate"
										className="text-sm font-medium text-gray-700"
									>
										Leave End Date
									</label>
									<input
										type="date"
										id="leaveEndDate"
										name="leaveEndDate"
										className="input"
										value={leaveEndDate}
										onChange={(e) => setLeaveEndDate(e.target.value)}
										required
									/>
								</div>

								<div className="flex flex-col w-full sm:w-1/2 md:w-1/3">
									<label
										htmlFor="leaveEndDate"
										className="text-sm font-medium text-gray-700"
									>
										Leave Type
									</label>
									{/* <input
										type="t"
										id="leaveEndDate"
										name="leaveEndDate"
										className="input"
										value={leaveEndDate}
										onChange={(e) => setLeaveEndDate(e.target.value)}
										required
									/> */}
									<select
										name="Type"
										className="input"
										onChange={(e) => medicalCertificate(e.target.value)}
									>
										<option value="" defaultValue>
											Select Leave Type
										</option>
										<option value="Casual">Casual</option>
										<option value="Anaul">Anaul</option>
										<option value="Medical">Medical</option>
										<option value="Comp-Off">Comp-Off</option>
									</select>
								</div>

								<div className="flex flex-col w-full">
									<label
										htmlFor="reasonForLeave"
										className="text-sm font-medium text-gray-700"
									>
										Reason for Leave (Up to 250 characters)
									</label>
									<textarea
										id="reasonForLeave"
										name="reasonForLeave"
										rows="4"
										className="input"
										value={reasonForLeave}
										onChange={(e) => setReasonForLeave(e.target.value)}
										maxLength={250}
										required
									></textarea>
								</div>

								<div className="flex flex-col w-full">
									<label
										htmlFor="medicalCertificate"
										className="text-sm font-medium text-gray-700"
									>
										Medical Certificate (Attachment if any)
									</label>
									<input
										type="file"
										id="medicalCertificate"
										name="medicalCertificate"
										className="input"
										onChange={(e) => setMedicalCertificate(e.target.value)}
									/>
								</div>
								<div className="flex flex-col">
									<button
										type="submit"
										className="btn btn-active btn-success text-white font-semibold mt-4"
									>
										Apply Leave
									</button>
									<button
										className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mb-6 mt-2"
										onClick={() => setShowPopup(false)}
									>
										<i class="fa-regular fa-eye-slash"></i>
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>

			<div>
				<div className="flex justify-center flex-wrap mb-8">
					<div className="p-4 mr-2 bg-white rounded-lg shadow-md border-2 border-grey-200">
						<h2 className="text-lg font-semibold mb-2 text-center">
							Annual Leave
						</h2>
						<p className="text-center">12</p>
					</div>
					<div className="p-4 mr-2 bg-white rounded-lg shadow-md border-2 border-grey-200">
						<h2 className="text-lg font-semibold mb-2 text-center">
							Casual Leave
						</h2>
						<p className="text-center">2</p>
					</div>

					<div className="p-4 mr-2 bg-white rounded-lg shadow-md border-2 border-grey-200">
						<h2 className="text-lg font-semibold mb-2">Medical Leave</h2>
						<p className="text-center"> 3</p>
					</div>

					<div className="p-4 bg-white rounded-lg shadow-md border-2 border-grey-200">
						<h2 className="text-lg font-semibold mb-2">Compoff</h2>
						<p className="text-center">4</p>
					</div>
				</div>

				<table className="w-full border table border-gray-300 rounded-lg mb-6">
					<thead className="">
						<tr>
							<th className="p-2">Leave Type</th>
							<th className="p-2">From</th>
							<th className="p-2">To</th>
							<th className="p-2">No of Days</th>
							<th className="p-2">Reason</th>
							<th className="p-2">Status</th>
							<th className="p-2">Approved By</th>
							<th className="p-2">Action</th>
						</tr>
					</thead>
					<tbody>
						{sampleRecords.map((record) => (
							<tr key={record.id}>
								<td className="p-2">{record.leaveType}</td>
								<td className="p-2">{record.from}</td>
								<td className="p-2">{record.to}</td>
								<td className="p-2">{record.numberOfDays}</td>
								<td className="p-2">{record.reason}</td>
								<td className="p-2">{record.status}</td>
								<td className="p-2">{record.approvedBy}</td>
								<td className="p-2">
									<button className="text-blue-600 mr-2">Edit</button>
									<button className="text-red-600">Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Footerrr />
		</>
	)
}
