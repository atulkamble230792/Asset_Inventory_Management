import Footerrr from '../HeaderFooter/footer'
import EmpNAV from '../HeaderFooter/EmpNAV'
import React from 'react'

export default function Availibility() {
	const FCR = [
		{ name: 'John Ceea', isActive: true, number: +911234567890 },
		{ name: 'Jane Doe', isActive: false, number: +919876543210 },
		{ name: 'Michael Smith', isActive: true, number: +911234567890 },
	]
	const RA = [
		{ name: 'John Ceea', isActive: true, number: +911234567890 },
		{ name: 'Jane Doe', isActive: false, number: +919876543210 },
		{ name: 'Michael Smith', isActive: false, number: +919876543210 },
	]
	const dataS = [
		{ name: 'John Ceea', isActive: true, number: +911234567890 },
		{ name: 'Jane Doe', isActive: false, number: +919876543210 },
		{ name: 'Michael Smith', isActive: false, number: +919876543210 },
	]
	const Automations = [
		{ name: 'Sandesh Rawat', isActive: true, number: +911234567890 },
		{ name: 'Rajan Sawant', isActive: true, number: +911234567890 },
		{ name: 'Devidas Raut', isActive: false, number: +919876543210 },
		{ name: 'Vishal Sundar', isActive: false, number: +919876543210 },
		{ name: 'Vikram Sharma', isActive: true, number: +911234567890 },
		{ name: 'Omkar Mali', isActive: false, number: +919876543210 },
	]

	return (
		<>
			<EmpNAV />
			{/* Naming Start here */}
			<div className="flex justify-center items-center pt-6">
				<h1 className="text-center mx-4 text-2xl font-bold">
					<span>Availibility Portal</span>
				</h1>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>
			{/* Naming ends here */}

			{/* Filter Function  */}

			<div className="p-4">
				<div className="p-4 border-2 border-slate-500 rounded-lg  shadow flex flex-wrap justify-between">
					<span className="text-lg font-bold">
						{' '}
						<i class="fa fa-filter" aria-hidden="true"></i> Filter
					</span>
					<form className="flex ml-3">
						<div className="flex  w-36">
							<label
								htmlFor="tower"
								className="text-sm p-2 font-medium text-grey-700"
							>
								Tower
							</label>
							<div className="border-2 p-2 border-grey-200 rounded-lg shadow">
								<select
									id="tower"
									name="tower"
									className=" ml-2 "
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
						</div>
					</form>

					<div className="flex items-center">
						<span>
							<i class="fa fa-search" aria-hidden="true"></i>
						</span>
						<input
							type="text"
							placeholder="Search"
							className="input ml-1 input-bordered w-full h-10"
						/>
					</div>
				</div>
			</div>
			{/* Hero page */}
			<UserList title="FCR" users={FCR} />
			<UserList title="Retail Asset" users={RA} />
			<UserList title="Automations" users={Automations} />
			<UserList title="Data Support" users={dataS} />

			<Footerrr />
		</>
	)
}

const UserList = ({ title, users }) => {
	return (
		<div className="p-2 ml-8 mr-12">
			<div className="shadow-lg bg-grey-200 p-2 rounded-lg flex flex-col  border-2 border-grey-400 ">
				<h1 className="text-l font-semibold ml-1">{title}</h1>
				<div className="flex flex-wrap">
					{users.map((user, index) => (
						<div
							key={index}
							className={`ml-2 shadow bg-gray-200 p-2 rounded-lg w-40 ${
								user.isActive ? 'text-green-600' : ''
							}`}
						>
							<i className="fa fa-user" aria-hidden="true"></i>{' '}
							<span className="text-sm">{user.name}</span>
							<br />
							<i class="fa fa-phone" aria-hidden="true"></i>
							<span className="text-xs ml-2">
								<a
									href={`tel:${user.number}`}
									className="text-blue-500 text-xs underline"
								>
									{user.number}
								</a>
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
