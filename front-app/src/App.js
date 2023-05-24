import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "././views/Login";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Profile from "./views/Profile";
import Index from "./views/Index";
import Sensor from "./views/Sensor";
import Plan from "./views/Plan";
import EditUser from "./components/Users/EditUser/EditUser";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import UserTable from "./components/Users/UserTable";
import CapteurTable from './components/Capteurs/CapteurTable';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/admin",
      element: <Sidebar />,
      children: [
        {
          path: "/admin", 
          element: (
            <Index/>
          ),

        },
        {
          path: "/admin/profil", 
          element: (
            <Profile/>
          ),
          
        },
        {
          path: "/admin/users", 
          element: (
            <UserTable/>
          ),
          
        },
        {
          path: "/admin/sensors", 
          element: (
            <Sensor/>
          ),
          
        },
        {
          path: "/admin/capteurs", 
          element: (
            <CapteurTable/>
          ),
          
        },
        {
          path: "/admin/plan", 
          element: (
            <Plan/>
          ),
          
        },
        {
          path: "/admin/editUser/:id", 
          element: <EditUser />,
        },
      
      ],
    },

  ]);

 
  return (
    <div style={{ height: "100%" }}>
    <ToastContainer />
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
  );
}

export default App;
