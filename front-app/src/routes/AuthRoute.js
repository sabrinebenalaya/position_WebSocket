import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthRoute = ({ children}) =>{
  const token = localStorage.getItem("jwt");
  if(!token){
    return <Navigate to="/" replace/> 
  }
  
  return children
  
}

export default AuthRoute