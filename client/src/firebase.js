import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-project-a454c.firebaseapp.com",
  projectId: "react-project-a454c",
  storageBucket: "react-project-a454c.appspot.com",
  messagingSenderId: "1001484494365",
  appId: "1:1001484494365:web:3c6443456bb6b438ddc8f4",
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firestore };
