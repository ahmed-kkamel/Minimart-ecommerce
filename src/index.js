import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					closeOnClick
					pauseOnHover={false}
					theme="dark"
				/>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
