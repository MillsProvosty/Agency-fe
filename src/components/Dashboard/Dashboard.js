import React from "react";
import "./Dashboard.css";
import { FaHandsHelping } from "react-icons/fa";
import {NavLink} from 'react-router-dom'

const Dashboard = () => {
    return (
      <section className="Dashboard">
        <FaHandsHelping />
        {/* <NavLink>Schedule</NavLink>
        <NavLink>Tasks</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Team</NavLink>
        <NavLink>History</NavLink>
        <NavLink>Profile</NavLink> */}
        <p>ima dashboard</p>
      </section>
    );
  }
  
export default Dashboard;