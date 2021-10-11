// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMYR4aJMwCvraqSnBXTEeNQb2ciB--Sww",
  authDomain: "crwn-db-b5d66.firebaseapp.com",
  projectId: "crwn-db-b5d66",
  storageBucket: "crwn-db-b5d66.appspot.com",
  messagingSenderId: "243287770021",
  appId: "1:243287770021:web:b149ca498f0561eec09e4c",
  measurementId: "G-LS9MMTLJKM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
