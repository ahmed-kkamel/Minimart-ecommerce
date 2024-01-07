import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
const Checkout = () => {
	const totalQuantity = useSelector((state) => state.cart.totalQuantinty);
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Helmet title="Checkout">
			<CommonSection title="Checkout" />
			<section className="checkout">
				<Container>
					<Row>
						<Col lg="8">
							<h6 className="mb-4 fw-bold">Billing Informations</h6>
							<Form className="billing__form">
								<FormGroup className="form__group">
									<input type="text" placeholder="Enter your name" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="email" placeholder="Enter your email" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="number" placeholder="phone number" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="Street address" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="City" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="Postal code" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="Country" />
								</FormGroup>
							</Form>
						</Col>
						<Col lg="4">
							<div className="checkout__cart">
								<h6>
									Total Quantity: <span>{totalQuantity} items</span>
								</h6>
								<h6>
									Subtotal: <span>${totalAmount}</span>
								</h6>
								<h6>
									<span>
										Shipping: <br />
										Free Shipping
									</span>
									<span>$0</span>
								</h6>
								<h4>
									Total Cost: <span>${totalAmount}</span>
								</h4>
								<button className="buy__button auth__btn w-100">
									Place an order
								</button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Checkout;
