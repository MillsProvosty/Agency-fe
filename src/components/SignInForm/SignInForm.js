import React, { Component } from "react";
import "./SignInForm.scss";
import { FaHandsHelping } from "react-icons/fa";
import { Route, Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import { SignUpModal } from "../SignUp/SignUpModal";
import Modal from "react-modal";

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
      <section className="SignInForm">
        <section className="modal">
          <Modal isOpen={this.state.modalIsOpen} displayProfile={this.displayProfile} className="react-modal">
            <SignUpModal />
          </Modal>
        </section>
        <FaHandsHelping size={64} />
        <section className="container">
          <section className="titles">
            <h1 id='sign-in-header'>Sign In</h1>
            <h1 id='sign-up-header'>Sign Up</h1>
          </section>
          <section className="forms">
            <section className="sign-in">
              <form>
                <input
                  tabIndex={0}
                  type="text"
                  value={this.state.email}
                  name="email"
                  placeholder="example@email.com"
                  onChange={this.handleChange}
                />
                <input
                  tabIndex={0}
                  type="text"
                  value={this.state.password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <Link to="/profile" tabIndex={0} style={{ textDecoration: 'none' }}>
                  <button>Sign In</button>
                </Link>
                <NavLink to="/user-dashboard">
                  <button>Sign In</button>
                </NavLink>
              </form>
            </section>
            <section className="sign-up">
              <button onClick={this.displayModal}>Sign Up</button>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
