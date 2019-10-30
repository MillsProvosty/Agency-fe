import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import CreateOppModal from "../../components/CreateOppModal/CreateOppModal";
import { editOpp } from "../../actions";
import { deleteAnOpportunity, postVolToClient } from "../../util/apiCalls";
import { Link } from "react-router-dom";
import {
  OpportunityCard,
  OpportunitySection,
  PTag,
  Header,
  ModalStyle,
  Button,
  CardSection,
  Container,
  Bold
} from "./OpportunitiesStyled";

export const Opportunities = props => {
  const deleteOpportunity = async (userId, oppId) => {
    await deleteAnOpportunity(userId, oppId);
  };

  const [opportunities, setOpportunities] = useState(false);
  useEffect(() => {
    if (props.opportunities.length > 0) {
      console.log("useEff opps", props);
      setOpportunities(true);
    } else {
      setOpportunities(false);
    }
  }, [props.opportunities]);

  const displayOpp = () => {
    let iterable;

    // console.log('propsOpps type', typeof props.opportunities)
    // console.log('propsOpps actual', props.opportunities)
    // console.log('propsOpps index0 type', typeof props.opportunities[0])
    // console.log('propsOpps index0 actual', props.opportunities[0])


    if (props.opportunities['0'] !== undefined && props.opportunities['0'].length > 1) {
      console.log('length props.opportunities', props.opportunities['0'].length)
      console.log('props', props)
      iterable = props.opportunities[0];
      console.log("sign in", iterable);
    } else {
      iterable = props.opportunities;
      console.log("sign up", iterable);
    }

    console.log("iterable", iterable);
    return iterable.map(opportunity => {
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
                onClick={() => postVolToClient(props.user.id, opportunity.id)}
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
                id="deleteOpp"
                onClick={() =>
                  deleteAnOpportunity(props.user.id, opportunity.id)
                }
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
        <Button id="showModal" onClick={() => showCreateModal(true)}>
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
