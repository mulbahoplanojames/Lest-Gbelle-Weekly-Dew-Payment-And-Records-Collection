import Name_Avatar from "../Name&Avatar/Name_Avatar";
import { motion } from "framer-motion";

const Table = ({ text, month }) => {
	return (
		<>
			<div className='mb-8 mt-24'>
				<motion.h1
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -50 }}
					transition={{ duration: 1 }}
					className='pb-5 text-xl font-bold'
				>
					{text}
				</motion.h1>
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
							{month.map((info) => (
								<motion.tr
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ opacity: 0, x: -50 }}
									transition={{ duration: 1 }}
									key={info.id}
								>
									<td>
										<Name_Avatar name={info.name} avatar={info.avatar} />
									</td>
									<td>{info.week1}</td>
									<td>{info.week2}</td>
									<td>{info.week3}</td>
									<td>{info.week4}</td>
								</motion.tr>
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
