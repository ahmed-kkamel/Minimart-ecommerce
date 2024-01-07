import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";
const firebaseConfig = {
	apiKey: "AIzaSyBPgGTkh5Iyq97vYywHCug9iPLK9Bax52k",
	authDomain: "minimart-910cc.firebaseapp.com",
	projectId: "minimart-910cc",
	storageBucket: "minimart-910cc.appspot.com",
	messagingSenderId: "998952955238",
	appId: "1:998952955238:web:d231fc9cd7d9298c086ca7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
