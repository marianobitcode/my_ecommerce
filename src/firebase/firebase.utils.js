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

// IT SAVES A NEW USER  into the Firestore DB
export const createUserProfileDocument = async (userAuth, addittionalData) => {
  if (!userAuth) return;

  //QueryReference: get an object reference used weather to store it or access to its properties
  // 'uid': dinamic generated id string that Google make 4 us when authenticating the user
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // We get the snapShot object from the reference Object (document or collection) vwith the .get() method
  const snapShot = await userRef.get();

  console.log(snapShot);

  // Snapshot creation, (data creation )
  // '.exists' is a snapShot property
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addittionalData
      });
    } catch (error) {
      console.log("Error creating user:", error.message);
    }
  }
  // We return 'userRef' in order to check if the DB has been updated
  return userRef;
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

// Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
