import React from "react";
import Navbar from "../../components/Navbar";
import { HomeWrapper } from "./style";

function Home() {
	return (
		<HomeWrapper className="grid">
			<Navbar />
		</HomeWrapper>
	);
}

export default Home;
