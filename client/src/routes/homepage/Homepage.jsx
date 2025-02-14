
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {Link, useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import "tailwindcss";


const Homepage = () => {
  const { user, loginWithRedirect, isAuthenticated,logout, isLoading } = useAuth0();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated && user) {
      navigate("/dashboard")
    }
  }, [isAuthenticated, user, isLoading, navigate])
  
  const handleLogIn = function(){
    try{
      loginWithRedirect();
      
    }
    catch(err){
      console.log("error --> ",err);
    }
  }
  const handleLogOut = function(){
    logout({ logoutParams: { returnTo: window.location.origin } });
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen">
        {!isAuthenticated ? 
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleLogIn}>Sign in to Auth0</button>
        :
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleLogOut}>Logout</button>}
               
    </div>)
}

export default Homepage
