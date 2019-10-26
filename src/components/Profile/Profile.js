import React, { useState } from "react";
import "./Profile.scss";
import Nav from "../Nav/Nav";
import Modal from "react-modal";

const Profile = () => {
  const user = {
    firstName: "Confetti",
    lastName: "Hornblower",
    role: "client",
    email: ""
  };

  const [createModal, showCreateModal] = useState(false);
  const [searchModal, showSearchModal] = useState(false);

  return (
    <section className="Profile">
      <Nav />
      <section className="container-dash">
        <Modal isOpen={createModal}>
          <CreateOppModal />
        </Modal>
        <Modal isOpen={searchModal}>
          <CreateOppModal />
        </Modal>
        <h1>Welcome {user.firstName}</h1>
        {user.role === "client" && <button onClick={() => showCreateModal(true)}>Search for opportunities</button>}
        {user.role === "volunteer" && <button onClick={() => showSearchModal(true)}>Make another opportunity</button>}
      </section>
    </section>
  );
};

export default Profile;
