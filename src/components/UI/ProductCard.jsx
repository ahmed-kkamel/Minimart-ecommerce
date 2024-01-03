import React from "react";
import "../../styles/product-card.css";
import productImg from "../../assets/images/arm-chair-01.jpg";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
const ProductCard = () => {
	return (
		<Col lg="3" md="4">
			<div className="product__item">
				<div className="product__img">
					<img src={productImg} alt="arm-chair" />
				</div>

				<div className="p-2 product__info">
					<h3>Modern Armchair</h3>
					<span>Chair</span>
				</div>

				<div className="product__card-bottom d-flex align-items-center justify-content-between">
					<span className="price">$299</span>
					<span>
						<i className="ri-add-line"></i>
					</span>
				</div>
			</div>
		</Col>
	);
};

export default ProductCard;
