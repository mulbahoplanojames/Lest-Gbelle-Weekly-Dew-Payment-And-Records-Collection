import CheckBoxPaid from "../Check Box/CheckBoxPaid";
import MEMBERS_INFO from "../../Data/MemberInfo";
import Name_Avatar from "../Name&Avatar/Name_Avatar";

const Table = ({ text }) => {
	return (
		<>
			<div className='mb-8 mt-24'>
				<h1 className='pb-5 text-xl font-bold'>{text}</h1>
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
							{MEMBERS_INFO.map((info) => (
								<tr key={info.id}>
									<td>
										<Name_Avatar name={info.name} avatar={info.avatar} />
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
							))}
							{/* row 1 */}
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
			</div>
		</>
	);
};

export default Table;
