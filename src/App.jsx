import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Layouts/Navbar/Navbar";
import Home from "./Pages/Home";
import MoreData from "./Pages/MoreData";
import Footer from "./Pages/Footer";
import MemberForm from "./Pages/Form/MemberForm";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index element={<Home />} />
					<Route path='/moredata' element={<MoreData />} />
					<Route path='/form' element={<MemberForm />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
