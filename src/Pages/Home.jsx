import Table from "../Components/Table/Table";
import Hero from "../Components/Hero/Hero";

const Home = () => {
	return (
		<>
			<div className='container mx-auto md:px-14 px-2'>
				<Hero />
				<Table />
			</div>
		</>
	);
};

export default Home;
