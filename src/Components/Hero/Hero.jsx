import { Link } from "react-router-dom";
import HERO_TEXT from "../../Constant/Constant";
import Button from "../../Interfaces/Button/Button";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<>
			<div className='mt-36 pb-1'>
				<motion.h1
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: -50 }}
					transition={{ duration: 0.6 }}
					className='text-lg opacity-60 uppercase text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-blue-500 to-teal-500 '
				>
					LestGbelle
				</motion.h1>
				<motion.h1
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -70 }}
					transition={{ duration: 1.5 }}
					className='pt-5 md:text-4xl text-3xl capitalize  lg:pr-[40rem] pr-3  '
				>
					Lest Gbelle Weekly due Payment and records Collection
				</motion.h1>
				<motion.p
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -70 }}
					transition={{ duration: 2.5 }}
					className='lg:pr-[40rem] pr-2 lg:pt-6 pt-3 pb-6'
				>
					{HERO_TEXT}
				</motion.p>
				<Link to='/form'>
					<Button text={"Be a Member"} />
				</Link>
			</div>
		</>
	);
};

export default Hero;
