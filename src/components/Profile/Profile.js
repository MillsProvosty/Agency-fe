import React from "react";
import "./Profile.scss";
import { FaHandsHelping } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import Nav from "../Nav/Nav";

const Profile = () => {
  return (
    <section className="Profile">
        <Nav />
      <section className="container-dash">
        <p>ima Profile</p>
      </section>
    </section>
  );
};

export default Profile;
