import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import CreateOppModal from "../../components/CreateOppModal/CreateOppModal";
import { editOpp } from "../../actions";
import { deleteAnOpportunity } from "../../util/apiCalls";

export const Opportunities = props => {
  console.log('opps', props)

  const deleteOpportunity = async (userId, oppId) => {
    await deleteAnOpportunity(userId, oppId)
  }
  
  const displayOpp = () => {
    return props.opportunities.map(opportunity => {
      return (
        <section key={opportunity.id}>
          {props.role === "client" && <button onClick={() => deleteOpportunity(props.user.id, opportunity.id)}>DELETE</button>}
          <button onClick={props.editOpp}>edit</button>
          <p>{opportunity.title}</p>
          <p>{opportunity.type}</p>
          <p>{opportunity.description}</p>
          <p>{opportunity.location}</p>
          <p>{opportunity.estimated_time}</p>
        </section>
      );
    });
  };

  const [createModal, showCreateModal] = React.useState(false);

  return (
    <section className="container-dash">
      <Modal isOpen={createModal}>
        <CreateOppModal />
      </Modal>
      {props.role === "client" && (
        <button onClick={() => showCreateModal(true)}>
          Create an opportunity
        </button>
      )}
      {props.role === "volunteer" && <button>Search For Opportunities</button>}
      {displayOpp()}
    </section>
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
