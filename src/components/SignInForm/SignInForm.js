import React, { useState } from "react";
import "./SignInForm.scss";
import { FaHandsHelping } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SignUpModal from "../SignUp/SignUpModal";
import Modal from "react-modal";
import styled from "styled-components";
import {
  getSpecificUser,
  getAllOpportunitiesForSpecificUser,
  getAllOpportunities
} from "../../util/apiCalls";
import { useSignInForm } from "../../hooks/useForm";
import { validate } from "../../hooks/signInFormValidationRules";
import { setUser, setError, setUserOpportunities } from "../../actions";
import { connect } from "react-redux";
import floatingImg from "./floating.svg";
import { GiAirBalloon } from "react-icons/gi";

const SignIn = styled.section`
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: aliceblue;
  background-repeat: no-repeat;
  background-size: 1000px;
  background-position: center 10vh;
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
  margin-top: 27vh;
  background-color: white;
  border: 1px solid #37474e;
  -webkit-box-shadow: 9px 10px 5px -10px rgba(55, 71, 78, 1);
  -moz-box-shadow: 9px 10px 5px -10px rgba(55, 71, 78, 1);
  box-shadow: 9px 10px 5px -10px rgba(55, 71, 78, 1);
  border: 1px solid #37474e @media screen and (max-width: 375px) {
    border-right: none;
  }
  @media screen and (display-mode: standalone) {
    border-right: none;
  }
`;

const TitleSection = styled.section`
  display: flex;
  background-color: aliceblue;
  margin-top: 23vh;
  align-items: center;
  width: 80px;
  margin-left: 5%;
`;

const Headers = styled.h1`
  font-size: ${props => (props.title ? "3em" : "6em")};
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

const Logo = styled.button`
  background-color: white;
  border-radius: 50%;
  border: 1px solid #37474e;
`;

const Button = styled.button`
  color: white;
  background-color: #7a86cb;
  border-radius: 5px;
  font-size: 2em;
  width: 175px;
  font-family: "Quicksand", sans-serif;
  border: 2px solid white;

  :hover {
    border: 2px solid #7a86cb;
    color: #7a86cb;
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
  console.log("sign", props);
  const [modalIsOpen, showModal] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { values, errors, handleChange } = useSignInForm(validate);

  const setUser = async e => {
    e.preventDefault();
    try {
      const user = await getSpecificUser(values.email, values.password);
      props.setAUser(user);
      console.log("user", user);
      if (user.role === "volunteer") {
        console.log('in volunteer')
        let opportunities = await getAllOpportunities();
        props.setOpportunities(opportunities);
      } else {
        let opportunities = await getAllOpportunitiesForSpecificUser(user.id);
        props.setOpportunities(opportunities);
      }
    } catch (error) {
      props.setAnError(error);
      setHasError(true);
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
        <Modal className="modal" isOpen={modalIsOpen}>
          <SignUpModal />
        </Modal>
      </ModalStyle>
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
              {props.errors && <p>Please try again!</p>}
              {errors.password && <p>{errors.password}</p>}
              <Button disabled={setDisabled()} onClick={e => setUser(e)}>
                Sign In
              </Button>
            </Form>
          </SignsSection>
          <SignsSection>
            <Headers SignUp>Sign Up</Headers>
            <Button onClick={() => showModal(true)}>Sign Up</Button>
          </SignsSection>
        </Titles>
        <TitleSection header>
          <Logo>
            <GiAirBalloon
              className="hands"
              size={40}
              style={{ color: "#37474e" }}
            />
          </Logo>
          {/* <Headers title>Agency</Headers> */}
        </TitleSection>
      </Container>
    </SignIn>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  role: state.role
});

export const mapDispatchToProps = dispatch => ({
  setAUser: user => dispatch(setUser(user)),
  setAnError: error => dispatch(setError(error)),
  setOpportunities: opportunities =>
    dispatch(setUserOpportunities(opportunities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
