import React, { Component } from "react";
import "./SignUpModal.scss";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SignUpForm = styled.form`
  margin: 50px auto;
  height: auto;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 20px;
  font-family: "Quicksand", sans-serif;
  color: darkblue;
  
  @media screen and (max-width: 375px) {
    margin: 130px 4px;
    height: auto;
    width: 98%;
    padding: 10px;
}

@media screen and (display-mode: standalone) {
    margin: 130px 4px;
    height: auto;
    width: 98%;
    padding: 10px;
}
`

const PTag = styled.p`
  font-size: 2em;
`

const Input = styled.input`
  border-radius: 5px;
  font-size: 1.5em;
  height: 2em;
  border: 1px solid darkgrey;
  padding: 5px;
  width: 300px;
  font-family: 'Quicksand', sans-serif;
  margin-top: 10px;
`

const Button = styled.button`
  border-radius: 5px;
  font-size: 1.5em;
  height: 2em;
  padding: 5px;
  width: 300px;
  font-family: 'Quicksand', sans-serif;
  margin-top: 10px;
  border: 2px solid white;
  color: white;
  background-color: darkblue;
  margin-top: 30px

  :hover {
  border: 2px solid darkblue;
  color: darkblue;
  background-color: white;
  }
`

export class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SignUpForm>
        <PTag>Thanks for Signing Up!</PTag>
        <Input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={this.state.name}
        />
        <Input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={this.state.email}
        />
        <Input
          type="text"
          placeholder="Enter your phone"
          name="phone"
          value={this.state.phone}
        />
        <Input
          type="text"
          placeholder="Enter your password"
          name="password"
          value={this.state.password}
        />
        <Input
          type="text"
          placeholder="Confirm your password"
          name="confirmation"
          value={this.state.confirmation}
        />
        <Link to="/profile">
          <Button>Submit!</Button>
        </Link>
      </SignUpForm>
    );
  }
}
