import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import AdminFooter from "../components/Footers/AdminFooter.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import { Route, Switch } from "react-router-dom";

import routes from "./../routes.js";
import EditUser from "../components/EditUser/EditUser.js";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRoute } from "../Redux/routeSlice.js";

const Admin = (props) => {
  const mainContent = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const selectedRoute = useSelector((state) => state.route.selectedRoute);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  const handleRouteClick = (route) => {

    const updatedRoute = {
      ...route,
      path: route.path,
      component: route.component,
    };
    console.log(updatedRoute)
    dispatch(setSelectedRoute(updatedRoute));
  };
  const [idUser, setIdUser] = useState("");

  useEffect(() => {
    if (selectedRoute) {
      const path = selectedRoute.path;
      const id = path.substring(path.lastIndexOf("/") + 1);
      setIdUser(id);
      dispatch(setSelectedRoute(selectedRoute));
    }
  }, [selectedRoute]);


  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/",
          imgSrc: require("../assets/img/brand/argon-react.png"),
          imgAlt: "...",
        }}
        handleRouteClick={handleRouteClick}
      />

      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {selectedRoute && (
            <Container fluid>
              
                
                  {React.createElement(selectedRoute.component)}
              
            </Container>
          )}
        </Switch>

        <AdminFooter />
      </div>
    </>
  );
};

export default Admin;
