import React, { useState } from "react";
import "./SignInForm.scss";
import { FaHandsHelping } from "react-icons/fa";
import { Route, NavLink, Redirect } from "react-router-dom";
import Profile from "../Profile/Profile";
import SignUpModal from "../SignUp/SignUpModal";
import Modal from "react-modal";
import styled from "styled-components";
import { getSpecificUser } from "../../util/apiCalls";
import { useSignInForm } from "../../hooks/useForm";
import { validate } from "../../hooks/signInFormValidationRules";
import { setUser } from "../../actions";
import { connect } from "react-redux";
import floatingImg from "./floating.svg";

const SignIn = styled.section`
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: aliceblue;
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
  background-image: url(${floatingImg});
`;

const ModalStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.section`
  width: 100%;
`;

const Titles = styled.section`
  display: flex;
  @media screen and (max-width: 375px) {
    display: ${props => (props.second ? "block" : "flex")}
    margin: ${props => (props.second ? "0px 50%" : "none")}
  }
  @media screen and (display-mode: standalone) {
    display: block;
    margin: 0px 50%;
  }

`;

const SignsSection = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vh;
  background-color: white;
  border: 1px solid #37474E
  @media screen and (max-width: 375px) {
    border-right: none;
  }
  @media screen and (display-mode: standalone) {
    border-right: none;
  }
`;

const Headers = styled.h1`
  font-size: 6em;
  margin: 0px;
  display: flex;
  align-content: flex-start;
  @media screen and (max-width: 375px) {
    font-size: 3rem;
    padding: 0px 5px;
    margin-bottom: 20px;
    display: ${props => (props.SignUp ? "none" : "flex")};
  }
  @media screen and (display-mode: standalone) {
    font-size: 3rem;
    padding: 0px 5px;
    margin-bottom: 20px;
    display: ${props => (props.SignUp ? "none" : "flex")};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  @media screen and (max-width: 375px) {
    border-bottom: 2px solid #37474e;
    padding-bottom: 30px;
    margin-top: 20px;
  }
  @media screen and (display-mode: standalone) {
    border-bottom: 2px solid #37474e;
    padding-bottom: 30px;
    margin-top: 20px;
  }
`;

const Input = styled.input`
  display: block;
  width: 175px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 1em;
  height: 2em;
  border: 1px solid darkgrey;
  padding: 5px;
`;

const Button = styled.button`
  color: white;
  background-color: #37474e;
  border-radius: 5px;
  font-size: 2em;
  width: 175px;
  font-family: "Quicksand", sans-serif;
  border: 2px solid white;

  :hover {
    border: 2px solid #37474e;
    color: #37474e;
    background-color: white;
  }

  @media screen and (max-width: 375px) {
    margin-top: 10px;
  }

  @media screen and (display-mode: standalone) {
    margin-top: 10px;
  }
`;

export const SignInForm = props => {
  const [modalIsOpen, showModal] = useState(false);

  const { values, errors, handleChange } = useSignInForm(validate);

  const setUser = async () => {
    try {
      const user = await getSpecificUser();
      props.setAUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  function setDisabled() {
    if (!Object.keys(errors).length && values.password && values.email) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <SignIn>
      <ModalStyle>
        <Modal isOpen={modalIsOpen}>
          <SignUpModal />
        </Modal>
      </ModalStyle>
      <FaHandsHelping className="hands-form" size={64} />
      <Container>
        <Titles second>
          <SignsSection sign>
            <Form>
              <Headers>Sign In</Headers>
              <Input
                autoComplete="off"
                tabIndex={0}
                type="email"
                value={values.email || ""}
                name="email"
                placeholder="example@email.com"
                onChange={handleChange}
                required
              />
              {errors.email && <p>{errors.email}</p>}
              <Input
                autoComplete="off"
                tabIndex={0}
                type="text"
                value={values.password || ""}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              {errors.password && <p>{errors.password}</p>}
              <NavLink
                to="/profile"
                tabIndex={0}
                style={{ textDecoration: "none" }}
              >
                <Button disabled={setDisabled()} onClick={setUser}>
                  Sign In
                </Button>
              </NavLink>
            </Form>
          </SignsSection>
          <SignsSection>
            <Headers SignUp>Sign Up</Headers>
            <Button onClick={() => showModal(true)}>Sign Up</Button>
          </SignsSection>
        </Titles>
      </Container>
    </SignIn>
  );
};

export const mapDispatchToProps = dispatch => ({
  setAUser: user => dispatch(setUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignInForm);
