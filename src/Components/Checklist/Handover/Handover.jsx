import { Link } from 'react-router-dom'
import Nav from '../../HeaderFooter/Nav'
import Footerrr from '../../HeaderFooter/footer'
import React from 'react'

export default function ShiftHandover() {
	return (
		<>
			<Nav />
			<div className="pt-6">
				<h1 className="mx-4 text-2xl font-bold">
					<span>Shift Handover</span>
				</h1>
			</div>
			<div className="red-line w-full h-1 bg-red-400 mb-3"></div>

			{/* Form */}
			<div className="p-8 border rounded-lg shadow-lg mt-2">
				<form className="flex flex-wrap gap-4 border-2 border-grey-300 rounded-lg p-6 shadow-lg">
					<div className="flex flex-col w-64">
						<label
							htmlFor="tower"
							className="text-sm font-medium text-gray-700"
						>
							Tower
						</label>
						<select
							id="tower"
							name="tower"
							className="input"
							// defaultValue="Automations"
						>
							<option disabled selected>
								Select Tower
							</option>
							<option value="Automations">Automations</option>
							<option value="FCR">FCR</option>
							<option value="Corporate">Corporate</option>
							<option value="FCR Projects">FCR Projects</option>
							<option value="Enterprise">Enterprise</option>
							<option value="ITSM">ITSM</option>
						</select>
					</div>

					<div className="flex flex-col w-64">
						<label
							htmlFor="appName"
							className="text-sm font-medium text-gray-700"
						>
							Application Name
						</label>
						<select
							id="appName"
							name="appName"
							className="input"
							// defaultValue="FCR"
						>
							<option disabled selected>
								Select Application
							</option>
							<option value="FCR">FCR</option>
							<option value="FCC">FCC</option>
							<option value="UPI">UPI</option>
							<option value="IMPS">IMPS</option>
							<option value="NACH">NACH</option>
							<option value="OGL">OGL</option>
							<option value="Retails Asset">Retails Asset</option>
							<option value="Y-colors">Y-colors</option>
						</select>
					</div>

					<div className="flex flex-col w-64">
						<label
							htmlFor="mailTime"
							className="text-sm font-medium text-gray-700"
						>
							Mail Time
						</label>
						<input
							type="time"
							id="mailTime"
							name="mailTime"
							className="input"
							required
						/>
					</div>

					<div className="flex flex-col w-64">
						<label
							htmlFor="ticketNo"
							className="text-sm font-medium text-gray-700"
						>
							Ticket No
						</label>
						<input
							type="text"
							id="ticketNo"
							name="ticketNo"
							className="input"
							required
						/>
					</div>

					<div className="flex flex-col w-96">
						<label
							htmlFor="description"
							className="text-sm font-medium text-gray-700"
						>
							Description
						</label>
						<textarea
							id="description"
							name="description"
							rows="4"
							className="input"
							required
						></textarea>
					</div>

					<div className="flex flex-col w-64">
						<label
							htmlFor="crmTicket"
							className="text-sm font-medium text-gray-700"
						>
							CRM Ticket
						</label>
						<input
							type="text"
							id="crmTicket"
							name="crmTicket"
							className="input"
							required
						/>
					</div>

					<div className="flex flex-col w-64">
						<label
							htmlFor="priority"
							className="text-sm font-medium text-gray-700"
						>
							Priority
						</label>
						<select
							id="priority"
							name="priority"
							className="input"
							// defaultValue="High"
						>
							<option disabled selected>
								Select Priority
							</option>
							<option value="High">High</option>
							<option value="Medium">Medium</option>
							<option value="Low">Low</option>
						</select>
					</div>

					<div className="flex flex-col w-64">
						<label
							htmlFor="status"
							className="text-sm font-medium text-gray-700"
						>
							Status
						</label>
						<select
							id="status"
							name="status"
							className="input"
							// defaultValue="Completed"
						>
							<option disabled selected>
								Select Status
							</option>
							<option value="Completed">Completed</option>
							<option value="Completed with Issue">Completed with Issue</option>
							<option value="Pending">Pending</option>
							<option value="Hold">Hold</option>
							<option value="Abort">Abort</option>
							<option value="Skip">Skip</option>
							<option value="Running">Running</option>
							<option value="Holiday">Holiday</option>
							<option value="FYI">FYI</option>
							<option value="FYA">FYA</option>
						</select>
					</div>

					<div className="flex flex-col w-64">
						<label
							htmlFor="assign"
							className="text-sm font-medium text-gray-700"
						>
							Assign
						</label>
						<select
							id="assign"
							name="assign"
							className="input"
							// defaultValue="John"
						>
							<option disabled selected>
								Assign To
							</option>
							<option value="John">John</option>
							<option value="Michal">Michal</option>
							<option value="Samual">Samual</option>
							<option value="Rana">Rana</option>
						</select>
					</div>

					<div className="flex flex-col w-64">
						<label
							htmlFor="attachment"
							className="text-sm font-medium text-gray-700"
						>
							Attachment
						</label>
						<input
							type="file"
							id="attachment"
							name="attachment"
							className="input"
						/>
					</div>

					<button
						type="submit"
						className=" btn btn-active btn-success text-white font-semibold mt-4"
					>
						Submit
					</button>
				</form>
			</div>

			{/* Table */}

			<div className="p-4">
				<table className="table">
					<thead>
						<tr>
							<th>Sr. No</th>
							<th>Point Addition Date</th>
							<th>Handover Given By</th>
							<th>Application Name</th>
							<th>Mail/Time</th>
							<th>Ticket No</th>
							<th>Activity Subject</th>
							<th>CRM Ticket</th>
							<th>File</th>
							<th>Priority</th>
							<th>Status</th>
							<th>Assign To</th>
							<th>Completed By</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>1</td>
							<td>2023-07-25</td>
							<td>John Doe</td>
							<td>FCR</td>
							<td>09:30 AM</td>
							<td>ABC123</td>
							<td>Sample Activity 1</td>
							<td>CRM456</td>
							<td>sample.pdf</td>
							<td>High</td>
							<td>Completed</td>
							<td>Michael</td>
							<td>John Doe</td>
							<td>
								<Link to="#" className="text-blue-600 mr-2">
									Delete
								</Link>
								<Link to="#" className="text-blue-600">
									Archive
								</Link>
							</td>
						</tr>
						<tr>
							<td>2</td>
							<td>2023-07-26</td>
							<td>Jane Smith</td>
							<td>IMPS</td>
							<td>11:45 AM</td>
							<td>DEF456</td>
							<td>Sample Activity 2</td>
							<td>CRM789</td>
							<td>document.docx</td>
							<td>Medium</td>
							<td>In Progress</td>
							<td>Samuel</td>
							<td>Rohit</td>
							<td>
								<Link to="#" className="text-blue-600 mr-2">
									Delete
								</Link>
								<Link to="#" className="text-blue-600">
									Archive
								</Link>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>2023-07-27</td>
							<td>Mike Johnson</td>
							<td>Retails Asset</td>
							<td>03:15 PM</td>
							<td>GHI789</td>
							<td>Sample Activity 3</td>
							<td>CRM123</td>
							<td></td>
							<td>High</td>
							<td>Pending</td>
							<td>Rana</td>
							<td>Rana</td>
							<td>
								<Link to="#" className="text-blue-600 mr-2">
									Delete
								</Link>
								<Link to="#" className="text-blue-600">
									Archive
								</Link>
							</td>
						</tr>
						<tr>
							<td>4</td>
							<td>2023-07-28</td>
							<td>Sarah Lee</td>
							<td>OGL</td>
							<td>10:00 AM</td>
							<td>JKL101</td>
							<td>Sample Activity 4</td>
							<td>CRM234</td>
							<td>image.jpg</td>
							<td>Low</td>
							<td>Hold</td>
							<td>John Doe</td>
							<td>Rana</td>
							<td>
								<Link to="#" className="text-blue-600 mr-2">
									Delete
								</Link>
								<Link to="#" className="text-blue-600">
									Archive
								</Link>
							</td>
						</tr>
						<tr>
							<td>5</td>
							<td>2023-07-29</td>
							<td>Michael Smith</td>
							<td>FCR Projects</td>
							<td>01:30 PM</td>
							<td>MNO567</td>
							<td>Sample Activity 5</td>
							<td>CRM567</td>
							<td>spreadsheet.xlsx</td>
							<td>High</td>
							<td>Completed with Issue</td>
							<td>Jane Smith</td>
							<td>John Doe</td>
							<td>
								<Link to="#" className="text-blue-600 mr-2">
									Delete
								</Link>
								<Link to="#" className="text-blue-600">
									Archive
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Footerrr />
		</>
	)
}
