import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import CreateOppModal from "../../components/CreateOppModal/CreateOppModal";
import { editOpp } from "../../actions";

export const Opportunities = props => {
  
  const displayOpp = () => {
    return props.opportunities.map(opportunity => {
      return (
        <section key={opportunity.id}>
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
  opportunities: state.opportunities
});

export const mapDispatchToProps = dispatch => ({
  editOpp: opp => dispatch(editOpp(opp))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Opportunities);
