import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import CreateOppModal from "../../components/CreateOppModal/CreateOppModal";
import { editOpp } from "../../actions";
import { deleteAnOpportunity } from "../../util/apiCalls";
import { Link } from 'react-router-dom';
import { OpportunityCard, OpportunitySection, PTag, Header, ModalStyle, Button, CardSection, Container, Bold } from './OpportunitiesStyled'

export const Opportunities = props => {

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
              <Button id='deleteOpp'
                onClick={() => deleteAnOpportunity(props.user.id, opportunity.id)}
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
