import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import ChatList from '../../components/ChatList'
 
const Dashboard = () => {
  const { user, isAuthenticated, isLoading,logout } = useAuth0()
  const navigate = useNavigate();
  var userId= null;
  if(user) userId = user.sub 
  
  useEffect(() => {
    if(!isLoading && !userId){
      navigate("/");
    }
  })
  console.log("userId --> ",userId);
  console.log("isLoading --> ",isLoading);
  if(isLoading){
    return <div>Loading...</div>
  }

  const handleLogOut = function(){
    logout({ logoutParams: { returnTo: window.location.origin } });
  }
  return (
    <div className ='dashboardLayout'>
        <div className="menu"> MENU <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleLogOut}>Logout</button>  </div>
        <div className="content"> <Outlet/> </div>
        
    </div>
  )
}

export default Dashboard
