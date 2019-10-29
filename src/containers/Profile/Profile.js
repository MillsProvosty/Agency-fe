import React, { useState, useEffect } from "react";
import "./Profile.scss";
import Nav from "../../components/Nav/Nav";
import { connect } from "react-redux";
import { getAllOpportunities, deleteAUser } from "../../util/apiCalls";
import { setUserOpportunities } from "../../actions";
import Opportunities from "../Opportunities/Opportunities";
import styled from "styled-components";

const ProfileSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  background-attachment: fixed;
  @media screen and (max-width: 375px) {
    justify-content: space-around;
  }
`;

const Header = styled.h1`
color: #37474E
font-size: 6em;
margin: 0px;
@media screen and (max-width: 375px) {
  margin: 0px 0px 30px -80px
}
`;

const Profile = props => {
  console.log("profile", props )
  const [isLoading, setLoading] = useState(true);

  const getUserOpp = async () => {
    setLoading(false);
  };

  useEffect(() => {
    getUserOpp();
  }, []);

  return (
    <ProfileSection className="Profile">
      <Nav />
      <button onClick={() => deleteAUser(props.user.id)}>Delete Account</button>
      {isLoading && <p>I am loading</p>}
      {!isLoading && props.user.role === "client" && (
        <>
          <Header>Welcome, {props.user.firstname}</Header>
          <Opportunities role={props.user.role} />
        </>
      )}
      {!isLoading && props.user.role === "volunteer" && (
        <>
          <h1>Welcome {props.user.firstname}</h1>
          <Opportunities role={props.user.role} />
        </>
      )}
    </ProfileSection>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  opportunities: state.opportunities,
});

export const mapDispatchToProps = dispatch => ({
  setOpportunities: opportunities =>
    dispatch(setUserOpportunities(opportunities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
