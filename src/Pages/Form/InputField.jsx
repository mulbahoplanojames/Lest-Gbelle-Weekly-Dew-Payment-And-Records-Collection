const InputField = ({ label, text, name, placehoder }) => {
	return (
		<>
			<div className='mb-6'>
				<label htmlFor='name' className='text-xl pb-1 opacity-90 inline-block'>
					{label}
				</label>
				<input
					type={text}
					name={name}
					placeholder={placehoder}
					required
					className='w-full bg-2 h-11 px-3 outline-none border-none rounded-sm focus:ring-inset focus:ring-2 bg-slate-100'
				/>
			</div>
		</>
	);
};

export default InputField;
