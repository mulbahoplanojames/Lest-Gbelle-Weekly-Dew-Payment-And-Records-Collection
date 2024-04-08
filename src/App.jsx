import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Layouts/Navbar/Navbar";
import Home from "./Pages/Home";
import MoreData from "./Pages/MoreData";
import Footer from "./Pages/Footer";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index element={<Home />} />
					<Route path='/moredata' element={<MoreData />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
