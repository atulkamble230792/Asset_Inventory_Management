import AssetNav from '../HeaderFooter/AssetNav.jsx'
import Footerrr from '../HeaderFooter/footer.jsx'
// import TableComponent from './testSample.jsx'
import '../../styles.css'

export default function AssetInventory() {
	return (
		<>
			<AssetNav />
			{/* <Example /> */}
			<div className="flex justify-center items-center pt-6">
				<h1 className="text-center mx-4 text-2xl font-bold">Asset Inventory</h1>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>

			<div class="p-8">
				<table class="table">
					<thead>
						<tr>
							<th>Employee Name</th>
							<th>Employee ID</th>
							<th>Department</th>
							<th>Item Name</th>
							<th>Item Type</th>
							<th>Serial Number</th>
							<th>Quantity</th>
							<th>Location</th>
							<th>Condition</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>John Doe</td>
							<td>123456</td>
							<td>Sales</td>
							<td>Laptop</td>
							<td>Computer</td>
							<td>123456789</td>
							<td>1</td>
							<td>Office</td>
							<td>Good</td>
						</tr>
						<tr>
							<td>Jane Doe</td>
							<td>654321</td>
							<td>Marketing</td>
							<td>Phone</td>
							<td>Electronics</td>
							<td>987654321</td>
							<td>2</td>
							<td>Desk</td>
							<td>New</td>
						</tr>
						<tr>
							<td>Mike Smith</td>
							<td>987654</td>
							<td>Development</td>
							<td>Monitor</td>
							<td>Computer</td>
							<td>543216789</td>
							<td>3</td>
							<td>Warehouse</td>
							<td>Used</td>
						</tr>
						<tr>
							<td>Sarah Jones</td>
							<td>876543</td>
							<td>Accounting</td>
							<td>Chair</td>
							<td>Furniture</td>
							<td>432165789</td>
							<td>4</td>
							<td>Conference Room</td>
							<td>Excellent</td>
						</tr>
						<tr>
							<td>Peter Brown</td>
							<td>765432</td>
							<td>Human Resources</td>
							<td>Pencil</td>
							<td>Office Supplies</td>
							<td>654321879</td>
							<td>5</td>
							<td>Desk</td>
							<td>New</td>
						</tr>
						<tr>
							<td>Samantha Smith</td>
							<td>123456</td>
							<td>Sales</td>
							<td>Printer</td>
							<td>Office Supplies</td>
							<td>123456789</td>
							<td>1</td>
							<td>Desk</td>
							<td>Good</td>
						</tr>
						<tr>
							<td>Michael Jones</td>
							<td>654321</td>
							<td>Marketing</td>
							<td>Scanner</td>
							<td>Office Supplies</td>
							<td>987654321</td>
							<td>2</td>
							<td>Office</td>
							<td>New</td>
						</tr>
						<tr>
							<td>Sarah Brown</td>
							<td>987654</td>
							<td>Development</td>
							<td>Filing Cabinet</td>
							<td>Furniture</td>
							<td>543216789</td>
							<td>3</td>
							<td>Warehouse</td>
							<td>Excellent</td>
						</tr>
						<tr>
							<td>Peter Green</td>
							<td>876543</td>
							<td>Accounting</td>
							<td>Chair</td>
							<td>Furniture</td>
							<td>432165789</td>
							<td>4</td>
							<td>Conference Room</td>
							<td>Good</td>
						</tr>
						<tr>
							<td>Doe</td>
							<td>765432</td>
							<td>Human Resources</td>
							<td>Pencil</td>
							<td>Office Supplies</td>
							<td>654321879</td>
							<td>5</td>
							<td>Desk</td>
							<td>New</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Footerrr />
		</>
	)
}
