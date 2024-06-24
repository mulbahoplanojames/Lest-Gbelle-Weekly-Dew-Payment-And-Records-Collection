/**
 * This component represents the home page of the LeastGbelle website.
 */
import Table from "../Components/Table/Table";
import Hero from "../Components/Hero/Hero";
import Button from "../Interfaces/Button/Button";
import { Link } from "react-router-dom";
import { MEMBERS_INFO_JANUARY } from "../Data/MemberInfo";
import Faq from "../Components/FAQ/Faq";

/**
 * The Home component for the home page. It uses the Table, Hero, Button, Link and Faq
 * components to display the necessary elements.
 */
const Home = () => {
	return (
		<>
			<div className='container mx-auto md:px-14 px-2'>
				{/* Display the hero section */}
				<Hero />
				{/* Display a table with the data from the month of January */}
				<Table text={"January data"} month={MEMBERS_INFO_JANUARY} />
				{/* Display a button to navigate to the more data page */}
				<Link to='/moredata'>
					<Button text={"view more data"} />
				</Link>
				{/* Display the FAQ section */}
				<Faq />
			</div>
		</>
	);
};

/**
 * Export the Home component so that it can be used in other parts of the application
 */
export default Home;
