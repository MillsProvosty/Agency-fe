import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import { connect } from "react-redux";
import { setAllOpportunities } from "../../actions";
import Opportunities from "../Opportunities/Opportunities";
import ProfileOpportunities from "../../components/ProfileOpportunities/ProfileOpportunities";
import { ProfileSection, Header } from "./ProfileStyled";
import CreateOppModal from "../../components/CreateOppModal/CreateOppModal";
import Modal from "react-modal";
import styled from "styled-components";
import { useEditNameForm } from "../../hooks/useForm";
import { validateEditName } from "../../hooks/signInFormValidationRules";
import { patchAUser } from "../../util/apiCalls";

export const ModalStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  color: white;
  background-color: #37474e;
  border-radius: 5px;
  font-size: 1em;
  width: 250px;
  padding: 5px;
  font-family: "Quicksand", sans-serif;
  border: 2px solid white;
  margin-right: ${props => (props.volunteer ? "20px" : "0px")};
  margin-left: ${props => (props.client ? "20px" : "0px")} @media screen and
    (max-width: 375px) {
    margin: ${props =>
      props.client ? "20px 0px 0px 0px" : "50px 20px 0px 0px"};
  }

  :hover {
    border: 2px solid #37474e;
    color: #37474e;
    background-color: white;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  font-size: 1.5em;
  height: 2em;
  border: 1px solid #37474e;
  padding: 5px;
  width: 300px;
  font-family: "Quicksand", sans-serif;
  margin-top: 10px;
`;

export const Profile = props => {
  console.log(props.user);
  const [isLoading, setLoading] = useState(true);
  const [createModal, showCreateModal] = React.useState(false);
  const [showOpps, setShowOpps] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const { values, handleChange } = useEditNameForm(validateEditName);
  console.log("values", values);

  const { user } = props;
  const getUserOpp = async () => {
    setLoading(false);
  };

  useEffect(() => {
    getUserOpp();
  }, []);

  const handleClick = async () => {
    console.log("here are the values", values);
    let newValues = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: user.email,
      phone: user.phone_number,
      password: values.password
    };
    patchAUser(user.id, newValues);
  };

  return (
    <ProfileSection className="Profile">
      <Nav />
      {isLoading && <p>I am loading</p>}
      {!isLoading && user.role === "client" && (
        <>
          <Header>Welcome, {user.first_name}</Header>
          <Button id="showModal" onClick={() => showCreateModal(true)}>
            Create An Opportunity
          </Button>
          <Button onClick={() => setShowEditForm(true)}>
            Edit Your Settings
          </Button>
          <ModalStyle>
            <Modal isOpen={createModal} className="modal">
              <CreateOppModal />
            </Modal>
          </ModalStyle>
        </>
      )}
      {!isLoading && user.role === "volunteer" && (
        <>
          <Header>Welcome, {user.first_name}</Header>
          <Button onClick={() => setShowOpps(true)}>
            Search For Opportunities
          </Button>
          <Button onClick={() => setShowEditForm(true)}>
            Edit Your Settings
          </Button>
          {showOpps && <ProfileOpportunities role={user.role} />}
        </>
      )}
      {showEditForm && (
        <>
          <Input
            type="text"
            placeholder={user.first_name}
            name="firstName"
            value={values.firstName || ""}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <Input
            type="text"
            placeholder={user.last_name}
            name="lastName"
            value={values.lastName || ""}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <Input
            type="text"
            placeholder={user.password}
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <Button onClick={handleClick}>Submit</Button>
        </>
      )}
    </ProfileSection>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  opportunities: state.opportunities
});

export const mapDispatchToProps = dispatch => ({
  setOpportunities: opportunities =>
    dispatch(setAllOpportunities(opportunities))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
