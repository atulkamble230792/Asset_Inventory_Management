import React from 'react'
import { Pie, Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import Emp360 from '../HeaderFooter/EMP360Nav'
import Footerrr from '../HeaderFooter/footer'

const Emp360Dashboard = () => {
	// Random data for pie chart (departments and employee count)
	const pieChartData = {
		labels: ['HR', 'Finance', 'IT'],
		datasets: [
			{
				data: [12, 8, 20],
				backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
				hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
			},
		],
	}

	// Random data for bar chart (overall employee count)
	const barChartData = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Overall Employee Count',
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(75,192,192,0.6)',
				hoverBorderColor: 'rgba(75,192,192,1)',
				data: [65, 59, 80, 81, 56, 55, 40],
			},
		],
	}

	// Random data for additional chart (employees designations)
	const additionalChartData = {
		labels: [
			'Manager',
			'Engineer',
			'Analyst',
			'Administrator',
			'Developer',
			'Designer',
			'Support',
		],
		datasets: [
			{
				label: 'Employees by Designation',
				backgroundColor: 'rgba(255,99,132,0.4)',
				borderColor: 'rgba(255,99,132,1)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(255,99,132,0.6)',
				hoverBorderColor: 'rgba(255,99,132,1)',
				data: [15, 30, 10, 8, 20, 12, 25],
			},
		],
	}

	return (
		<>
			<Emp360 />

			<div className="pt-6">
				<h1 className="mx-4 text-2xl font-bold">
					<span>Employee Dashboard</span>
				</h1>
			</div>
			<div className="red-line w-full h-1 bg-red-400 mt-1"></div>

			<div className="p-6 pb-96 border-1 rounded-lg border-red-300 w-11/12">
				<div className="grid gap-6 grid-cols-2">
					{/* Pie Chart */}
					<div className="p-4 h-[26rem] bg-gray-100 rounded-lg border border-gray-300">
						<div className="flex h-[22rem]">
							<h2 className="text-lg font-semibold mb-4 ">
								Department Distribution
							</h2>

							<Pie
								data={pieChartData}
								options={{ type: 'pie' }}
								className=" "
							/>
						</div>
					</div>

					{/* Bar Chart */}
					<div className="p-4 h-[26rem] bg-gray-100 rounded-lg border border-gray-300">
						<div className="flex h-[20rem] flex-col">
							<h2 className="text-lg font-semibold mb-4">
								Overall Employee Count
							</h2>
							<Bar
								data={barChartData}
								options={{ type: 'bar' }}
								className="h-full"
							/>
						</div>
					</div>

					{/* Additional Chart */}
					<div className="p-4  bg-gray-100 rounded-lg border border-gray-300 col-span-1  h-[26rem] ">
						<div className="flex h-[20rem] flex-col">
							<h2 className="text-lg font-semibold mb-4 ">
								Employees by Designation
							</h2>
							<Bar
								data={additionalChartData}
								// className="shrink-0  pl-96 w-36"
								// className="flex-initial w-64"
								options={{ type: 'bar' }}
							/>
						</div>
					</div>
				</div>
			</div>

			<Footerrr />
		</>
	)
}

export default Emp360Dashboard
