import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Layouts/Navbar/Navbar";
import Home from "./Pages/Home";
import MoreData from "./Pages/MoreData";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index element={<Home />} />
					<Route path='/moredata' element={<MoreData />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
