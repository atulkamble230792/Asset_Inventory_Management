import React, { useState } from 'react'
import AssetNav from '../HeaderFooter/AssetNav'
import Footerrr from '../HeaderFooter/footer'

const InventoryForm = () => {
	const [showPopup, setShowPopup] = useState(false)
	const [showTable, setShowTable] = useState(false)

	const handleSubmit = (e) => {
		setShowPopup(true)
		e.preventDefault()
		setTimeout(() => setShowPopup(false), 3000) // Hide the popup after 3 seconds
		handleFormSubmit()
	}

	const handleFormSubmit = () => {
		setShowTable(true)
	}

	return (
		<>
			<AssetNav />
			<div className=" pl-4 pt-2">
				<div className="line w-1/2 "></div>
				<h1 className=" text-2xl font-bold">Asset Inventory form</h1>
				<div className="line w-1/2 "></div>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>

			<div className="flex h-full justify-center items-center">
				<div className="w-1/2 p-6">
					<div className="p-2 py-6 bg-slate-200 text-gray-900 rounded-lg border-slate-400 border-2">
						<h1 className=" text-2xl font-bold">Asset Inventory form</h1>
						<form onSubmit={handleSubmit}>
							<div className="grid gap-6 mb-6 md:grid-cols-2">
								<div>
									<label for="empName" className="label">
										Employee Name
									</label>
									<input
										type="text"
										id="empName"
										className="input w-full"
										placeholder="John"
										required
									/>
								</div>
								<div>
									<label for="empID" className="label">
										Employee ID
									</label>
									<input
										type="text"
										id="empID"
										className="input w-full"
										placeholder="134"
										required
									/>
								</div>
								<div>
									<label for="Department" className="label">
										Department
									</label>
									<input
										type="text"
										id="Department"
										className="input w-full"
										placeholder="Flowbite"
										required
									/>
								</div>
								<div>
									<label for="item_Name" className="label">
										Item Name
									</label>
									<input
										type="text"
										id="item_Name"
										className="input w-full"
										placeholder="Flowbite"
									/>
								</div>
								<div>
									<label for="itemType" className="label">
										Item Type
									</label>
									<input
										type="text"
										id="itemType"
										className="input w-full"
										placeholder="Flowbite"
									/>
								</div>
								<div>
									<label for="SerialNumber	" className="label">
										Serial Number
									</label>
									<input
										type="number"
										id="SerialNumber	"
										className="input w-full"
										placeholder="134564"
									/>
								</div>
								<div>
									<label for="Quantity" className="label">
										Quantity
									</label>
									<input
										type="number"
										id="Quantity"
										className="input w-full"
										placeholder="134564"
									/>
								</div>
								<div>
									<label for="location" className="label">
										Location
									</label>
									<input
										type="text"
										id="location"
										className="input w-full"
										placeholder="Flowbite"
									/>
								</div>
								<div>
									<label for="condition" className="label">
										condition
									</label>
									<input
										type="text"
										id="condition"
										className="input w-full"
										placeholder="Flowbite"
										require
									/>
								</div>
							</div>
							<button type="submit" className="button">
								Submit
							</button>
						</form>
					</div>
				</div>
				<div className="w-1/2 p-6">
					{/* Table to display records */}
					{showTable ? (
						<table className="table2">
							<thead className="table2Th">
								<tr>
									<th className="table2ThTr bg-[#03203c] text-white">
										Employee Name
									</th>
									<th className="table2ThTr  bg-[#03203c] text-white">
										Employee ID
									</th>
									<th className="table2ThTr  bg-[#03203c] text-white">
										Department
									</th>
									<th className="table2ThTr  bg-[#03203c] text-white">
										Item Name
									</th>
									<th className="table2ThTr  bg-[#03203c] text-white">
										Item Type
									</th>
									<th className="table2ThTr  bg-[#03203c] text-white">
										Serial Number
									</th>
									<th className="table2ThTr  bg-[#03203c] text-white">
										Quantity
									</th>
									<th className="table2ThTr  bg-[#03203c] text-white">
										Location
									</th>
									<th className="table2ThTr  bg-[#03203c] text-white">
										Condition
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="table2ThTr">John Doe</td>
									<td className="table2ThTr">123456</td>
									<td className="table2ThTr">Sales</td>
									<td className="table2ThTr">Laptop</td>
									<td className="table2ThTr">Computer</td>
									<td className="table2ThTr">ABC123</td>
									<td className="table2ThTr">1</td>
									<td className="table2ThTr">Office</td>
									<td className="table2ThTr">Good</td>
								</tr>
								<tr>
									<td className="table2ThTr">Ricky Edison</td>
									<td className="table2ThTr">456789</td>
									<td className="table2ThTr">Marketing</td>
									<td className="table2ThTr">Phone</td>
									<td className="table2ThTr">Electronics</td>
									<td className="table2ThTr">XYZ456</td>
									<td className="table2ThTr">2</td>
									<td className="table2ThTr">Desk</td>
									<td className="table2ThTr">New</td>
								</tr>
							</tbody>
						</table>
					) : (
						<div></div>
					)}
				</div>
				{/* Popup message */}
				{showPopup && (
					<div className="fixed inset-0 flex items-center justify-center">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							Records are inserted successfully!
						</div>
					</div>
				)}
			</div>
			<Footerrr />
		</>
	)
}

export default InventoryForm
