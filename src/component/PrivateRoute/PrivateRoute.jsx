import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { Action } from '../../context/Action'
import { Context } from '../../context/Context'



export const PrivateRoute = ({children,path}) => {
const {Loader, user, dispatch} = useContext(Context)
  if(Loader){
      return null

  } 
    
  console.log(user)
  return (
      <Route exact path={path} >
          {user? children : <Redirect to='/login'/>}
      </Route>
      )

 


}

      
  

