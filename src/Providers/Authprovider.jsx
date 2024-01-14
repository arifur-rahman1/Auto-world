import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthCotext=createContext();
const auth=getAuth(app);


const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        // console.log(email,password);
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log("current User",currentUser);
            setLoading(false)
        })
        return()=>{
            return unSubscribe()
        }
    },[])


    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthCotext.Provider value={authInfo}>
            {children}
        </AuthCotext.Provider>
    );
};

export default Authprovider;