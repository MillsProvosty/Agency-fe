import React from "react";
import "./About.scss";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";

const About = () => {
  return (
    <section className="about">
      <Nav />
      <p className="first">
        <span>Agency</span> is a support networking service.
      </p>
      <p className="second">To begin..</p>
      <section className="options">
        <section className="option-1">
          <p>
            select the <span>Volunteer</span> button
          </p>
          <p>if you can lend a hand...</p>
          <NavLink to="/user-form">
            <button className="about-button">Volunteer</button>
          </NavLink>
        </section>
        <section className="option-2">
          <p>
            or, select the <span>Client</span> button
          </p>
          <p>if you would like some help!</p>
          <NavLink to="/user-form">
            <button className="about-button">Client</button>
          </NavLink>
        </section>
      </section>
      <p className="second">Then, Sign-In to your account </p>
      <p> or Sign-Up if you haven't had the opportunity yet!</p>
      <p className="third">
        Explore your profile and edit your settings!
      </p>
    </section>
  );
};

export default About;
