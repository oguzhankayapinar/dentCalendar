import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


export default function useIsLoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            console.log(user)
            setIsLoggedIn(!!user);
        });
    }, []);

    return isLoggedIn;
};