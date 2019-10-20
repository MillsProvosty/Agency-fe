import React from "react";
import "./About.scss";
import { FaHandsHelping } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import Nav from '../Nav/Nav'

const About = () => {
    return (
        <section>
            <Nav />
            <p>Agency is an support networking service.</p>
            <p>To Begin, select Volunteer, if you have a helping hand you would like to lend, or Client, if you would like to link up with some help!</p>
            <p>Then, sign-in to your account, or sign-up if you haven't had the opportunity yet!</p>
            <p>You will be brought to your profile page and will have the ability to set times you are available, or ask for some help.</p>
        </section>
    )
}

export default About;