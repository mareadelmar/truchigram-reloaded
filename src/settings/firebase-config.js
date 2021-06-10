import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAYF-qW1_TtrjJS3QLcPNKKgXOKI_gSNuI",
    authDomain: "truchigram-reloaded.firebaseapp.com",
    projectId: "truchigram-reloaded",
    storageBucket: "truchigram-reloaded.appspot.com",
    messagingSenderId: "958326935725",
    appId: "1:958326935725:web:0cdb4f671ccd65b7937624",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export { auth };
