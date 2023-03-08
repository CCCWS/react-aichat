import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { config } from "./firebaseConfig";

const firebaseConfig = config;
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firestore };
