import React from "react";
import "./LandingPage.scss";
import { NavLink } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";
import styled from "styled-components";

export const LandingPage = props => {
  const Button = styled.button`
    color: white;
    background-color: darkblue;
    border-radius: 5px;
    font-size: 2em;
    width: 175px;
    font-family: "Quicksand", sans-serif;
    border: 2px solid white;
    margin-top: 100px;
    margin-right: ${props => (props.volunteer ? "20px" : "0px")};
    margin-left: ${props => (props.client ? "20px" : "0px")}


    :hover {
      border: 2px solid darkblue;
      color: darkblue;
      background-color: white;
    }
  `;

  const PTag = styled.p`
    font-size: 2em;
    margin: 2px;
  `;

  const Header = styled.h1`
    font-size: 6em;
    margin: 0px;
  `;

  const Section = styled.section`
    margin: 100px;
    height: auto;
  `;

  return (
    <Section>
      <FaHandsHelping size={64} />
      <Header>Agency</Header>
      <PTag>A Support System In Places</PTag>
      <section>
        <NavLink
          to="/user-form"
          onClick={() => props.displayForms("volunteer")}
        >
          <Button volunteer>Volunteer</Button>
        </NavLink>
        <NavLink to="/user-form" onClick={() => props.displayForms("client")}>
          <Button client>Client</Button>
        </NavLink>
      </section>
    </Section>
  );
};
