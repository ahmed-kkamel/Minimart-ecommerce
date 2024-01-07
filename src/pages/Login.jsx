import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Form, Row, FormGroup } from "reactstrap";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const signIn = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			console.log(user);
			toast.success("Successfuly logged in");
			navigate("/checkout");
		} catch (error) {
			setLoading(false);
			toast.error(error.message);
		}
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Helmet title="Login">
			<CommonSection title="Login" />
			<section>
				<Container>
					<Row>
						{loading ? (
							<Col lg="12" className="text-center">
								<h6 className="fw-bold">Loading...</h6>
							</Col>
						) : (
							<Col lg="6" className="m-auto text-center">
								<h3 className="fw-bold  mb-4">Login</h3>
								<Form className="auth__form" onSubmit={signIn}>
									<FormGroup className="form__group">
										<input
											type="text"
											placeholder="Enter your email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</FormGroup>
									<FormGroup className="form__group">
										<input
											type="password"
											placeholder="Enter your password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</FormGroup>
									<button className="buy__button auth__button" type="submit">
										Login
									</button>
									<p>
										Don't have an account?
										<Link to="/signup"> Create an account. </Link>
									</p>
								</Form>
							</Col>
						)}
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Login;
