const TextArea = ({ label, name, placeholder }) => {
	return (
		<>
			<div className='mb-6'>
				<label
					htmlFor='message'
					className='text-xl pb-1 opacity-90 inline-block'
				>
					{label}
				</label>
				<textarea
					name={name}
					required
					placeholder={placeholder}
					className='w-full resize-none bg-2 h-24 outline-none px-3 py-2 focus:ring-inset  focus:ring-2 bg-slate-100'
				></textarea>
			</div>
		</>
	);
};

export default TextArea;
