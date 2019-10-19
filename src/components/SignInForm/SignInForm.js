import React, { Component } from "react";
import "./SignInForm.scss";
import { FaHandsHelping } from "react-icons/fa";
import { NavLink, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

export class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

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
    return (
      <section className="SignInForm">
        <FaHandsHelping size={64}/>
        <section className="container">
          <section className="sign-in">
            <h1>Sign In</h1>
            <form>
              <input
                type="text"
                value={this.state.email}
                name="email"
                placeholder="example@email.com"
                onChange={this.handleChange}
              />
              <input
                type="text"
                value={this.state.password}
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <button onClick={this.displayDashboard}>Sign In</button>
            </form>
          </section>
          {/* <p>or..</p> */}
          <section className="sign-up">
            <h1>Sign Up</h1>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </section>
        </section>
      </section>
    );
  }
}
