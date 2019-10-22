import React, { Component } from "react";
import "./SignUpModal.scss";
import { Link } from "react-router-dom";

export class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className="SignUpModal">
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
        <Link to="/profile">
          <button>Submit!</button>
        </Link>
      </form>
    );
  }
}
