import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import Dashboard from './routes/dashboard/Dashboard.jsx'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx'


const router = createBrowserRouter([
  {
   element :<RootLayout/>,
   children:[
    {
      path:"/",
      element:<Homepage/>
    },{
      element:<DashboardLayout/>,
      children:[
        {
          path:"/dashboard",
          element:<Dashboard/>
        },{
          path:"/dashboard/chats/:id",
          element:<ChatPage/>
        }
      ]
    }
   ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
