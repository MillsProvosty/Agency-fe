import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import CreateOppModal from "../../components/CreateOppModal/CreateOppModal";
import { editOpp } from "../../actions";
import { deleteAnOpportunity } from "../../util/apiCalls";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OpportunityCard = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  margin-top: 0.5em;
  padding-bottom: 0.5em;
  align-items: center;
  height: 15vh;
  background-color: white;
  border: 1px solid #37474e;
  -webkit-box-shadow: 9px 10px 5px -10px rgba(55, 71, 78, 1);
  -moz-box-shadow: 9px 10px 5px -10px rgba(55, 71, 78, 1);
  box-shadow: 9px 10px 5px -10px rgba(55, 71, 78, 1);
  border: 1px solid #37474e @media screen and (max-width: 375px) {
    border-right: none;
  }
  @media screen and (display-mode: standalone) {
    border-right: none;
  }
`;

const OpportunitySection = styled.section`
  width: 100%;
  background-color: aliceblue;
  background-attachment: fixed;
`;

const PTag = styled.p`
  font-size: 1em};
  margin: 0px;
`;

const Header = styled.h1`
  color: #37474e;
  font-size: 2em;
  margin: 0px;
  @media screen and (max-width: 375px) {
    margin: 0px 0px 30px -80px;
  }
`;

const ModalStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  color: white;
  background-color: #37474e;
  border-radius: 5px;
  font-size: 1em;
  width: 175px;
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

const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  height: 100%;
  width: ${props => (props.buttons ? "20%" : "35%")};
`;

const Container = styled.section`
  width: 100%;
`;

const Bold = styled.span`
  font-weight: bold;
`;

export const Opportunities = props => {
  const deleteOpportunity = async (userId, oppId) => {
    await deleteAnOpportunity(userId, oppId);
  };

  const displayOpp = () => {
    return props.opportunities.map(opportunity => {
      return (
        <OpportunityCard key={opportunity.id}>
          <CardSection>
            <Header>{opportunity.title}</Header>
            <PTag description>{opportunity.description}</PTag>
          </CardSection>
          <CardSection>
            <PTag>
              <Bold>Type: </Bold>
              {opportunity.type}
            </PTag>
            <PTag>
              <Bold>Location:</Bold> {opportunity.location}
            </PTag>
            <PTag>
              <Bold>Estimated Time:</Bold>
              {opportunity.estimated_time}
            </PTag>
          </CardSection>
          {props.role === "volunteer" && (
            <CardSection buttons>
              <Button
                onClick={() =>
                  deleteAnOpportunity(props.user.id, opportunity.id)
                }
              >
                Select opportunity; doesnt work
              </Button>
              <Button
                onClick={() =>
                  deleteAnOpportunity(props.user.id, opportunity.id)
                }
              >
                Find Out About The Client; doesnt work
              </Button>
            </CardSection>
          )}
          {props.role === "client" && (
            <CardSection buttons>
              <Button
                onClick={() => deleteOpportunity(props.user.id, opportunity.id)}
              >
                DELETE works and throws error
              </Button>
              <Button onClick={props.editOpp}>This Edit Doesnt Work</Button>
            </CardSection>
          )}
        </OpportunityCard>
      );
    });
  };

  const [createModal, showCreateModal] = React.useState(false);

  return (
    <OpportunitySection>
      <ModalStyle>
        <Modal isOpen={createModal} className="modal">
          <CreateOppModal />
        </Modal>
      </ModalStyle>
      <Link to="/profile">
        <Button>Return to Profile</Button>
        <Button>Edit my Profile; doesnt work</Button>
      </Link>
      {props.role === "client" && (
        <Button id='showModal'onClick={() => showCreateModal(true)}>
          Create an opportunity
        </Button>
      )}
      {props.role === "volunteer" && <Button>Search For Opportunities</Button>}
      <Container>{displayOpp()}</Container>
    </OpportunitySection>
  );
};

export const mapStateToProps = state => ({
  opportunities: state.opportunities,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  editOpp: opp => dispatch(editOpp(opp))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Opportunities);
