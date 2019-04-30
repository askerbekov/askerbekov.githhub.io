import React from "react";
import "./Drawer.css";
import { NavLink } from "react-router-dom";

function Drawer(props) {
  const stateClass = props.open ? "open" : "close";

  return (
    <div className={"Drawer " + stateClass}>
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
    </div>
  );
}

export default Drawer;
