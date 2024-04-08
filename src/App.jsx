import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Layouts/Navbar/Navbar";
import Home from "./Pages/Home";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					
						<Route index element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
