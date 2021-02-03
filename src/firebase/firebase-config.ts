import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC0VhXTXRITwYQlwqTV6WUL-zkI0OnFXzM",
    authDomain: "react-types.firebaseapp.com",
    projectId: "react-types",
    storageBucket: "react-types.appspot.com",
    messagingSenderId: "777751627316",
    appId: "1:777751627316:web:90604642bf57943f53ec61"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase,
}