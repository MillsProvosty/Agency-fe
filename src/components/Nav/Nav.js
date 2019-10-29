import React from "react";
import "./Nav.scss";
import { FaHandsHelping } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GiAirBalloon } from "react-icons/gi";

const NavBar = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #37474e;
  color: aliceblue;
  height: 100px;
`;

const LogoSection = styled.section`
  color: aliceblue;
  display: flex;
  margin: 10px;
  font-size: 1.5em;
  align-items: center;
`;

const PTag = styled.p`
  font-size: 2em;
  margin: 0;
  :hover {
    border-bottom: 1px solid aliceblue;
    height: 1.25em;
  }
`;

const PLinks = styled.p`
  font-size: 1.5em;
  color: aliceblue;
  margin-top: 1.5em;
`;

const Logo = styled.button`
  background-color: #37474e;
  border-radius: 50%;
  border: 2px solid white;
`;

const LinksSection = styled.section`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
`;

const Nav = () => {
  return (
    <NavBar className="nav">
      <NavLink
        to="/about"
        style={{ textDecoration: "none" }}
        className="nav-link"
      >
        <LogoSection className="logo">
          <Logo>
            <GiAirBalloon className="hands" size={40} style={{ color: "white" }}/>
          </Logo>
          <PTag className="title" style={{ textDecoration: "none" }}>
            Agency
          </PTag>
        </LogoSection>
      </NavLink>
      <LinksSection className="links">
        <NavLink
          to="/about"
          className="dash-link"
          style={{ textDecoration: "none" }}
        >
          <PLinks>About</PLinks>
        </NavLink>
        <NavLink
          to="/profile"
          className="dash-link"
          style={{ textDecoration: "none" }}
        >
          <PLinks>Profile</PLinks>
        </NavLink>
        <NavLink
          to="/schedule"
          className="dash-link"
          style={{ textDecoration: "none" }}
        >
          <PLinks>Schedule</PLinks>
        </NavLink>
        <NavLink
          to="/tasks"
          className="dash-link"
          style={{ textDecoration: "none" }}
        >
          <PLinks>Tasks</PLinks>
        </NavLink>
        <NavLink
          to="/history"
          className="dash-link"
          style={{ textDecoration: "none" }}
        >
          <PLinks>History</PLinks>
        </NavLink>
        <NavLink
          to="/team"
          className="dash-link"
          style={{ textDecoration: "none" }}
        >
          <PLinks>Team</PLinks>
        </NavLink>
      </LinksSection>
    </NavBar>
  );
};

export default Nav;
