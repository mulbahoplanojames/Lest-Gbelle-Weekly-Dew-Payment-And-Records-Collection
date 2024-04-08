import HERO_TEXT from "../../Constant/Constant";
import Button from "../../Interfaces/Button/Button";

const Hero = () => {
	return (
		<>
			<div className='mt-36 pb-1'>
				<h1 className='text-lg opacity-60 uppercase text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-blue-500 to-teal-500 '>
					LestGbelle
				</h1>
				<h1 className='pt-5 md:text-4xl text-3xl capitalize  lg:pr-[40rem] pr-3  '>
					Lest Gbelle Weekly dew Payment and records Collection
				</h1>
				<p className='lg:pr-[40rem] pr-2 lg:pt-6 pt-3 pb-6'>{HERO_TEXT}</p>
				<a href=''>
					<Button text={"Be a Member"} />
				</a>
			</div>
		</>
	);
};

export default Hero;
