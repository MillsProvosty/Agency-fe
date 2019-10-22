import React from "react";
import "./Team.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "../Nav/Nav";

const Team = () => {
  return (
    <section className="Team">
      <Nav />
      <p className="program">Back End:</p>
      <section className="back">
        <section className="mills">
          <p>Mills Provosty</p>
          <img src="https://avatars0.githubusercontent.com/u/45856797?s=400&v=4" alt='developer'/>
          <section className="urls">
            <a className="url" href="https://github.com/MillsProvosty">
              <FaGithub size={32} />
            </a>
            <a
              className="url"
              href="https://www.linkedin.com/in/mills-provosty/"
            >
              <FaLinkedin size={32} />
            </a>
          </section>
        </section>
        <section className="tay">
          <p>Tay De Herrera</p>
          <img src="https://avatars2.githubusercontent.com/u/47490116?s=400&v=4"alt='developer'/>
          <section className="urls">
            <a className="url" href="https://github.com/tayjames">
              <FaGithub size={32} />
            </a>
            <a
              className="url"
              href="https://www.linkedin.com/in/tay-deherrera/"
            >
              <FaLinkedin size={32} />
            </a>
          </section>
        </section>
      </section>
      <p className="program">Front End:</p>
      <section className="front">
        <section className="aidan">
          <p>Aidan McKay</p>
          <img src="https://avatars1.githubusercontent.com/u/27786530?s=400&v=4"/>
          <section className="urls">
            <a className="url" href="https://github.com/JellyBeans1312">
              <FaGithub size={32} />
            </a>
            <a className="url" href="https://www.linkedin.com/in/aidan-mckay/">
              <FaLinkedin size={32} />
            </a>
          </section>
        </section>
        <section className="greg">
          <p>Gregory Anderson</p>
          <img src="https://avatars1.githubusercontent.com/u/30326085?s=400&v=4" alt='developer'/>
          <section className="urls">
            <a className="url" href="https://github.com/gregoryanderson">
              <FaGithub size={32} />

            </a>
            <a
              className="url"
              href="https://www.linkedin.com/in/gregandersondev/"
            >
              <FaLinkedin size={32} />  
            </a>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Team;
