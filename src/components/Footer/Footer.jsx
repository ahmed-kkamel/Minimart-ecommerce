import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import { Link } from "react-router-dom";
import "../Footer/footer.css";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col lg="4" md="6" className="mb-4">
						<div className="logo">
							<div>
								<h1 className="text-white">Multimart</h1>
							</div>
						</div>
						<p className="logo__text mt-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laboriosam, eos. Esse porro repudiandae reiciendis labore adipisci
							ullam quisquam nemo enim?
						</p>
					</Col>
					<Col lg="2" md="3" className="mb-4">
						<div className="footer__quick-links">
							<h4 className="quick__links-title">Top Categories</h4>
							<ListGroup>
								<ListGroupItem className="ps-0 border-0">
									<Link to="#">Mobile Phones</Link>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0">
									<Link to="#">Modern Sofa</Link>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0">
									<Link to="#">Arm Chair</Link>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0">
									<Link to="#">Smart Watche</Link>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lg="2" md="3" className="mb-4">
						<div className="footer__quick-links">
							<h4 className="quick__links-title">Quick Links</h4>
							<ListGroup>
								<ListGroupItem className="ps-0 border-0">
									<Link to="/shop">Shop</Link>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0">
									<Link to="/cart">Cart</Link>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0">
									<Link to="/login">Log in</Link>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0">
									<Link to="#">Privacy Policy</Link>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lg="4" md="6">
						<div className="footer__quick-links">
							<h4 className="quick__links-title">Contact</h4>
							<ListGroup className="footer__contact">
								<ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
									<span>
										<i className="ri-map-pin-line"></i>
									</span>
									<p>23 Market Square, Cairo, Egypt</p>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
									<span>
										<i className="ri-phone-line"></i>
									</span>
									<p>+20 106 25436213</p>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
									<span>
										<i className="ri-mail-line"></i>
									</span>
									<p>minimart@example.com</p>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lg="12">
						<p className="footer__copyright text-center mt-5">
							Copyright {year}. Developed by Ahmed Kamel. All rights reserved.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
