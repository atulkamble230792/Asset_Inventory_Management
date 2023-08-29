import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EmployeeDetails = () => {
	const [details, setDetails] = useState([])

	const fetchDetails = async () => {
		const { data } = await axios.get(
			'https://apex.oracle.com/pls/apex/learn_apex_1/emp/'
		)
		const details = data.items
		setDetails(details)
		console.log(details)
	}

	useEffect(() => {
		fetchDetails()
	}, [])

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Emp No</th>
					<th>Emp Name</th>
					<th>Job</th>
					<th>MGR</th>
					<th>Hire Date</th>
					<th>Sal</th>
					<th>Comm</th>
					<th>Department No</th>
				</tr>
			</thead>
			<tbody>
				{details.map((employee) => (
					<tr key={employee}>
						<td>{employee.empno}</td>
						<td>{employee.ename}</td>
						<td>{employee.job}</td>
						<td>{employee.mgr}</td>
						<td>{employee.hiredate}</td>
						<td>{employee.sal}</td>
						<td>{employee.comm}</td>
						<td>{employee.deptno}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default EmployeeDetails
