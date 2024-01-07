import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import { NavLink, useNavigate, Link } from "react-router-dom";
// importing Css file
import "../Header/header.css";
// Animation importing
import { motion } from "framer-motion";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { useSelector } from "react-redux";

import useAuth from "./../../custom hooks/useAuth";
import { signOut } from "firebase/auth";
import { Auth } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
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

	const headerRef = useRef(null);
	const menuRef = useRef(null);
	const profileRef = useRef(null);
	const totalQuantity = useSelector((stata) => stata.cart.totalQuantinty);
	const navigate = useNavigate();
	const { currentUser } = useAuth();

	const stickyHeaderFunction = () => {
		window.addEventListener("scroll", () => {
			if (
				document.body.scrollTop > 1 ||
				document.documentElement.scrollTop > 1
			) {
				headerRef.current.classList.add("sticky__header");
			} else {
				headerRef.current.classList.remove("sticky__header");
			}
		});
	};

	useEffect(() => {
		stickyHeaderFunction();
		return () => window.removeEventListener("scroll", stickyHeaderFunction);
	});

	const toggleMenu = () => {
		menuRef.current.classList.toggle("active__menu");
	};

	const handleOpenCart = () => {
		navigate("cart");
	};
	const toggleProfileActions = () => {
		profileRef.current.classList.toggle("show_profileActions");
	};
	const logout = () => {
		signOut(auth)
			.then(() => {
				toast.success("Logged out");
				navigate("/home");
			})
			.catch((err) => toast.error(err.message));
	};
	return (
		<header className="header" ref={headerRef}>
			<Container>
				<Row>
					<div className="nav__wrapper">
						<div className="logo">
							<img src={logo} alt="logo" />
							<div>
								<Link to="/home">
									<h1>Minimart</h1>
								</Link>
							</div>
						</div>
						<div className="navigation" ref={menuRef} onClick={toggleMenu}>
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
							<span className="cart__icon" onClick={handleOpenCart}>
								<i className="ri-shopping-bag-line"></i>
								<span className="badge">{totalQuantity}</span>
							</span>
							<div className="profile">
								<motion.img
									whileTap={{ scale: 1.2 }}
									src={currentUser ? currentUser.photoURL : userIcon}
									alt="user icon"
									onClick={toggleProfileActions}
								/>
								<div
									className="profile__actions"
									ref={profileRef}
									onClick={toggleProfileActions}
								>
									{currentUser ? (
										<span onClick={logout}>Log out</span>
									) : (
										<span className="d-flex align-items-center justify-content-center flex-column">
											<Link to="/signup">Signup</Link>
											<Link to="/login">Login</Link>
										</span>
									)}
								</div>
							</div>
							<div className="mobile__menu ">
								<span onClick={toggleMenu}>
									<i className="ri-menu-line"></i>
								</span>
							</div>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
