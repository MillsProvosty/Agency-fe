import React, { useState } from "react";
import "./SignInForm.scss";
import { NavLink } from "react-router-dom";
import SignUpModal from "../SignUp/SignUpModal";
import Modal from "react-modal";
import { getSpecificUser } from "../../util/apiCalls";
import { useSignInForm } from "../../hooks/useForm";
import { validate } from "../../hooks/signInFormValidationRules";
import { setUser } from "../../actions";
import { connect } from "react-redux";
import { GiAirBalloon } from "react-icons/gi";
import { SignIn, ModalStyle, Container, TitleSection, Titles, SignsSection, Headers, Form, Input, Logo, Button } from './SignInFormStyled' 

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
              {errors.password && <p>{errors.password}</p>}
              <NavLink
                to="/profile"
                tabIndex={0}
                style={{ textDecoration: "none" }}
              >
                <Button id='sign-in'disabled={setDisabled()} onClick={setUser}>
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
        <TitleSection header>
          <Logo>
            <GiAirBalloon className="hands" size={40} style={{ color: "#37474e" }}/>
          </Logo>
          {/* <Headers title>Agency</Headers> */}
        </TitleSection>
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
