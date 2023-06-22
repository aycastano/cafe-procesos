/*import firebase from "firebase/app";
import "firebase/firestore";*/

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAokysqcvx2PUmBXf9TrLmAs1jW8a4MLPc",
    authDomain: "cafeaandprocesos.firebaseapp.com",
    databaseURL: "https://cafeaandprocesos-default-rtdb.firebaseio.com",
    projectId: "cafeaandprocesos",
    storageBucket: "cafeaandprocesos.appspot.com",
    messagingSenderId: "75291480022",
    appId: "1:75291480022:web:685e965aea65dd581dde77"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


