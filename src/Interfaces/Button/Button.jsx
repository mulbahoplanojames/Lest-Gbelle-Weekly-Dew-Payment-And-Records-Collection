import { motion } from "framer-motion";

const Button = ({ text }) => {
	const handleClick = () => {
		window.scrollTo({ top: 0, left: 0 });
	};

	return (
		<>
			<motion.button
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -80 }}
				transition={{ duration: 2 }}
				className='py-2 px-5 bg-blue-500 text-white text-lg rounded-lg hover:bg-opacity-75'
				onClick={handleClick}
			>
				{text}
			</motion.button>
		</>
	);
};

export default Button;
