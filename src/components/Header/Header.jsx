import React from "react";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
// importing Css file
import "../Header/header.css";
// Animation importing
import { motion } from "framer-motion";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
const Header = () => {
	const navLinks = [
		{
			path: "home",
			display: "Home",
		},
		{
			path: "shop",
			display: "Shop",
		},
		{
			path: "cart",
			display: "Cart",
		},
	];

	return (
		<header className="header">
			<Container>
				<Row>
					<div className="nav__wrapper">
						<div className="logo">
							<img src={logo} alt="logo" />
							<div>
								<h1>Multimart</h1>
								{/* <p>Since 1990</p> */}
							</div>
						</div>
						<div className="navigation">
							<ul className="menu">
								{navLinks.map((item, index) => (
									<li className="nav__item" key={index}>
										<NavLink
											to={item.path}
											className={(navClass) =>
												navClass.isActive ? "nav__active" : ""
											}
										>
											{item.display}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						<div className="nav__icons">
							<span className="fav__icon">
								<i className="ri-heart-line"></i>
								<span className="badge">1</span>
							</span>
							<span className="cart__icon">
								<i className="ri-shopping-bag-line"></i>
								<span className="badge">1</span>
							</span>
							<span>
								<motion.img
									whileTap={{ scale: 1.2 }}
									src={userIcon}
									alt="user icon"
								/>
							</span>
						</div>
						<div className="mobile__menu">
							<span>
								<i className="ri-menu-line"></i>
							</span>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
