import React from "react";

const Accordion = () => {
	return (
		<>
			<div className='collapse collapse-arrow join-item border border-base-300'>
				<input type='radio' name='my-accordion-4' defaultChecked />
				<div className='collapse-title text-xl font-medium'>
					Click to open this one and close others
				</div>
				<div className='collapse-content'>
					<p>hello</p>
				</div>
			</div>
		</>
	);
};

export default Accordion;
