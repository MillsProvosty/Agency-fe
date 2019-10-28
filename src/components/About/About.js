import React from "react";
import "./About.scss";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import styled from "styled-components";

const AboutSection = styled.section`
  font-size: 1em;
  background-color: aliceblue;
  @media screen and (max-width: 375px) {
    font-size: .75em;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const BigLetters = styled.p`
  margin-top: ${props => (props.first ? "1em" : "2em")};
  font-size: ${props => (props.first ? "2.5em" : "1.5em")};
  margin-bottom: ${props => (props.third ? "2em" : "0em")};

  @media screen and (max-width: 375px) {
    margin-top: ${props => (props.first ? "1em" : "2em")};
    font-size: ${props => (props.first || props.second ? "1.8em" : ".75em")};
    margin-bottom: ${props => (props.third? "2em": "0em")};
  }
`;

const Options = styled.section`
  margin-top: 2em;
  display: flex;
  @media screen and (max-width: 375px) {
    margin-top: 1rem;
    display:block;
    justify-content: center;
  }
  @media screen and (display-mode: standalone) {
    margin-top: 1rem;
    display:block;
    justify-content: center;
  }
`;

const MoreOptions = styled.section`
  margin-top: 1em;
  width: 50%;
  border-right: ${props => (props.one ? "1px solid #7A86CB" : "none")};
  @media screen and (max-width: 375px) {
    margin: auto;
    width: 80%
    border-bottom: ${props => (props.one ? "1px solid #7A86CB": "none")}
    border-right: ${props => (props.one ? "none": '')}
  }
  @media screen and (display-mode: standalone) {
    margin: auto;
    width: 80%
    border-bottom: ${props => (props.one ? "1px solid #7A86CB": "none")}
    border-right: ${props => (props.one ? "none": '')}
  }
`;

const PTag = styled.p`
  font-size: 2em;
`;

const Button = styled.button`
  color: white;
  background-color: #7A86CB;
  border-radius: 5px;
  font-size: 2em;
  width: 175px;
  font-family: "Quicksand", sans-serif;
  border: 2px solid white;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-right: ${props => (props.volunteer ? "20px" : "0px")};
  margin-left: ${props => (props.client ? "20px" : "0px")}

  :hover {
    border: 2px solid #7A86CB;
    color: #7A86CB;
    background-color: white;
}
`;

const About = () => {
  return (
    <AboutSection>
      <Nav />
      <BigLetters first>
        <Bold>Agency</Bold> is a support networking service.
      </BigLetters>
      <BigLetters second>
        To begin..
      </BigLetters>
      <Options>
        <MoreOptions one>
          <PTag>
            select the <Bold>Volunteer</Bold> button
          </PTag>
          <PTag>if you can lend a hand...</PTag>
          <NavLink to="/user-form">
            <Button>Volunteer</Button>
          </NavLink>
        </MoreOptions>
        <MoreOptions>
          <PTag>
            or, select the <Bold>Client</Bold> button
          </PTag>
          <PTag>if you would like some help!</PTag>
          <NavLink to="/user-form">
            <Button>Client</Button>
          </NavLink>
        </MoreOptions>
      </Options>
      <BigLetters second>
        Then, Sign-In to your account
      </BigLetters>
      <BigLetters> or Sign-Up if you haven't had the opportunity yet!</BigLetters>
      <BigLetters second third>
        Explore your profile and edit your settings!
      </BigLetters>
    </AboutSection>
  );
};

export default About;
