import React from "react";
import "./Team.scss";
import { FaHandsHelping } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import Nav from "../Nav/Nav";

const Team = () => {
  return (
    <section className="Team">
      <Nav />
      <p className="program">Back End:</p>
      <section className="back">
        <section className="mills">
          <p>Mills Provosty</p>
          <img src="https://avatars0.githubusercontent.com/u/45856797?s=400&v=4"/>
          <section className="urls">
            <a className="url" href="https://github.com/MillsProvosty">
              GitHub
            </a>
            <a
              className="url"
              href="https://www.linkedin.com/in/mills-provosty/"
            >
              LinkedIn
            </a>
          </section>
        </section>
        <section className="tay">
          <p>Tay De Herrera</p>
          <img src="https://avatars2.githubusercontent.com/u/47490116?s=400&v=4"/>
          <section className="urls">
            <a className="url" href="https://github.com/tayjames">
              GitHub
            </a>
            <a
              className="url"
              href="https://www.linkedin.com/in/tay-deherrera/"
            >
              LinkedIn
            </a>
          </section>
        </section>
      </section>
      <p className="program">Front End:</p>
      <section className="front">
        <section className="aidan">
          <p>Aiden McKay</p>
          <img src="https://avatars1.githubusercontent.com/u/27786530?s=400&v=4"/>
          <section className="urls">
            <a className="url" href="https://github.com/JellyBeans1312">
              GitHub
            </a>
            <a className="url" href="https://www.linkedin.com/in/aidan-mckay/">
              LinkedIn
            </a>
          </section>
        </section>
        <section className="greg">
          <p>Gregory Anderson</p>
          <img src="https://avatars1.githubusercontent.com/u/30326085?s=400&v=4"/>
          <section className="urls">
            <a className="url" href="https://github.com/gregoryanderson">
              GitHub
            </a>
            <a
              className="url"
              href="https://www.linkedin.com/in/gregandersondev/"
            >
              LinkedIn
            </a>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Team;
