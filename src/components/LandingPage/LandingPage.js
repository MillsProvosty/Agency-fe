import React, { useState } from "react";
import "./LandingPage.scss";
import { GiAirBalloon } from "react-icons/gi";
import { connect } from "react-redux";
import { setRole } from "../../actions";
import { Button, PTag, Header, Section, Logo } from "./LandingPageStyled";

export const LandingPage = props => {
  const [role, setTheRole] = useState(false);
  return (
    <Section>
      <Logo disabled>
        <GiAirBalloon className="hands" size={64} />
      </Logo>
      <Header>Agency</Header>
      <PTag>Help Up</PTag>
      <section>
        <Button
          volunteer
          id='volunteer'
          onClick={() => {
            props.setRole("volunteer");
            setTheRole(true);
          }}
        >
          Volunteer
        </Button>
        <Button
          client
          id='client'
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
