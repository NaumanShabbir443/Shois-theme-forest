import { Route, Routes } from "react-router-dom";
import Checkout from "../Components/Checkout";
import FrontendRouter from "./FrontendRouter";

export default function index() {
	return (
		<>

			<Routes>
				<Route path="/*" element={<FrontendRouter />} />
				<Route path="/cart/*" element={<Checkout />} />
			</Routes>

		</>
	)
}
