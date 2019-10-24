import React, { useState } from "react";
import "./SignUpModal.scss";
import { Link } from "react-router-dom";

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
