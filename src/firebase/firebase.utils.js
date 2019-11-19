import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDXf2vEMY0F2A32Fgckxn8cA_qIY4HEaTY",
  authDomain: "myfb-30157.firebaseapp.com",
  databaseURL: "https://myfb-30157.firebaseio.com",
  projectId: "myfb-30157",
  storageBucket: "myfb-30157.appspot.com",
  messagingSenderId: "426663698836",
  appId: "1:426663698836:web:28432da41127572e362f81",
  measurementId: "G-VZSCL7DGM3"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

// Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
