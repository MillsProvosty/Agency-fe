import React from "react";
import "./Dashboard.scss";
import { FaHandsHelping } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import Nav from "../Nav/Nav";

const Dashboard = () => {
  return (
    <section className="Dashboard">
        <Nav />
      <section className="container-dash">
        <p>ima dashboard</p>
      </section>
    </section>
  );
};

export default Dashboard;
