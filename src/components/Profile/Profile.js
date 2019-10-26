import React, { useState } from "react";
import "./Profile.scss";
import Nav from "../Nav/Nav";
<<<<<<< HEAD
import Modal from "react-modal";

const Profile = () => {
  const user = {
    firstName: "Confetti",
    lastName: "Hornblower",
    role: "client",
    email: "revare@revarae.com"
  };

  const [createModal, showCreateModal] = useState(false);

=======
import { connect } from 'react-redux';

const Profile = (props) => {
>>>>>>> dc2d0ef99e0543fcff03e5271bb55ff2eb8fd5d4
  return (
    <section className="Profile">
      <Nav />
      <section className="container-dash">
<<<<<<< HEAD
        <Modal isOpen={createModal}>
          <CreateOppModal />
        </Modal>
        <h1>Welcome {user.firstName}</h1>
        {user.role === "client" && <button onClick={() => showCreateModal(true)}>Create an opportunity</button>}
        {user.role === "volunteer" && <NavLink to="/schedule"><button>Search For Opportunities</button></NavLink>}
=======
        <p>Hello {props.user.first_name}</p>
>>>>>>> dc2d0ef99e0543fcff03e5271bb55ff2eb8fd5d4
      </section>
    </section>
  );
};

export const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Profile);
