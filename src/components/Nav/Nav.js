import React from "react";
import "./Nav.scss";
import { FaHandsHelping } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="nav">
      <NavLink to="/about" style={{ textDecoration: 'none' }}>
        <section className="logo">
          <FaHandsHelping size={64} />
          <p className="title">Agency</p>
        </section>
      </NavLink>
      <section className="links">
        <NavLink to="/about" className="dash-link">
          About
        </NavLink>
        <NavLink to="/profile" className="dash-link">
          Profile
        </NavLink>
        <NavLink to="/schedule" className="dash-link">
          Schedule
        </NavLink>
        <NavLink to="/tasks" className="dash-link">
          Tasks
        </NavLink>
        <NavLink to="/history" className="dash-link">
          History
        </NavLink>
        <NavLink to="/team" className="dash-link">
          Team
        </NavLink>
      </section>
    </section>
  );
};

export default Nav;
