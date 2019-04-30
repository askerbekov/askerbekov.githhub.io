import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import Drawer from "./Drawer/Drawer";
import Backdrop from "./Backdrop/Backdrop";

function Navigation(props) {
  return (
    <div className="Navigation">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
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
          <li>
            <NavLink activeClassName="active" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>{" "}
        <button
          onClick={props.toggleHandler}
          for="burger"
          id="Burger"
          className="toggle"
        >
          X
          <span />
          <span />
          <span />
        </button>
      </nav>

      <Drawer open={props.drawerOpen} />
      <Backdrop open={props.drawerOpen} toggleHandler={props.toggleHandler} />
    </div>
  );
}

export default Navigation;
