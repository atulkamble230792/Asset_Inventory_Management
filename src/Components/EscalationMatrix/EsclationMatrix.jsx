import Footerrr from '../HeaderFooter/footer'
// import TableComponent from './testSample.jsx'
import '../../styles.css'
import React from 'react'
import EscalationNav from '../HeaderFooter/EscalationNav'

export default function EscalationMatrix() {
	return (
		<div className=" ">
			<EscalationNav />
			{/* <Example /> */}
			<div className=" pl-4 pt-2">
				<div className="line w-1/2 "></div>
				<h1 className=" text-2xl font-bold">EM Branch</h1>
				<div className="line w-1/2 "></div>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>

			<div class="p-8">
				<table class="table">
					<thead>
						<tr>
							<th>Level</th>
							<th>Name</th>
							<th>Issue</th>
							<th>Designation</th>
							<th>Contact Information</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Branch Manager</td>
							<td>Customer complaint</td>
							<td>Branch Manager</td>
							<td>Phone: 123-456-7890</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Regional Manager</td>
							<td>Account fraud</td>
							<td>Regional Manager</td>
							<td>Phone: 987-654-3210</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Head of Operations</td>
							<td>System outage</td>
							<td>Head of Operations</td>
							<td>Phone: 543-216-7890</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Chief Financial Officer</td>
							<td>Regulatory compliance issue</td>
							<td>Chief Financial Officer</td>
							<td>Phone: 432-165-7890</td>
						</tr>
						<tr>
							<td>5</td>
							<td>CEO</td>
							<td>Financial loss</td>
							<td>CEO</td>
							<td>Phone: 321-654-7890</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className=" pl-4 pt-2">
				<div className="line w-1/2 "></div>
				<h1 className=" text-2xl font-bold">EM Operations</h1>
				<div className="line w-1/2 "></div>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>

			<div class="p-8">
				<table class="table">
					<thead>
						<tr>
							<th>Level</th>
							<th>Name</th>
							<th>Issue</th>
							<th>Designation</th>
							<th>Contact Information</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Level 1</td>
							<td>John Doe</td>
							<td>Payment error</td>
							<td>Customer Support Executive</td>
							<td>123-456-7890</td>
						</tr>
						<tr>
							<td>Level 2</td>
							<td>Jane Smith</td>
							<td>Transaction discrepancy</td>
							<td>Team Lead</td>
							<td>987-654-3210</td>
						</tr>
						<tr>
							<td>Level 3</td>
							<td>Mike Johnson</td>
							<td>Account security issue</td>
							<td>Manager</td>
							<td>456-789-1230</td>
						</tr>
						<tr>
							<td>Level 4</td>
							<td>Sarah Davis</td>
							<td>Fraudulent activity</td>
							<td>Assistant Vice President</td>
							<td>789-123-4560</td>
						</tr>
						<tr>
							<td>Level 5</td>
							<td>David Wilson</td>
							<td>System outage</td>
							<td>Vice President</td>
							<td>321-654-9870</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className=" pl-4 pt-2">
				<div className="line w-1/2 "></div>
				<h1 className=" text-2xl font-bold">EM Customer Support</h1>
				<div className="line w-1/2 "></div>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>

			<div class="p-8">
				<table class="table">
					<thead>
						<tr>
							<th>Level</th>
							<th>Name</th>
							<th>Issue</th>
							<th>Designation</th>
							<th>Contact Information</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>John Doe</td>
							<td>Account balance is incorrect</td>
							<td>Customer Service Representative</td>
							<td>123-456-7890</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jane Smith</td>
							<td>Credit card is lost or stolen</td>
							<td>Customer Service Supervisor</td>
							<td>555-666-7777</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Mike Johnson</td>
							<td>Fraudulent activity on bank account</td>
							<td>Fraud Department Manager</td>
							<td>987-654-3210</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Sarah Lee</td>
							<td>Banking products or services are not working properly</td>
							<td>Chief Customer Officer</td>
							<td>321-098-7654</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Rana</td>
							<td>Other issues</td>
							<td>CEO</td>
							<td>765-432-1098</td>
						</tr>
					</tbody>
				</table>
			</div>

			<Footerrr />
		</div>
	)
}
