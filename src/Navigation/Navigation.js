import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import Drawer from "./Drawer/Drawer";
import Backdrop from "./Backdrop/Backdrop";

function Navigation(props) {
  return (
    <div className="Navigation">
      <nav>
        <div class="nav">
          <ul>
            <li class="home">
              <NavLink activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li class="tutorials">
              {" "}
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
            <li class="about">
              {" "}
              <NavLink
                activeClassName="active"
                to={{
                  pathname: "/services",
                  hash: "services"
                }}
              >
                Services
              </NavLink>
            </li>
            <li class="news">
              {" "}
              <NavLink activeClassName="active" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li class="contact">
              {" "}
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>{" "}
            <button className="toggle" onClick={props.toggleHandler}>
              X
            </button>
          </ul>
          <Drawer open={props.drawerOpen} />
          <Backdrop
            open={props.drawerOpen}
            toggleHandler={props.toggleHandler}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
