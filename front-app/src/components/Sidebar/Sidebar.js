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
/*eslint-disable*/
import { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
import routes from "../../routes";


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from './../../Redux/Actions/authAction';
import { Outlet } from "react-router-dom";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = ()=>{
    dispatch(logOut(navigate));

  }
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <ul
          id="nav"
          className="navbar-nav ml-auto"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {routes.map((route, index) => (
            <li key={index} style={{ margin: "20px" }}>
              <Link
                data-scroll-nav={0}
                className="text-gray"
                to={route.path}
                activeClassName="active"
              >
                <i className={route.icon} style={{ marginRight: "5px" }} />
                <spam> {route.name}</spam>
              </Link>
            </li>
          ))}
          <li style={{ margin: "20px" }}>
            <Link data-scroll-nav={0} className="text-gray"  onClick={logout}>
              <i
                className="ni ni-button-power"
                style={{ marginRight: "5px" }}
              />
              <span> Log out</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div style={{ flex: "1", width: "90%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
