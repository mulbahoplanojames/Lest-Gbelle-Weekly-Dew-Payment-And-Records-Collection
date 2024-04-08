import Hero from "./Components/Hero/Hero";
import Table from "./Components/Table/Table";
import Navbar from "./Layouts/Navbar/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<div className='container mx-auto md:px-14 px-2'>
				<Hero />
				<Table />
			</div>
		</>
	);
};

export default App;
