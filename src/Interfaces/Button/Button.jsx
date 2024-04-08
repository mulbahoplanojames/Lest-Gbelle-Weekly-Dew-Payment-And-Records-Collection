const Button = ({ text }) => {
	return (
		<>
			<button className='py-2 px-5 bg-blue-500 text-white text-lg rounded-lg hover:bg-opacity-75'>
				{text}
			</button>
		</>
	);
};

export default Button;
