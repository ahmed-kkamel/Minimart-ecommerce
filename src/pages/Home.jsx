import React, { useEffect, useState } from "react";

import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import products from "../assets/data/products";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
const Home = () => {
	const year = new Date().getUTCFullYear();
	const [trendingProducts, setTrendingProducts] = useState(products);
	const [bestSalesProducts, setBestSalesProducts] = useState(products);
	const [mobileProducts, setMobileProducts] = useState(products);
	const [wirelessProducts, setWirelessProducts] = useState(products);
	const [popularProducts, setPopularProducts] = useState(products);

	useEffect(() => {
		const filteredTrendingProducts = products.filter(
			(item) => item.category === "chair"
		);
		const filteredBestSalesProducts = products.filter(
			(item) => item.category === "sofa"
		);
		const filteredMobileProducts = products.filter(
			(item) => item.category === "mobile"
		);
		const filteredWirelessProducts = products.filter(
			(item) => item.category === "wireless"
		);
		const filteredPopularProducts = products.filter(
			(item) => item.category === "watch"
		);

		setTrendingProducts(filteredTrendingProducts);
		setBestSalesProducts(filteredBestSalesProducts);
		setMobileProducts(filteredMobileProducts);
		setWirelessProducts(filteredWirelessProducts);
		setPopularProducts(filteredPopularProducts);
	}, []);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Helmet title={"Home"}>
			<section className="hero__section">
				<Container>
					<Row>
						<Col lg="6" md="6">
							<div className="hero__content">
								<p className="hero__subtitle">Trending Product in {year}</p>
								<h2>Make Your Interior More Minimalistic & Modern</h2>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Inventore officia, illum natus quam corrupti voluptatum nihil
									sit quis voluptas eius!
								</p>
								<motion.button
									whileTap={{ scale: 1.1 }}
									className="buy__button"
								>
									<Link to="/shop">SHOP NOW</Link>
								</motion.button>
							</div>
						</Col>
						<Col lg="6" md="6">
							<img src={heroImg} alt="Header alt" />
						</Col>
					</Row>
				</Container>
			</section>
			<Services />
			<section className="trending__products">
				<Container>
					<Row>
						<Col lg="12" className="text-center mb-4">
							<h2 className="section__title">Trending Products</h2>
						</Col>
						<ProductsList data={trendingProducts} />
					</Row>
				</Container>
			</section>
			<section className="bestsales__products">
				<Container>
					<Row>
						<Col lg="12" className="text-center mb-4">
							<h2 className="section__title">Best Sales</h2>
						</Col>
						<ProductsList data={bestSalesProducts} />
					</Row>
				</Container>
			</section>

			<section className="timer__count">
				<Container>
					<Row>
						<Col lg="6" md="12" className="timer-col">
							<div className="clock__top-content">
								<h3 className="text-white fs-6 mb-2">Limited Offers</h3>
								<h2 className="text-white fs-5 mb-3">Quality Armchair</h2>
							</div>
							<Clock />
							<motion.button
								whileTap={{ scale: 1.2 }}
								className="buy__button store_btn"
							>
								<Link to="/shop">Visit Store</Link>
							</motion.button>
						</Col>
						<Col lg="6" className="text-end">
							<img
								src={counterImg}
								alt="counter for m3rfsh"
								className="counter__image"
							/>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="new__arrivals">
				<Container>
					<Row>
						<Col lg="12" className="text-center mb-4">
							<h2 className="section__title">New Arrivals</h2>
						</Col>
						<ProductsList data={mobileProducts} />
						<ProductsList data={wirelessProducts} />
					</Row>
				</Container>
			</section>
			<section className="popular__category">
				<Container>
					<Row>
						<Col lg="12" className="text-center mb-4">
							<h2 className="section__title">Popular in Category</h2>
						</Col>
						<ProductsList data={popularProducts} />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Home;
