import React from "react";
import CheckBoxPaid from "../Check Box/CheckBoxPaid";

const Table = () => {
	return (
		<>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr>
							<th>Name</th>
							<th>Week 1</th>
							<th>Week 2</th>
							<th>Week 3</th>
							<th>Week 4</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<td>
								<div className='flex items-center gap-3'>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src='/tailwind-css-component-profile-2@56w.png'
												alt='Avatar Tailwind CSS Component'
											/>
										</div>
									</div>
									<div>
										<h2 className='font-bold'>Hart Hagerty</h2>
									</div>
								</div>
							</td>
							<td>
								<CheckBoxPaid />
							</td>
							<td>
								<CheckBoxPaid />
							</td>
							<td>
								<CheckBoxPaid />
							</td>
							<td>
								<CheckBoxPaid />
							</td>
						</tr>
						{/* row 2 */}
						<tr>
							<td>
								<div className='flex items-center gap-3'>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src='/tailwind-css-component-profile-2@56w.png'
												alt='Avatar Tailwind CSS Component'
											/>
										</div>
									</div>
									<div>
										<h2 className='font-bold'>Hart Hagerty</h2>
									</div>
								</div>
							</td>
							<td>
								<CheckBoxPaid />
							</td>
							<td>
								<CheckBoxPaid />
							</td>
							<td>
								<CheckBoxPaid />
							</td>
							<td>
								<CheckBoxPaid />
							</td>
						</tr>
						{/* row 3 */}
						<tr>
							<td>
								<div className='flex items-center gap-3'>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src='/tailwind-css-component-profile-2@56w.png'
												alt='Avatar Tailwind CSS Component'
											/>
										</div>
									</div>
									<div>
										<h2 className='font-bold'>Hart Hagerty</h2>
									</div>
								</div>
							</td>
							<td>
								<CheckBoxPaid />
							</td>
							<td>
								<CheckBoxPaid />
							</td>
							<td>
								<CheckBoxPaid />
							</td>
							<td>
								<CheckBoxPaid />
							</td>
						</tr>
						{/* row 4 */}
						<tr>
							<td>
								<div className='flex items-center gap-3'>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src='/tailwind-css-component-profile-2@56w.png'
												alt='Avatar Tailwind CSS Component'
											/>
										</div>
									</div>
									<div>
										<h2 className='font-bold'>Hart Hagerty</h2>
									</div>
								</div>
							</td>
							<td>
								<CheckBoxPaid />
							</td>
							<td>
								<CheckBoxPaid />
							</td>
							<td>
								<CheckBoxPaid />
							</td>
							<td>
								<CheckBoxPaid />
							</td>
						</tr>
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th>Name</th>
							<th>Week 1</th>
							<th>Week 2</th>
							<th>Week 3</th>
							<th>Week 4</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	);
};

export default Table;
