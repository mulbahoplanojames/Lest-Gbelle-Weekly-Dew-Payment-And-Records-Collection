import Table from "../Components/Table/Table";
import Hero from "../Components/Hero/Hero";
import Button from "../Interfaces/Button/Button";
import { Link } from "react-router-dom";
import { MEMBERS_INFO_JANUARY } from "../Data/MemberInfo";

const Home = () => {
	return (
		<>
			<div className='container mx-auto md:px-14 px-2'>
				<Hero />
				<Table text={"January data"} month={MEMBERS_INFO_JANUARY} />

				<Link to='/moredata'>
					<Button text={"view more data"} />
				</Link>
			</div>
		</>
	);
};

export default Home;
