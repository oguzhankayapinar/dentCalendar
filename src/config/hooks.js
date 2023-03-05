import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


const useIsLoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user)
        })
    }, []);
    return isLoggedIn
}

export default useIsLoggedIn;
