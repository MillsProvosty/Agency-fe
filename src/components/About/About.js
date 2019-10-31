import React from "react";
import "./About.scss";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import {
  AboutSection,
  Bold,
  BigLetters,
  Options,
  MoreOptions,
  PTag,
  Button,
  QuickSection
} from "./AboutStyled";

const About = () => {
  return (
    <AboutSection>
      <Nav />
      <BigLetters first>
        <Bold>Agency</Bold> is a support networking service.
      </BigLetters>
      <QuickSection>
        <PTag>
          Software Developer, Mills Provosty, had a friend who needed a small
          bit of help to make a big difference. Developers Tay DeHerrera, Aiden
          McKay, and Gregory Anderson joined to build this app that connects. To
          give <Bold>Agency.</Bold>
        </PTag>
      </QuickSection>
      <BigLetters second>To begin..</BigLetters>
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
      <BigLetters second>Then, Sign-In to your account</BigLetters>
      <BigLetters>
        {" "}
        or Sign-Up if you haven't had the opportunity yet!
      </BigLetters>
      <BigLetters second third>
        Explore your profile and edit your settings!
      </BigLetters>
    </AboutSection>
  );
};

export default About;
