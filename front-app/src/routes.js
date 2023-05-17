/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Index from "./views/Index.js";
import Profile from "./views/Profile.js";
import Sensor from "./views/Sensor.js";
import Capteur from "./views/Capteur.js";
import Tables from "./views/Tables.js";
import Plan from "./views/Plan.js";
import EditUser from "./components/EditUser/EditUser.js";

var routes = [
   {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
   {
    path: "/users",
    name: "Users",
    icon: "ni ni-circle-08 text-pink",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/my-profile",
    name: "My Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/sensor",
    name: "Sensor",
    icon: "ni ni-pin-3 text-blue",
    component: Sensor,
    layout: "/admin"
  },
  {
    path: "/capteur",
    name: "Capteur",
    icon: "ni ni-building text-green",
    component: Capteur,
    layout: "/admin"
  },
  {
    path: "/plan",
    name: "Plan",
    icon: "ni ni-folder-17 text-red",
    component: Plan,
    layout: "/admin"
  },
  {
    path: "/edit-user/:id",
    name: "Edit User",
    icon: "ni ni-single-02 text-yellow",
    component: EditUser,
    layout: "" // Set it to an empty string or any other value
  }
  
];
export default routes;
