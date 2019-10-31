import React from "react";
import "./Team.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "../Nav/Nav";
import { Program, ProgramSection, Member, URLSection, Image } from './TeamStyled'


const Team = () => {
  return (
    <section className="Team">
      <Nav />
      <Program name className="program">Back End:</Program>
      <ProgramSection className="back">
        <Member className="mills">
          <Program>Mills Provosty</Program>
          <Image
            src="https://avatars0.githubusercontent.com/u/45856797?s=400&v=4"
            alt="developer"
          />
          <URLSection className="urls">
            <a className="url" href="https://github.com/MillsProvosty">
              <FaGithub size={32} />
            </a>
            <a
              className="url"
              href="https://www.linkedin.com/in/mills-provosty/"
            >
              <FaLinkedin size={32} />
            </a>
          </URLSection>
        </Member>
        <Member className="tay">
          <Program>Tay DeHerrera</Program>
          <Image
            src="https://avatars2.githubusercontent.com/u/47490116?s=400&v=4"
            alt="developer"
          />
          <URLSection className="urls">
            <a className="url" href="https://github.com/tayjames">
              <FaGithub size={32} />
            </a>
            <a
              className="url"
              href="https://www.linkedin.com/in/tay-deherrera/"
            >
              <FaLinkedin size={32} />
            </a>
          </URLSection>
        </Member>
      </ProgramSection>
      <Program name className="program">Front End:</Program>
      <ProgramSection className="front">
        <Member className="aidan">
          <Program>Aidan McKay</Program>
          <Image
            src="https://avatars1.githubusercontent.com/u/27786530?s=400&v=4"
            alt="developer"
          />
          <URLSection className="urls">
            <a className="url" href="https://github.com/JellyBeans1312">
              <FaGithub size={32} />
            </a>
            <a className="url" href="https://www.linkedin.com/in/aidan-mckay/">
              <FaLinkedin size={32} />
            </a>
          </URLSection>
        </Member>
        <Member className="greg">
          <Program>Gregory Anderson</Program>
          <Image
            src="https://avatars1.githubusercontent.com/u/30326085?s=400&v=4"
            alt="developer"
          />
          <URLSection className="urls">
            <a className="url" href="https://github.com/gregoryanderson">
              <FaGithub size={32} />
            </a>
            <a
              className="url"
              href="https://www.linkedin.com/in/gregandersondev/"
            >
              <FaLinkedin size={32} />
            </a>
          </URLSection>
        </Member>
      </ProgramSection>
    </section>
  );
};

export default Team;
