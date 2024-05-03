import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomePage from "./Home/HomePage";
import ProductDetails from "./ProductDetails";

export default function index() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/*" element={<HomePage />} />
				<Route path="/product-details" element={<ProductDetails />} />
			</Routes>
			<Footer />
		</>
	)
}
