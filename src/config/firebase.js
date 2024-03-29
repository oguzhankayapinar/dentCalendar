import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";.
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7fA3F5aFbfnI6WZxWa9NK1RD6eQW_oaQ",
    authDomain: "dentcal-9b82e.firebaseapp.com",
    projectId: "dentcal-9b82e",
    storageBucket: "dentcal-9b82e.appspot.com",
    messagingSenderId: "393312860045",
    appId: "1:393312860045:web:d5b4d23f1348833c2d6fc4",
    measurementId: "G-M92QGXYHB1"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app)





