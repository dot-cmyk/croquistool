import   firebase from "firebase/compat/app";


import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"
const firebaseConfig = {
    // apiKey: "AIzaSyDH6rySddl7QAoqkwATwz7CgXrPe7LQis8",
    // authDomain: "croquistool.firebaseapp.com",
    // projectId: "croquistool",
    // storageBucket: "croquistool.appspot.com",
    // messagingSenderId: "843301254465",
    // appId: "1:843301254465:web:046d03ff7cf7e8619f9dc0",
    // measurementId: "G-JT9C23VQFT"
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

  export default firebase.initializeApp(firebaseConfig);
 
 const authService =  firebase.auth();
 const dbService = firebase.firestore();
 const storageService = firebase.storage();
export {firebase, authService,dbService,storageService}