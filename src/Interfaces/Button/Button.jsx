const Button = ({ text }) => {
	const handleClick = () => {
		window.scrollTo({ top: 0, left: 0 });
	};

	return (
		<>
			<button
				className='py-2 px-5 bg-blue-500 text-white text-lg rounded-lg hover:bg-opacity-75'
				onClick={handleClick}
			>
				{text}
			</button>
		</>
	);
};

export default Button;
