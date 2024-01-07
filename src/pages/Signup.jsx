import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Form, Row, FormGroup } from "reactstrap";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth } from "../firebase.config";

import { storage } from "../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [file, setFile] = useState(null);
	const [loading, setLoading] = useState(false);
	const signup = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			const storageRef = ref(storage, `images/${Date.now() + userName}`);
			const uploadTask = uploadBytesResumable(storageRef, file);
			uploadTask.on(
				(error) => {
					toast.error(error.message);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
						// update user profile
						await updateProfile(user, {
							displayName: userName,
							photoURL: downloadUrl,
						});
						// store user data in fire store base
						await setDoc(doc(db, "users", user.uid), {
							uid: user.uid,
							displayName: userName,
							email,
							photoURL: downloadUrl,
						});
					});
				}
			);
			setLoading(false);
			toast.success("Account created");
			navigate("/login");
		} catch (error) {
			toast.error("Something went wrong");
		}
	};
	return (
		<Helmet title="Signup">
			<CommonSection title="Signup" />
			<section>
				<Container>
					<Row>
						{loading ? (
							<Col lg="12" className="text-center">
								<h5 className="fw-bold">Loading...</h5>
							</Col>
						) : (
							<Col lg="6" className="m-auto text-center">
								<h3 className="fw-bold  mb-4">Signup</h3>

								<Form className="auth__form" onSubmit={signup}>
									<FormGroup className="form__group">
										<input
											type="text"
											placeholder="User name"
											value={userName}
											onChange={(e) => setUserName(e.target.value)}
										/>
									</FormGroup>
									<FormGroup className="form__group">
										<input
											type="text"
											placeholder="Email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</FormGroup>
									<FormGroup className="form__group">
										<input
											type="password"
											placeholder="Password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</FormGroup>
									<FormGroup className="form__group">
										<input
											type="file"
											onChange={(e) => setFile(e.target.files[0])}
										/>
									</FormGroup>
									<button className="buy__button auth__button" type="submit">
										Create an account
									</button>
									<p>
										Already have an account?
										<Link to="/login"> Login </Link>
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

export default Signup;
