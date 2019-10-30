import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import CreateOppModal from "../../components/CreateOppModal/CreateOppModal";
import { editOpp, setOpps } from "../../actions";
import { deleteAnOpportunity, postVolToClient, getAllOpportunities, getAllOpportunitiesForSpecificUser } from "../../util/apiCalls";
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
    let deleted = await deleteAnOpportunity(userId, oppId);
    let allOppsForUser = await getAllOpportunitiesForSpecificUser(props.user.id)
    props.setAllOpps(allOppsForUser)
    console.log(allOppsForUser)
  };

  const [opportunities, setOpportunities] = useState(false);
  useEffect(() => {
    if (props.opportunities.length > 0) {
      setOpportunities(true);
    } else {
      setOpportunities(false);
    }
  }, [props.opportunities]);

  const displayOpp = () => {
    let iterable;

    if (props.opportunities['0'] !== undefined && props.opportunities['0'].length > 1) {
      iterable = props.opportunities[0];
    } else {
      iterable = props.opportunities;
    }

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
                  deleteOpportunity(props.user.id, opportunity.id)
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
                  deleteOpportunity(props.user.id, opportunity.id)
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

  return (
    <OpportunitySection>
      <Container>{displayOpp()}</Container>
    </OpportunitySection>
  );
};

export const mapStateToProps = state => ({
  opportunities: state.opportunities,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  editOpp: opp => dispatch(editOpp(opp)),
  setAllOpps: (opps) => dispatch(setOpps(opps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Opportunities);
