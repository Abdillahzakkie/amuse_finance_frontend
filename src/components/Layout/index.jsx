import React from "react";
import Navbar from "../../components/Navbar";
import { LayoutWrapper } from "./style";

function Layout() {
	return (
		<LayoutWrapper className="grid">
			<Navbar />
		</LayoutWrapper>
	);
}

export default Layout;
