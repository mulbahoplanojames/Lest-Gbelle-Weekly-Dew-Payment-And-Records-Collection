import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
	return (
		<>
			<nav className='flex justify-between items-center md:px-16 px-4 py-4 shadow-lg fixed w-full top-0 z-20 bg-white'>
				<h1 className='text-xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-blue-500 to-teal-500 '>
					LestGbelle
				</h1>
				<div className='flex md:gap-10 gap-5'>
					<FaWhatsapp className='text-2xl cursor-pointer hover:text-green-500' />
					<FaFacebookSquare className='text-2xl cursor-pointer hover:text-blue-500' />
					<FaInstagram className='text-2xl cursor-pointer hover:text-blue-500' />
					<FaSquareXTwitter className='text-2xl cursor-pointer' />
				</div>
			</nav>
		</>
	);
};

export default Navbar;
