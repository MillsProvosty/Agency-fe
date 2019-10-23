import React from "react";
import "./About.scss";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import styled from "styled-components";

const AboutSection = styled.section`
  font-size: 1em;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const BigLetters = styled.p`
  margin-top: ${props => (props.first ? "1em" : "2em")};
  font-size: ${props => (props.first ? "2.5em" : "1.5em")};
  margin-bottom: ${props => (props.third ? "2em" : "0em")};
`;

const Options = styled.section`
  margin-top: 2em;
  display: flex;
`;

const MoreOptions = styled.section`
  margin-top: 1em;
  width: 50%;
  border-right: ${props => (props.one ? "1px solid darkblue" : "none")};
`;

const PTag = styled.p`
  font-size: 2em;
`;

const Button = styled.button`
color: white;
background-color: darkblue;
border-radius: 5px;
font-size: 2em;
width: 175px;
font-family: "Quicksand", sans-serif;
border: 2px solid white;
margin-top: 30px;
margin-right: ${props => (props.volunteer ? "20px" : "0px")};
margin-left: ${props => (props.client ? "20px" : "0px")}


:hover {
  border: 2px solid darkblue;
  color: darkblue;
  background-color: white;
}
`;

const About = () => {
  return (
    <AboutSection className="about">
      <Nav />
      <BigLetters first className="first">
        <Bold>Agency</Bold> is a support networking service.
      </BigLetters>
      <BigLetters second className="second">
        To begin..
      </BigLetters>
      <Options className="options">
        <MoreOptions one className="option-1">
          <PTag>
            select the <Bold>Volunteer</Bold> button
          </PTag>
          <PTag>if you can lend a hand...</PTag>
          <NavLink to="/user-form">
            <Button className="about-button">Volunteer</Button>
          </NavLink>
        </MoreOptions>
        <MoreOptions className="option-2">
          <PTag>
            or, select the <Bold>Client</Bold> button
          </PTag>
          <PTag>if you would like some help!</PTag>
          <NavLink to="/user-form">
            <Button className="about-button">Client</Button>
          </NavLink>
        </MoreOptions>
      </Options>
      <BigLetters second className="second">
        Then, Sign-In to your account
      </BigLetters>
      <BigLetters> or Sign-Up if you haven't had the opportunity yet!</BigLetters>
      <BigLetters second third className="third">
        Explore your profile and edit your settings!
      </BigLetters>
    </AboutSection>
  );
};

export default About;
