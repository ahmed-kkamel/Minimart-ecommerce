import React from "react";
import "../../styles/product-card.css";

import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "./../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ item }) => {
	const dispatch = useDispatch();
	const handleAddToCart = () => {
		dispatch(
			cartActions.addItem({
				id: item.id,
				productName: item.productName,
				price: item.price,
				imgUrl: item.imgUrl,
			})
		);
		toast.success("Product was added successfuly");
	};
	return (
		<Col lg="3" md="4">
			<div className="product__item mb-2">
				<div className="product__img">
					<motion.img
						whileHover={{ scale: 0.9 }}
						src={item.imgUrl}
						alt="arm-chair"
					/>
				</div>

				<div className="p-2 product__info">
					<h3>
						<Link to={`/shop/${item.id}`}>{item.productName}</Link>
					</h3>
					<span>{item.category}</span>
				</div>

				<div className="product__card-bottom d-flex align-items-center justify-content-between">
					<span className="price">${item.price}</span>
					<motion.span whileTap={{ scale: 1.2 }} onClick={handleAddToCart}>
						<i className="ri-add-line"></i>
					</motion.span>
				</div>
			</div>
		</Col>
	);
};

export default ProductCard;
