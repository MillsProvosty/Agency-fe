import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Profile.scss";
import Nav from "../Nav/Nav";
import { connect } from 'react-redux';
import Modal from "react-modal";
import {CreateOppModal} from '../CreateOppModal/CreateOppModal'
import { getAllUsers, getAllOpportunities } from "../../util/apiCalls";
import styled from 'styled-components';



const Profile = (props) => {
  console.log('profile', props)
  console.log('role', role)

  const [createModal, showCreateModal] = useState(false);
  return (
    <section className="Profile">
      <Nav />
      <section className="container-dash">
        <Modal isOpen={createModal}>
          <CreateOppModal />
        </Modal>
        <h1>Welcome, booom {props.user.first_name}</h1>
        {role === "client" && <button onClick={() => showCreateModal(true)}>Create an opportunity</button>}
        {role === "volunteer" && <button>Search For Opportunities</button>}
        <button onClick={() => getAllOpportunities()}>Get All Opportunities</button>
      </section>
    </section>
  );
};

export const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Profile);
