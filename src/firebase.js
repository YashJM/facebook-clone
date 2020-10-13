import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC6lpbKYrDEL5Oe_pLHJGfYCS-7_r4csOE",
    authDomain: "facebook-clone-20fc2.firebaseapp.com",
    databaseURL: "https://facebook-clone-20fc2.firebaseio.com",
    projectId: "facebook-clone-20fc2",
    storageBucket: "facebook-clone-20fc2.appspot.com",
    messagingSenderId: "223602839557",
    appId: "1:223602839557:web:268267180e18f8579dcc6c",
    measurementId: "G-ZCJNNSQYWC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); // firebase allowing auth service
const provider = new firebase.auth.GoogleAuthProvider(); // auth provider 



export { auth, provider };
export default db;