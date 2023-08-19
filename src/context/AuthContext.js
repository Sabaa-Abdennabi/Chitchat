import { onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const onsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log(user);

        });
        return onsub();
    }, []);
    return(
    <AuthContext.Provider value={{ currentUser }}>
        {children}
    </AuthContext.Provider>)
}