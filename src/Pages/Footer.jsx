import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

const Footer = () => {
	return (
		<>
			<div className='w-4/5 mx-auto py-12 mt-11 md:px-32 px-8 flex md:justify-between justify-center items-center gap-y-12 flex-wrap  border-t border-black'>
				<p className='md:text-2xl text-xl'>
					Copyright &copy; 2024. LestGlelle Association
				</p>
				<div className='flex items-center justify-center gap-x-10'>
					<Link to='/' target='blank'>
						<FaGithub className='text-4xl cursor-pointer' />
					</Link>
					<Link to='/' target='blank'>
						<SiUpwork className='text-4xl cursor-pointer' />
					</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;

// whileInView={{ opacity: 1, y: 0 }}
// initial={{ opacity: 0, y: 30 }}
// transition={{ duration: 0.6 }}
