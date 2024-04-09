import { motion } from "framer-motion";

const Accordion = ({ question, answer }) => {
	return (
		<>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 30 }}
				transition={{ duration: 1 }}
				className='collapse collapse-arrow join-item border border-base-300'
			>
				<input type='radio' name='my-accordion-4' defaultChecked />
				<div className='collapse-title text-xl font-medium opacity-80'>
					{question}
				</div>
				<div className='collapse-content'>
					<h2>{answer}</h2>
				</div>
			</motion.div>
		</>
	);
};

export default Accordion;
