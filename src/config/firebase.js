import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateCurrentUser,
    signInWithEmailAndPassword
} from "firebase/auth";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const signUp = async (name, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
    await updateCurrentUser(auth, { displayName: name })

};

export const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
};

