import React from "react";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import { Fragment } from "react";
import Footer from "../Footer/Footer";

const Layout = () => {
	return (
		<Fragment>
			<Header />
			<div>
				<Routers />
			</div>
			<Footer />
		</Fragment>
	);
};

export default Layout;
