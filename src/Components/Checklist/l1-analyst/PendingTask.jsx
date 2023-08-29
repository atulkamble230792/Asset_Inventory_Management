import Nav from '../../HeaderFooter/Nav'
import '../../../styles.css'
import Footerrr from '../../HeaderFooter/footer'
import React from 'react'

export default function PendingTask() {
	return (
		<>
			<Nav />

			<div className="flex justify-center items-center">
				<h1 className="text-center mx-4 text-2xl font-bold">
					<span>Pending Task List</span>
				</h1>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>

			<div class="p-8 flex justify-center items-center w-full">
				<table class="table w-auto mx-auto">
					<thead>
						<tr>
							<th className="text-center w-8">Sr.no</th>
							<th className="text-center">Estimated Start Time</th>
							<th className="text-center">Activity</th>
							<th className="text-center">Action</th>
							<th className="text-center">Assign To</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>2023-07-21 10:00 AM</td>
							<td>Create a new React app</td>
							<td>Create</td>
							<td>John Doe</td>
						</tr>
						<tr>
							<td>2</td>
							<td>2023-07-21 11:00 AM</td>
							<td>Install React and ReactDOM</td>
							<td>Install</td>
							<td>Jane Doe</td>
						</tr>
						<tr>
							<td>3</td>
							<td>2023-07-21 12:00 PM</td>
							<td>Create a new React component</td>
							<td>Create</td>
							<td>John Smith</td>
						</tr>
						<tr>
							<td>4</td>
							<td>2023-07-21 1:00 PM</td>
							<td>Add some styles to the React component</td>
							<td>Add</td>
							<td>Jane Doe</td>
						</tr>
						<tr>
							<td>5</td>
							<td>2023-07-21 2:00 PM</td>
							<td>Test the React app</td>
							<td>Test</td>
							<td>John Doe</td>
						</tr>
						<tr>
							<td>6</td>
							<td>2023-07-21 3:00 PM</td>
							<td>Deploy the React app to production</td>
							<td>Deploy</td>
							<td>Jane Doe</td>
						</tr>
						<tr>
							<td>7</td>
							<td>2023-07-22 10:00 AM</td>
							<td>Create a new marketing campaign</td>
							<td>Create</td>
							<td>John Smith</td>
						</tr>
						<tr>
							<td>8</td>
							<td>2023-07-22 11:00 AM</td>
							<td>Run a social media ad campaign</td>
							<td>Run</td>
							<td>Jane Doe</td>
						</tr>
						<tr>
							<td>9</td>
							<td>2023-07-22 12:00 PM</td>
							<td>Analyze the results of the marketing campaign</td>
							<td>Analyze</td>
							<td>John Doe</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Footerrr />
		</>
	)
}
