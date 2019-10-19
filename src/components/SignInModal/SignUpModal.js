import React, { Component } from "react";
import "./SignUpModal.css";
import { FaHandsHelping } from "react-icons/fa";

export class SignUpModal extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <form>
        <p>Thanks for Signing Up!</p>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={this.state.name}
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={this.state.email}
        />
        <input
          type="text"
          placeholder="Enter your phone"
          name="phone"
          value={this.state.phone}
        />
        <input
          type="text"
          placeholder="Enter your password"
          name="password"
          value={this.state.password}
        />
        <input
          type="text"
          placeholder="Confirm your password"
          name="confirmation"
          value={this.state.confirmation}
        />
        <button>Submit!</button>
      </form>
    );
    //pronouns
    //language
  }
}
