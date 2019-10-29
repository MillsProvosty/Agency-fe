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
  height: 100vh;
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
  const [isLoading, setLoading] = useState(true);

const { user } = props
  const getUserOpp = async () => {
    setLoading(false);
  };

  useEffect(() => {
    getUserOpp();
  }, []);

  return (
    <ProfileSection className="Profile">
      <Nav />
      <button onClick={() => deleteAUser(user.id)}>Delete Account</button>
      {isLoading && <p>I am loading</p>}
      {!isLoading && user.role === "client" && (
        <>
          <Header>Welcome, {user.firstname}</Header>
          <Opportunities role={user.role} />
        </>
      )}
      {!isLoading && user.role === "volunteer" && (
        <>
          <h1>Welcome {user.firstname}</h1>
          <Opportunities role={user.role} />
        </>
      )}
    </ProfileSection>
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
)(Profile);
