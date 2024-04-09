import React from "react";

const TextArea = () => {
	return (
		<>
			<div className='mb-6'>
				<label
					htmlFor='message'
					className='text-xl pb-1 opacity-90 inline-block'
				>
					Message*
				</label>
				<textarea
					name='message'
					required
					placeholder='Enter your message'
					className='w-full resize-none bg-2 h-24 outline-none px-3 py-2 focus:ring-inset focus:ring-4 focus:ring-1'
				></textarea>
			</div>
		</>
	);
};

export default TextArea;
