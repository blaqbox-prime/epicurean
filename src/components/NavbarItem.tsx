import React from "react";
import {NavLink } from "react-router-dom";

type props = {
  link:string,
  text:string,
  active?: boolean
}

function NavbarItem({link, text,active = false} : props) {
  return (
    <li className="navbar-item">
      <NavLink to={link} className="navbar-link hover-underline" 
      activeClassName="active" exact >
        <div className="separator"></div>
        <span className="span">{text}</span>
      </NavLink>
    </li>
  );
}

export default NavbarItem;
