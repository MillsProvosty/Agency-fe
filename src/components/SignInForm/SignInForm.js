import React, { useState, useEffect } from "react";
import "./SignInForm.scss";
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
import { GiAirBalloon } from "react-icons/gi";
import { SignIn, ModalStyle, Container, TitleSection, Titles, SignsSection, Headers, Form, Input, Logo, Button } from './SignInFormStyled' 

export const SignInForm = props => {
  const [modalIsOpen, showModal] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [newOpportunities, setNewOpportunities] = useState(false)


  const { values, errors, handleChange } = useSignInForm(validate);

  const setUser = async e => {
    e.preventDefault();
    try {
      const user = await getSpecificUser(values.email, values.password);
      props.setAUser(user);
      if (user.role === "volunteer") {
        let opportunities = await getAllOpportunities();
        props.setAllOpps(opportunities);
      } else {
        let opportunities = await getAllOpportunitiesForSpecificUser(user.id);
        props.setAllOpps(opportunities);
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

  useEffect(() => {
    if (props.opportunities != ""){
      setNewOpportunities(true)
    } else {
      setNewOpportunities(false)
    }
  }, [props.opportunities])

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
  setAllOpps: opportunities =>
    dispatch(setUserOpportunities(opportunities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
