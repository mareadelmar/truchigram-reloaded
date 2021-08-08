import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBWDASm5C7xFF4orpakADFovjkDW3vjs58",
    authDomain: "truchi-gram.firebaseapp.com",
    databaseURL: "https://truchi-gram-default-rtdb.firebaseio.com",
    projectId: "truchi-gram",
    storageBucket: "truchi-gram.appspot.com",
    messagingSenderId: "16953374022",
    appId: "1:16953374022:web:658db4e5940eaecd4ae147",
};

// const firebaseConfig = {
//     apiKey: "AIzaSyAYF-qW1_TtrjJS3QLcPNKKgXOKI_gSNuI",
//     authDomain: "truchigram-reloaded.firebaseapp.com",
//     projectId: "truchigram-reloaded",
//     storageBucket: "truchigram-reloaded.appspot.com",
//     messagingSenderId: "958326935725",
//     appId: "1:958326935725:web:0cdb4f671ccd65b7937624",
// };
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const database = firebaseApp.database();
const storage = firebaseApp.storage();

export { auth, database, storage };
