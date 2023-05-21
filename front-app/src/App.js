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
import Tables from "./views/Tables";
import Sensor from "./views/Sensor";
import Capteur from "./views/Capteur";
import Plan from "./views/Plan";
import EditUser from "./components/Users/EditUser/EditUser";
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
            <Tables/>
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
            <Capteur/>
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
    <>
      <ToastContainer />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;
