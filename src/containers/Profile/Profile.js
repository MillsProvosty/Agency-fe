import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import { connect } from "react-redux";
import { setUserOpportunities } from "../../actions";
import Opportunities from "../Opportunities/Opportunities";
import { ProfileSection, Header } from "./ProfileStyled";
import CreateOppModal from "../../components/CreateOppModal/CreateOppModal";
import Modal from "react-modal";
import styled from "styled-components";




export const ModalStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  color: white;
  background-color: #37474e;
  border-radius: 5px;
  font-size: 1em;
  width: 250px;
  padding: 5px;
  font-family: "Quicksand", sans-serif;
  border: 2px solid white;
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


export const Profile = props => {

  const [isLoading, setLoading] = useState(true);
  const [createModal, showCreateModal] = React.useState(false);
  const [showOpps, setShowOpps] = useState(false);

  const { user } = props;
  const getUserOpp = async () => {
    setLoading(false);
  };

  useEffect(() => {
    getUserOpp();
  }, []);

  return (
    <ProfileSection className="Profile">
      <Nav />
      {isLoading && <p>I am loading</p>}
      {!isLoading && user.role === "client" && (
        <>
          <Header>Welcome, {user.first_name}</Header>
          <Button id="showModal" onClick={() => showCreateModal(true)}>
            Create An Opportunity
          </Button>
          <Button>
            Edit Your Settings
          </Button>
          <ModalStyle>
            <Modal isOpen={createModal} className="modal">
              <CreateOppModal />
            </Modal>
          </ModalStyle>
        </>
      )}
      {!isLoading && user.role === "volunteer" && (
        <>
          <Header>Welcome, {user.first_name}</Header>
          <Button onClick={() => setShowOpps(true)}>
            Search For Opportunities
          </Button>
          <Button>
            Edit Your Settings
          </Button>
          {showOpps &&  <Opportunities role={user.role} />}
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
