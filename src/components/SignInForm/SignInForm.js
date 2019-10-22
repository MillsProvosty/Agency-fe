import React, { Component } from "react";
import "./SignInForm.scss";
import { FaHandsHelping } from "react-icons/fa";
import { NavLink, Route, Link } from "react-router-dom";
import Dashboard from "../Profile/Profile";
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

  displayDashboard = e => {
    e.preventDefault();
    return (
      <main>
        <Route
          exact
          path="/dashboard"
          render={() => <Dashboard props={"user info here"} />}
        />
      </main>
    );
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // if (this.state.showSignUp) {
    //   modal = (
    //     <Route
    //       exact
    //       path="/user-form"
    //       render={() => <SignUpModal props={this.state.userType} />}
    //     />
    //   );
    // }
    return (
      <section className="SignInForm">
        <section className="modal">
          <Modal isOpen={this.state.modalIsOpen} displayDashboard={this.displayDashboard} className="react-modal">
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
