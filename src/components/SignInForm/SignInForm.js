import React, { Component } from "react";
import "./SignInForm.scss";
import { FaHandsHelping } from "react-icons/fa";
import { Route, Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import { SignUpModal } from "../SignUp/SignUpModal";
import Modal from "react-modal";
import styled from "styled-components";

const SignIn = styled.section`
  height: auto;
  background-color: white;
  justify-content: center;
`;

const ModalStyle = styled.section`
  margin-top: 50px;
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
`;

const SignsSection = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  border-right: ${props => (props.sign ? "1px solid darkblue" : "none")};
`;

const Headers = styled.h1`
font-size: 6em;
margin: 0px;
  display: flex;
  align-content: flex-start;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  background-color: darkblue;
  border-radius: 5px;
  font-size: 2em;
  width: 175px;
  font-family: "Quicksand", sans-serif;
  border: 2px solid white;

  :hover {
    border: 2px solid darkblue;
    color: darkblue;
    background-color: white;
  }
`;

export class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      modalIsOpen: false
    };
  }

  displayModal = () => {
    this.setState({ modalIsOpen: true });
  };

  displayProfile = e => {
    e.preventDefault();
    return (
      <main>
        <Route
          exact
          path="/profile"
          render={() => <Profile props={"user info here"} />}
        />
      </main>
    );
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SignIn className="SignInForm">
        <ModalStyle className="modal">
          <Modal
            isOpen={this.state.modalIsOpen}
            displayProfile={this.displayProfile}
            className="react-modal"
          >
            <SignUpModal />
          </Modal>
        </ModalStyle>
        <FaHandsHelping size={64} />
        <Container className="container">
          <Titles className="titles">
            <Headers id="sign-in-header">Sign In</Headers>
            <Headers id="sign-up-header">Sign Up</Headers>
          </Titles>
          <Titles className="forms">
            <SignsSection sign className="sign-in">
              <Form>
                <Input
                  tabIndex={0}
                  type="text"
                  value={this.state.email}
                  name="email"
                  placeholder="example@email.com"
                  onChange={this.handleChange}
                />
                <Input
                  tabIndex={0}
                  type="text"
                  value={this.state.password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <Link
                  to="/profile"
                  tabIndex={0}
                  style={{ textDecoration: "none" }}
                >
                  <Button>Sign In</Button>
                </Link>
              </Form>
            </SignsSection>
            <SignsSection className="sign-up">
              <Button onClick={this.displayModal}>Sign Up</Button>
            </SignsSection>
          </Titles>
        </Container>
      </SignIn>
    );
  }
}
