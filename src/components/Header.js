import React from "react";
import { withRouter, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="flex">
        <img src="/logo.png" alt="" className="logo" />
        <NavLink className="header-title" to="/">
          Hooks News
        </NavLink>
        <NavLink className="header-link" to="/">
          New
        </NavLink>
        <div className="divider"> | </div>
        <NavLink className="header-link" to="/top">
          Top
        </NavLink>
        <div className="divider"> | </div>
        <NavLink className="header-link" to="/search">
          Search
        </NavLink>
        <div className="divider"> | </div>
        <NavLink className="header-link" to="/create">
          Submit
        </NavLink>
      </div>
      <div className="flex">
        <NavLink className="header-link" to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default withRouter(Header);
