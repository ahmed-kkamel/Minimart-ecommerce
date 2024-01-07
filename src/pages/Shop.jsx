import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import "../styles/shop.css";
import products from "./../assets/data/products";
import ProductsList from "./../components/UI/ProductsList";
const Shop = () => {
	const [productsData, setProductsData] = useState(products);
	const handleFilter = (e) => {
		const filterValue = e.target.value;
		if (filterValue === "sofa") {
			const filterdProducts = products.filter(
				(item) => item.category === "sofa"
			);
			setProductsData(filterdProducts);
		}
		if (filterValue === "mobile") {
			const filterdProducts = products.filter(
				(item) => item.category === "mobile"
			);
			setProductsData(filterdProducts);
		}
		if (filterValue === "chair") {
			const filterdProducts = products.filter(
				(item) => item.category === "chair"
			);
			setProductsData(filterdProducts);
		}
		if (filterValue === "wireless") {
			const filterdProducts = products.filter(
				(item) => item.category === "wireless"
			);
			setProductsData(filterdProducts);
		}
		if (filterValue === "watch") {
			const filterdProducts = products.filter(
				(item) => item.category === "watch"
			);
			setProductsData(filterdProducts);
		}
		if (filterValue === "all") {
			setProductsData(products);
		}
	};
	const handleSearch = (e) => {
		const searchTerm = e.target.value;
		const searchedProducts = products.filter((item) =>
			item.productName.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setProductsData(searchedProducts);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Helmet title="Shop">
			<CommonSection title="Products" />
			<section>
				<Container>
					<Row>
						<Col lg="3" md="6" sm="6" xs="6" className="mb-0">
							<div className="filter__widget">
								<select onChange={handleFilter}>
									<option value="all">Filter By Category</option>
									<option value="sofa">Sofa</option>
									<option value="mobile">Mobile</option>
									<option value="chair">Chair</option>
									<option value="watch">Watch</option>
									<option value="wireless">Wireless</option>
								</select>
							</div>
						</Col>
						<Col lg="3" md="6" sm="6" xs="6" className="text-end mb-4">
							<div className="filter__widget">
								<select>
									<option>Sort By</option>
									<option value="ascending">Ascending</option>
									<option value="descinding">Descending</option>
								</select>
							</div>
						</Col>
						<Col lg="6" md="12">
							<div className="search__box">
								<input
									type="text"
									placeholder="search...."
									onChange={handleSearch}
								/>
								<span>
									<i className="ri-search-line"></i>
								</span>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="pt-0">
				<Container>
					<Row>
						{productsData.length === 0 ? (
							<h1 className="text-center fs-4">No products were found!</h1>
						) : (
							<ProductsList data={productsData} />
						)}
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Shop;
