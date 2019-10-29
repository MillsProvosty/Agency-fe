import React, {useState} from "react";
import "./LandingPage.scss";
import { NavLink } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";
import { GiAirBalloon } from "react-icons/gi";
import { connect } from "react-redux";
import styled from "styled-components";
import { setRole } from "../../actions";
import balloonImg from "./air_support.svg";

export const LandingPage = props => {
  const Button = styled.button`
    color: white;
    background-color: #37474e;
    border-radius: 5px;
    font-size: 2em;
    width: 175px;
    font-family: "Quicksand", sans-serif;
    border: 2px solid white;
    margin-top: 30px;
    margin-right: ${props => (props.volunteer ? "20px" : "0px")};
    margin-left: ${props => (props.client ? "20px" : "0px")} @media screen and
      (max-width: 375px) {
      margin: ${props =>
        props.client ? "20px 0px 0px 0px" : "50px 20px 0px 0px"};
    }

    :hover {
      border: 2px solid #37474e;
      color: #37474e;
      background-color: white;
    }
  `;

  const PTag = styled.p`
    font-size: 2em;
    margin: 2px;
  `;

  const Header = styled.h1`
    color: #37474E
    font-size: 6em;
    margin: 0px;
    @media screen and (max-width: 375px) {
      margin: 0px 0px 30px -80px
    }
  `;

  const Section = styled.section`
    height: 100vh;
    width: 100%;
    background-color: aliceblue;
    background-repeat: no-repeat;
    background-size: 1000px;
    background-position: top center;
    background-image: url(${balloonImg});
    @media screen and (max-width: 375px) {
      justify-content: space-around;
    }
  `;

  const Logo = styled.button`
    margin-top: 100px;
    border-radius: 50%;
    border: 3px solid #37474e;
  `;

  const [userRole, setTheRole] = useState(false)
  console.log('landing', props)
  return (
    <Section>
      <Logo disabled>
        <GiAirBalloon className="hands" size={64} />
      </Logo>
      <Header>Agency</Header>
      <PTag>A Support System In Places</PTag>
      <section>
        <Button volunteer onClick={() => {props.setRole("volunteer"); setTheRole(true)}}>
          Volunteer
        </Button>
        <Button
          client
          onClick={() => {
            props.setRole("client");
          }}
        >
          Client
        </Button>
      </section>
    </Section>
  );
};

export const mapDispatchToProps = dispatch => ({
  setRole: role => dispatch(setRole(role))
});

export default connect(
  null,
  mapDispatchToProps
)(LandingPage);
