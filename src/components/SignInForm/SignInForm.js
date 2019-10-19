import React, { Component } from "react";
import "./SignInForm.css";
import { FaHandsHelping } from "react-icons/fa";

export class SignInForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section>
        <section>
          <h1>Sign In</h1>
          <input
            type="text"
            value={this.state.email}
            name="email"
            placeholder="example@email.com"
            onChange={this.handleChage}
          />
          <input
            type="text"
            value={this.state.password}
            name="password"
            placeholder="example@email.com"
            onChange={this.handleChage}
          />
        </section>
        <section>
            <h1>Sign Up</h1>
            <button>Sign Up</button>
        </section>
      </section>
    );
  }
}
