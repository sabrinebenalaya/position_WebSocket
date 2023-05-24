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
import Plan from "./views/Plan.js";
import UserTable from "./components/Users/UserTable.js";
import CapteurTable from './components/Capteurs/CapteurTable';

const routes = [
   {
    path: "/admin",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
   {
    path: "/admin/users",
    name: "Users",
    icon: "ni ni-circle-08 text-pink",
    component: UserTable,
    layout: "/admin"
  },
  {
    path: "/admin/profil",
    name: "My Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/admin/sensors",
    name: "Sensor",
    icon: "ni ni-pin-3 text-blue",
    component: Sensor,
    layout: "/admin"
  },
  {
    path: "/admin/capteurs",
    name: "Capteur",
    icon: "ni ni-building text-green",
    component: CapteurTable,
    layout: "/admin"
  },
  {
    path: "/admin/plan",
    name: "Plan",
    icon: "ni ni-folder-17 text-red",
    component: Plan,
    layout: "/admin"
  },

  
];
export default routes;
