import React, { useState, useEffect } from "react";
import "./SignInForm.scss";
import { NavLink } from "react-router-dom";
import SignUpModal from "../SignUp/SignUpModal";
import Modal from "react-modal";
import {
  getSpecificUser,
  getAllOpportunitiesForSpecificUser,
  getAllOpportunities,
  getReservedOpps
} from "../../util/apiCalls";
import { useSignInForm } from "../../hooks/useForm";
import { validate } from "../../hooks/signInFormValidationRules";
import {
  setUser,
  setError,
  setAllOpportunities,
  setAllOpportunitiesForSpecificUser,
} from "../../actions";
import { connect } from "react-redux";
import { GiAirBalloon } from "react-icons/gi";

import {
  SignIn,
  ModalStyle,
  Container,
  TitleSection,
  Titles,
  SignsSection,
  Headers,
  Form,
  Input,
  Logo,
  Button,
  PTag
} from "./SignInFormStyled";

export const SignInForm = props => {
  const [modalIsOpen, showModal] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [newOpportunities, setNewOpportunities] = useState(false);

  const { values, errors, handleChange } = useSignInForm(validate);

  const setUser = async e => {
    e.preventDefault();
    try {
      const user = await getSpecificUser(values.email, values.password);
      props.setAUser(user);
      if (user.role === "volunteer") {
        let opportunities = await getAllOpportunities();
        let userOppIds = await getReservedOpps(user.id);
        let rightNums = [];
        userOppIds.forEach(index => rightNums.push(index.opportunity_id));
        let theRightOpps = opportunities.filter(opp => {
          if (rightNums.includes(opp.id)) {
            return opp;
          }
        });
        props.setAllOpps(opportunities);
        props.setUserOpps(theRightOpps);
      } else {
        let opportunities = await getAllOpportunitiesForSpecificUser(user.id);
        props.setUserOpps(opportunities);
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
    if (props.opportunities != "") {
      setNewOpportunities(true);
    } else {
      setNewOpportunities(false);
    }
  }, [props.opportunities]);

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
              {errors.email && <PTag>{errors.email}</PTag>}
              <Input
                autoComplete="off"
                tabIndex={0}
                type="password"
                value={values.password || ""}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              {props.errors && <PTag>Please try again!</PTag>}
              {errors.password && <PTag>{errors.password}</PTag>}
              <Button
                id="sign-in"
                disabled={setDisabled()}
                onClick={e => setUser(e)}
              >
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
  setAllOpps: opportunities => dispatch(setAllOpportunities(opportunities)),
  setUserOpps: opportunities =>
    dispatch(setAllOpportunitiesForSpecificUser(opportunities))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
