import React from "react";

const Accordion = ({ question, answer }) => {
	return (
		<>
			<div className='collapse collapse-arrow join-item border border-base-300'>
				<input type='radio' name='my-accordion-4' defaultChecked />
				<div className='collapse-title text-xl font-medium opacity-80'>
					{question}
				</div>
				<div className='collapse-content'>
					<h2>{answer}</h2>
				</div>
			</div>
		</>
	);
};

export default Accordion;
