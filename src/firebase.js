import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyApFdMkmDt5hEhQw1ZQ9IpVz4eBbj6oFiQ",
    authDomain: "react-slack-da52d.firebaseapp.com",
    databaseURL: "https://react-slack-da52d.firebaseio.com",
    projectId: "react-slack-da52d",
    storageBucket: "react-slack-da52d.appspot.com",
    messagingSenderId: "449253970443",
    appId: "1:449253970443:web:b8e0f192eab06a5330ed0e",
    measurementId: "G-4D8BVW015W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;