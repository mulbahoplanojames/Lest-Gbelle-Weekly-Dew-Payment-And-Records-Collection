import Table from "../Components/Table/Table";
import Hero from "../Components/Hero/Hero";
import Button from "../Interfaces/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className='container mx-auto md:px-14 px-2'>
				<Hero />
				<Table text={"January data"} />

				<Link to='/moredata'>
					<Button text={"view more data"} />
				</Link>
			</div>
		</>
	);
};

export default Home;
