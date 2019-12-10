import React from "react";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbrand"></div>
      <div className="navbuttons">
          <NavLink className="link" to="/">
            <button className="verifyCard">verify</button>
          </NavLink>
          <NavLink className="link" to="/logs">
            <button className="verifyCard">view logs</button>
          </NavLink>
      </div>
    </div>
  )
}

