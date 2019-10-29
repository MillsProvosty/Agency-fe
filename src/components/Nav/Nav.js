import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { GiAirBalloon } from "react-icons/gi";
import { NavBar, LogoSection, PTag, PLinks, Logo, LinksSection } from './NavStyled'

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
