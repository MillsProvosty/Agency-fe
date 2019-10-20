import React from "react";
import "./Team.scss";
import { FaHandsHelping } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import Nav from "../Nav/Nav";

const Team = () => {
  return (
    <section>
      <Nav />
      <p>Back End:</p>
      <p>Mills Provosty</p>
      <a href="https://github.com/MillsProvosty">GitHub</a>
      <p>Tay De Herrera</p>
      <a href="https://github.com/tayjames">GitHub</a>
      <p>Front End:</p>
      <p>Aiden McKay</p>
      <a href="https://github.com/JellyBeans1312">GitHub</a>
      <p>Gregory Anderson</p>
      <a href="https://github.com/gregoryanderson">GitHub</a>
    </section>
  );
};

export default Team;