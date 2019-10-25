import React from "react";
import "./LandingPage.scss";
import { NavLink } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";
import styled from "styled-components";
import { getAllUsers, getSpecificUser, deleteAUser } from "../../util/apiCalls";

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
    @media screen and (max-width: 375px) {
      margin: ${props => (props.client ? "20px 0px 0px 0px" : "50px 20px 0px 0px")}
    }

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
    @media screen and (max-width: 375px) {
      margin: 0px 0px 30px -80px
    }
  `;

  const Section = styled.section`
    margin: 100px;
    height: auto;
    @media screen and (max-width: 375px) {
      justify-content: space-around;
    }
  `;

  return (
    <Section>
      <Button onClick={() => getAllUsers()}>Get All Users</Button>
      <Button onClick={() => getSpecificUser(4)}>Get Single User</Button>
      <Button onClick={() => deleteAUser(4)}>Delete a user</Button>
      <Button onClick={() => getSpecificUser(3)}>Get Single User</Button>
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
