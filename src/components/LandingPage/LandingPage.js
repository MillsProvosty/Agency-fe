import React from "react";
import "./LandingPage.scss";
import { NavLink } from "react-router-dom";
import { GiAirBalloon } from "react-icons/gi";
import { connect } from "react-redux";
import { setRole } from "../../actions";
import { Button, PTag, Header, Section, Logo } from './LandingPageStyled' 

export const LandingPage = props => {


  return (
    <Section>
      <Logo disabled>
        <GiAirBalloon className="hands" size={64} />
      </Logo>
      <Header>Agency</Header>
      <PTag>A Support System In Places</PTag>
      <section>
        <NavLink to="/user-form">
          <Button 
            volunteer
            id='volunteer'
            onClick={() => {
              props.setRole("volunteer");
              props.displayForms();
            }}
            >
              Volunteer
            </Button>
        </NavLink>
        <NavLink to="/user-form">
          <Button
            client
            id='client'
            onClick={() => {
              props.setRole("client");
              props.displayForms();
            }}
          >
            Client
          </Button>
        </NavLink>
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
