import React, { useState } from "react";
import "./Profile.scss";
import Nav from "../Nav/Nav";
import Modal from "react-modal";

const Profile = () => {
  const user = {
    firstName: "Confetti",
    lastName: "Hornblower",
    role: "client",
    email: "revare@revarae.com"
  };

  const [createModal, showCreateModal] = useState(false);

  return (
    <section className="Profile">
      <Nav />
      <section className="container-dash">
        <Modal isOpen={createModal}>
          <CreateOppModal />
        </Modal>
        <h1>Welcome {user.firstName}</h1>
        {user.role === "client" && <button onClick={() => showCreateModal(true)}>Create an opportunity</button>}
        {user.role === "volunteer" && <NavLink to="/schedule"><button>Search For Opportunities</button></NavLink>}
      </section>
    </section>
  );
};

export default Profile;
