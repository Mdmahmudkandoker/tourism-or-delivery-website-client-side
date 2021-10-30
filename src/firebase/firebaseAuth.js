import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from "@firebase/auth";
import { useContext } from "react";
import { Action } from "../context/Action";
import { Context } from "../context/Context";
import { auth } from "./firebase";
import axios from 'axios'

const provider = new GoogleAuthProvider(auth);

export const useFirebase = () => {
const {dispatch} = useContext(Context);
const {LoaderOn, LoaderOff, loggedOut} = Action;
    const googleSignIn = async ()=>{
        dispatch({type:LoaderOn})
        await signInWithPopup(auth, provider)
        .then(()=>window.location.replace('/'))
        .catch(err=>console.log(err))
        .finally(()=>dispatch({type:LoaderOff}));
        
    }
    const googleRedirect = async ()=>{
        dispatch({type:LoaderOn})
        await signInWithRedirect(auth, provider)
        .then(()=>window.location.replace('/'))
        .catch(err=>console.log(err))
        .finally(()=>dispatch({type:LoaderOff}));
    }
    const logOut = async() =>{
        dispatch({type:LoaderOn})
        await signOut(auth).then(()=>{dispatch({type:loggedOut, payload:null});window.location.replace('/') }).finally(()=> dispatch({type:LoaderOff}))
        
    }
    const registerWithEmail = async (email, password, username, isAdmin) =>{
        dispatch({type:LoaderOn});
        await createUserWithEmailAndPassword(auth, email, password)
        .then(user => {updateProfile(auth.currentUser, {displayName: username}); 
        window.location.replace('/') })
        .catch(err=> console.log(err))
        .finally(()=> dispatch({type:LoaderOff}))
        const res = await axios.post('/api/auth/' , {email, isAdmin})
        console.log(res);
       
    }
    const loginUser = async (email, password) =>{
        dispatch({type:LoaderOn});
        await signInWithEmailAndPassword(auth, email, password).then(()=> window.location.replace('/')).catch(err=>console.log(err)).finally(()=>dispatch({type:LoaderOff}))
        
    }
    return{ googleSignIn, logOut, registerWithEmail, loginUser, googleRedirect}
}

