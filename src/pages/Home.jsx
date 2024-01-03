import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
const Home = () => {
	const year = new Date().getUTCFullYear();
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
									<Link to="shop">SHOP NOW</Link>
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
						<Col lg="12" className="text-center">
							<h2 className="section__title">Trending Products</h2>
						</Col>
						<ProductsList />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Home;
