import { onAuthStateChanged } from "@firebase/auth";
import axios from "axios";
import { createContext, useEffect, useReducer } from "react"
import { auth } from "../firebase/firebase";
import { Action } from "./Action";
import { Reducer } from "./Reducer";

const INITIAL_STATE ={
    Loader:true,
    user:null,
    location:[]
}

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    const {Loader, user, location} = state;
useEffect( ()=>{
   
    const AuthChecker = async ()=>{
        dispatch({type:Action.LoaderOn})
        await onAuthStateChanged(auth, (user)=> {
            
            if(user){
                dispatch({type:Action.loggedIn, payload:user})
                dispatch({type:Action.LoaderOff})
            }else{
                dispatch({type:Action.LoaderOff})
            }
          
           
        })
    }
    AuthChecker();
 const getLocation = async () =>{
    dispatch({type:Action.loadingITems});
    const res = await axios.get('/api/location');
    dispatch({type:Action.getItems, payload:res.data});
    console.log(res.data)
 }
 getLocation();
 
}, [])
    return(
        <Context.Provider value={{
            Loader,
            user,
            location,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}