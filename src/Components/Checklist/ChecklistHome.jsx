import React from 'react'
import { Pie, Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import Nav from '../HeaderFooter/Nav'
import '../../styles.css'
import Footerrr from '../HeaderFooter/footer'

export default function ChecklistHome() {
	const data = {
		labels: ['Completed', 'In Progress', 'Pending'],
		datasets: [
			{
				data: [12, 5, 8], // Replace these values with your actual task counts
				backgroundColor: ['#9CCC65', '#FFB300', '#0082FF'],
				hoverBackgroundColor: ['#9CCC65', '#FFB300', '#0082FF'],
			},
		],
	}

	const dataBar = {
		labels: [
			'FCR',
			'FCC',
			'UPI',
			'IMPS',
			'NACH',
			'OGL',
			'Retails Asset',
			'Ycolors',
		],
		datasets: [
			{
				label: 'Completed',
				backgroundColor: '#9CCC65',
				borderColor: '#9CCC65',
				borderWidth: 1,
				data: [5, 8, 3, 6, 9, 2, 7, 4], // Replace these values with your actual task counts
			},
			{
				label: 'In Progress',
				backgroundColor: '#FFB300',
				borderColor: '#FFB300',
				borderWidth: 1,
				data: [2, 4, 6, 3, 5, 7, 1, 8], // Replace these values with your actual task counts
			},
			{
				label: 'Pending',
				backgroundColor: '#0082FF',
				borderColor: '#0082FF',
				borderWidth: 1,
				data: [4, 1, 2, 5, 3, 8, 6, 9], // Replace these values with your actual task counts
			},
		],
	}
	return (
		<div className="">
			<Nav />
			<div className="flex justify-center items-center pt-6">
				<div className="line w-1/2 "></div>
				<h1 className="text-center mx-4 text-2xl font-bold">
					<span>Dashboard</span>
				</h1>
				<div className="line w-1/2 "></div>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>

			{/* KPI Cards */}
			<div className="pb-11">
				<div className="flex flex-col md:flex-row justify-center mt-4 ">
					<div className="md:w-11/12 ">
						<div className="flex md:flex-row space-x-8 items-center justify-center">
							<div className="shadow-md p-4 border-2 rounded-xl border-gray-400 ">
								{' '}
								{/* Card Element start from above */}
								<div className="">
									<div className="flex flex-col">
										<div className="flex space-x-8 w-56">
											<div className="">
												<div className="uppercase text-sm text-gray-800 font-bold">
													Completed
												</div>
												<div className="mt-1">
													<div className="flex space-x-2 items-center">
														<div className="text-2xl">35</div>
														<div className="text-xs text-green-800 bg-green-200 rounded-md p-1">
															+4.5%
														</div>
													</div>
												</div>
											</div>
											<div className="">
												<i
													class="fa-solid fa-users text-5xl mt-4 text-green-200"
													// className="h-16 w-20 text-gray-300"
												></i>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="shadow-md p-4 border-2 rounded-xl border-gray-400">
								{' '}
								{/* card element */}
								<div className="">
									<div className="flex flex-col">
										<div className="flex space-x-8 w-56">
											<div className="">
												<div className="uppercase text-sm text-gray-800 font-bold">
													Pending
												</div>
												<div className="mt-1">
													<div className="flex space-x-2 items-center">
														<div className="text-2xl">145</div>
														<div className="text-xs text-blue-500 bg-blue-200 rounded-md p-1">
															+41.5%
														</div>
													</div>
												</div>
											</div>
											<div className="">
												<i
													class="fa-solid fa-ellipsis text-5xl mt-4 text-blue-500"
													// className="h-16 w-20 text-gray-300"
												></i>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="shadow-md p-4 border-2 rounded-xl border-gray-400">
								{' '}
								{/* card element */}
								<div className="">
									<div className="flex flex-col">
										<div className="flex space-x-8 w-56">
											<div className="">
												<div className="uppercase text-sm text-gray-800 font-bold">
													In Progress
												</div>
												<div className="mt-1">
													<div className="flex space-x-2 items-center">
														<div className="text-2xl">78</div>
														<div className="text-xs text-yellow-800 bg-yellow-200 rounded-md p-1">
															+29.5%
														</div>
													</div>
												</div>
											</div>
											<div className="">
												<i
													class="fa-solid fa-list-check text-5xl mt-4 text-yellow-300"
													// className="h-16 w-20 text-gray-300"
												></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-between p-5">
					<div className=" bg-white border border-gray-400 rounded-lg shadow-md p-4 w-4/12 ml-10">
						<h2 className="text-2xl font-semibold mb-4">Task Status</h2>
						<Pie data={data} />
					</div>
					<div className=" bg-white border border-gray-400 rounded-lg shadow-md p-4 w-7/12 mr-10">
						<h2 className="text-2xl font-semibold mb-4">
							Application-wise Task Status
						</h2>
						<Bar
							data={dataBar}
							options={{
								scales: {
									y: {
										beginAtZero: true,
									},
								},
							}}
						/>
					</div>
				</div>
			</div>
			<Footerrr />
		</div>
	)
}
