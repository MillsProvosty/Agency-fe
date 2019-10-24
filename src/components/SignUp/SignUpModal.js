import React, { useState } from "react";
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

export const SignUpModal = () => {
  const [inputValue, handleChangesInState] = useState({
    name: "",
    phone: null,
    email: "",
    password: "",
    confirmation: ""
  });

  const [errorValue, showError] = useState("");

  const handleClick = e => {
    e.preventDefault();
 
  };

  const handleChange = e => {
    e.preventDefault();
    handleChangesInState({ ...inputValue, [e.target.name]: e.target.value });
    doTheyMatch();
  };

  const doTheyMatch = () => {
    if (inputValue.password === inputValue.confirmation) {
      showError("");
    } else {
      showError("Passwords Do Not Match");
    }
  };

  
  return (
    <form className="SignUpModal">
      <p>Thanks for Signing Up!</p>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        value={inputValue.name}
        onChange={e => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Enter your email"
        name="email"
        value={inputValue.email}
        onChange={e => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Enter your phone"
        name="phone"
        value={inputValue.phone}
        onChange={e => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Enter your password"
        name="password"
        value={inputValue.password}
        onChange={e => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Confirm your password"
        name="confirmation"
        value={inputValue.confirmation}
        onChange={e => handleChange(e)}
      />
      {errorValue && <p>{errorValue}</p>}
      <Link to="/profile">
        <button onClick={e => handleClick(e)} disabled={!errorValue}>
          Submit!
        </button>
      </Link>
    </form>
  );
};
