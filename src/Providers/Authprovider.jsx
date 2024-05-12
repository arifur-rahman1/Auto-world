import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

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
            const userEmail=currentUser?.email || user?.email
            setUser(currentUser);
            const loggedUser={email: userEmail}
            // console.log("current User",currentUser);
            setLoading(false)
            // if user exists then issue a token
            if(currentUser){
                axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUser,{
                    withCredentials:true
                })
                .then(res=>{
                    console.log(res.data);
                })
            }
        })
        return()=>{
            return unSubscribe()
        }
    },[])
    console.log(user);


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