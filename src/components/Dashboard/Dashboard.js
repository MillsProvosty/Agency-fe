import React from "react";
import "./Dashboard.scss";
import { FaHandsHelping } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="Dashboard">
      <nav>
        <section className="logo">
          <FaHandsHelping size={64}/>
          <p>Agency</p>
        </section>
        <section className="links">
          <Link to="/" className="dash-link" activeClassName="chosen">Schedule</Link>
          <Link to="/" className="dash-link" activeClassName="chosen">Tasks</Link>
          <Link to="/" className="dash-link" activeClassName="chosen">About</Link>
          <Link to="/" className="dash-link" activeClassName="chosen">Team</Link>
          <Link to="/" className="dash-link" activeClassName="chosen">History</Link>
          <Link to="/" className="dash-link" activeClassName="chosen">Profile</Link>
        </section>
      </nav>
      <section className="container-dash">
        <p>ima dashboard</p>
      </section>
    </section>
  );
};

export default Dashboard;
