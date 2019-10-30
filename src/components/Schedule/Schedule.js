import React, { useState, useEffect } from "react";
import "./Schedule.scss";
import Nav from "../../components/Nav/Nav";
import { connect } from "react-redux";
import { getAllOpportunities } from "../../util/apiCalls";
import { setUserOpportunities } from "../../actions";
import Opportunities from "../../containers/Opportunities/Opportunities";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ScheduleSection = styled.section`
  width: 100%;
  background-color: white;
  @media screen and (max-width: 375px) {
    justify-content: space-around;
  }
`;

const Header = styled.h1`
color: #37474E
font-size: 2em;
margin: 0px;
@media screen and (max-width: 375px) {
  margin: 0px 0px 30px -80px
}
`;

export const Button = styled.button`
  color: white;
  background-color: #37474E;
  border-radius: 5px;
  font-size: 1em;
  width: 175px;
  font-family: "Quicksand", sans-serif;
  border: 2px solid white;

  :hover {
    border: 2px solid #37474E;
    color: #37474E;
    background-color: white;
  }

  @media screen and (max-width: 375px) {
    margin-top: 10px;
  }

  @media screen and (display-mode: standalone) {
    margin-top: 10px;
  }
`;

export const Schedule = props => {
  const [isLoading, setLoading] = useState(true);

  const getUserOpp = async () => {
    setLoading(false);
  };

  useEffect(() => {
    getUserOpp();
  }, []);

  return (
    <ScheduleSection className="Schedule">
      <Nav />
      {isLoading && <p>I am loading</p>}
      {!isLoading && props.user.role === "client" && (
        <>
          <Header>{props.user.first_name}'s Requests</Header>
          <Link to="/profile">
            <Button>Return to Profile</Button>
            {/* <Button>Edit my Profile; doesnt work</Button> */}
          </Link>
          <Opportunities role={props.user.role} />
        </>
      )}
      {!isLoading && props.user.role === "volunteer" && (
        <>
          <Header>{props.user.first_name}'s Schedule</Header>
          <Link to="/profile">
            <Button>Return to Profile</Button>
            {/* <Button>Edit my Profile; doesnt work</Button> */}
          </Link>
          <Opportunities role={props.user.role} />
        </>
      )}
    </ScheduleSection>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  opportunities: state.opportunities
});

export const mapDispatchToProps = dispatch => ({
  setOpportunities: opportunities =>
    dispatch(setUserOpportunities(opportunities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
