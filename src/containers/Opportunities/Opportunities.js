import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editOpp, setAllOpportunitiesForSpecificUser } from "../../actions";
import {
  deleteAnOpportunity,
  postVolToClient,
  getAllOpportunities,
  getAllOpportunitiesForSpecificUser,
  getReservedOpps
} from "../../util/apiCalls";
import { Link } from "react-router-dom";
import {
  OpportunityCard,
  OpportunitySection,
  PTag,
  Header,
  Button,
  CardSection,
  Container,
  Bold
} from "./OpportunitiesStyled";

export const Opportunities = props => {

  const deleteOpportunity = async (userId, oppId) => {
    let deleted = await deleteAnOpportunity(userId, oppId);
    let allOppsForUser = await getAllOpportunitiesForSpecificUser(
      props.user.id
    );
    props.setAllOpps(allOppsForUser);
  };

  const handlePost = async oppId => {
    await postVolToClient(props.user.id, oppId);
    let allOpps = await getAllOpportunities();
    let userOppIds = await getReservedOpps(props.user.id);
    let rightNums = [];
    userOppIds.forEach(index => rightNums.push(index.opportunity_id));
    let theRightOpps = allOpps.filter(opp => {
      if (rightNums.includes(opp.id)) {
        return opp;
      }
    });
    props.setAllOpps(theRightOpps);
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
    if (
      props.opportunities["0"] !== undefined &&
      props.opportunities["0"].length > 1
    ) {
      iterable = props.opportunities[0];
    } else {
      iterable = props.opportunities;
    }

    return props.userOpps.map(opportunity => {
      console.log(opportunity)
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
              {opportunity.fulfilled && props.role === 'client' && 
                <Bold>Fulfilled</Bold>
              }
            </PTag>
            <PTag>
              <Bold>Estimated Time:</Bold>
              {opportunity.estimated_time}
            </PTag>
          </CardSection>
          {props.role === "volunteer" && (
            <CardSection buttons>
              <Link to="/schedule">
                <Button onClick={() => handlePost(opportunity.id)}>
                  Select
                </Button>
              </Link>
              <Button
                onClick={() => deleteOpportunity(props.user.id, opportunity.id)}
              >
                Client Info
              </Button>
            </CardSection>
          )}
          {props.role === "client" && (
            <CardSection buttons>
              <Button
                id="deleteOpp"
                onClick={() => deleteOpportunity(props.user.id, opportunity.id)}
              >
                Delete
              </Button>
              <Button onClick={props.editOpp}>Edit</Button>
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
  user: state.user,
  userOpps: state.userOpps
});

export const mapDispatchToProps = dispatch => ({
  editOpp: opp => dispatch(editOpp(opp)),
  setAllOpps: opps => dispatch(setAllOpportunitiesForSpecificUser(opps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Opportunities);
