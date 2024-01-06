import React, { useEffect, useRef, useState } from "react";
import Helmet from "./../components/Helmet/Helmet";
import CommonSection from "./../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "./../assets/data/products";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetails = () => {
	const dispatch = useDispatch();
	const [tab, setTab] = useState("desc");
	const [rating, setRating] = useState(null);
	const reviewUser = useRef("");
	const reviewMsg = useRef("");
	const { id } = useParams();
	const product = products.find((item) => item.id === id);

	const {
		imgUrl,
		productName,
		price,
		avgRating,
		reviews,
		description,
		shortDesc,
		category,
	} = product;
	const relatedPrducts = products.filter((item) => item.category === category);
	const handleAddToCart = () => {
		dispatch(
			cartActions.addItem({
				id,
				imgUrl,
				productName,
				price,
			})
		);
		toast.success("Product was added successfuly");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const reviewUserName = reviewUser.current.value;
		const reviewUserMessage = reviewMsg.current.value;
		const revObject = {
			userName: reviewUserName,
			text: reviewUserMessage,
			rating,
		};
		toast.success("Review submitted");
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [product]);
	return (
		<Helmet title="product details">
			<CommonSection title={productName} />
			<section>
				<Container>
					<Row>
						<Col lg="6">
							<img src={imgUrl} alt={productName} />
						</Col>
						<Col lg="6">
							<div className="product__details">
								<h2>{productName}</h2>
								<div className="product__rating  d-flex align-items-center gap-5 mb-4">
									<div>
										<span>
											<i className="ri-star-s-fill"></i>
										</span>
										<span>
											<i className="ri-star-s-fill"></i>
										</span>
										<span>
											<i className="ri-star-s-fill"></i>
										</span>
										<span>
											<i className="ri-star-s-fill"></i>
										</span>
										<span>
											<i className="ri-star-half-s-fill"></i>
										</span>
									</div>
									<p>
										(<span>{avgRating}</span> Ratings)
									</p>
								</div>
								<div className="d-flex align-items-center gap-5">
									<span className="product__price">${price}</span>
									<p>Category: {category}</p>
								</div>
								<p className="mt-3">{shortDesc}</p>
								<motion.button
									whileTap={{ scale: 1.1 }}
									className="buy__button"
									onClick={handleAddToCart}
								>
									Add to cart
								</motion.button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<Row>
						<Col lg="12">
							<div className="tab__wrapper d-flex align-items-center gap-5">
								<h6
									className={`${tab === "desc" ? "active__tab" : ""}`}
									onClick={() => setTab("desc")}
								>
									Description
								</h6>
								<h6
									className={`${tab === "rev" ? "active__tab" : " "}`}
									onClick={() => setTab("rev")}
								>
									Reviews ({reviews.length})
								</h6>
							</div>

							{tab === "desc" ? (
								<div className="tab__content mt-5">
									<p>{description}</p>
								</div>
							) : (
								<div className="product__review mt-5">
									<div className="review__wrapper">
										<ul>
											{reviews?.map((item, index) => (
												<li key={index} className="mb-4">
													<p>John Doe</p>
													<span>{item.rating} ( Rating )</span>
													<p>{item.text}</p>
												</li>
											))}
										</ul>
									</div>
									<div className="review__form">
										<h4>Leave your experience</h4>
										<form action="" onSubmit={handleSubmit}>
											<div className="form__group">
												<input
													type="text"
													placeholder="Enter Name"
													ref={reviewUser}
													required
												/>
											</div>
											<div className="form__group d-flex align-items-center gap-5 rating__group">
												<motion.span
													onClick={() => setRating(1)}
													whileTap={{ scale: 1.2 }}
												>
													1<i className="ri-star-s-fill"></i>
												</motion.span>
												<motion.span
													onClick={() => setRating(2)}
													whileTap={{ scale: 1.2 }}
												>
													2<i className="ri-star-s-fill"></i>
												</motion.span>
												<motion.span
													onClick={() => setRating(3)}
													whileTap={{ scale: 1.2 }}
												>
													3<i className="ri-star-s-fill"></i>
												</motion.span>
												<motion.span
													onClick={() => setRating(4)}
													whileTap={{ scale: 1.2 }}
												>
													4<i className="ri-star-s-fill"></i>
												</motion.span>
												<motion.span
													onClick={() => setRating(5)}
													whileTap={{ scale: 1.2 }}
												>
													5<i className="ri-star-s-fill"></i>
												</motion.span>
											</div>
											<div className="form__group">
												<textarea
													rows={3}
													type="text"
													placeholder="Review message..."
													ref={reviewMsg}
													required
												/>
											</div>
											<button type="submit" className="buy__button mt-0">
												Submit
											</button>
										</form>
									</div>
								</div>
							)}
						</Col>
						<Col lg="12" className="mt-5">
							<h2 className="related__title">You might also like</h2>
						</Col>
						<ProductsList data={relatedPrducts} />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default ProductDetails;
