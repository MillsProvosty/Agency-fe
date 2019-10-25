import React, { useState, useEffect } from "react";
import "./SignUpModal.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSignInForm } from "../../hooks/useForm";
import validate from "../../hooks/signInFormValidationRules";
import  {postAUser}  from "../../util/apiCalls";

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
`;

const PTag = styled.p`
  font-size: 2em;
`;

const Input = styled.input`
  border-radius: 5px;
  font-size: 1.5em;
  height: 2em;
  border: 1px solid darkgrey;
  padding: 5px;
  width: 300px;
  font-family: "Quicksand", sans-serif;
  margin-top: 10px;
`;

const Button = styled.button`
  border-radius: 5px;
  font-size: 1.5em;
  height: 2em;
  padding: 5px;
  width: 300px;
  font-family: "Quicksand", sans-serif;
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
`;

export const SignUpModal = () => {
  const [errorValue, showError] = useState("");

  const handleClick = e => {
    e.preventDefault();
  };

  // const handleChange = e => {
  //   e.preventDefault();
  //   handleChangesInState({ ...inputValue, [e.target.name]: e.target.value });
  //   doTheyMatch();
  // };

  const { values, errors, handleChange } = useSignInForm(validate);

  function setDisabled() {
    console.log("errors", values.error);
    console.log("values", values);

    if (!values.error) {
      console.log("false");
      return false;
    } else {
      console.log("true");
      return true;
    }
  }

  useEffect(
  
    () => {
      validate(values)
      if(!values.error){
        console.log('hooray mills is here')
        setDisabled()
      }
    },
    [values]
  );

  // const doTheyMatch = () => {
  //   if (inputValue.password === inputValue.confirmation) {
  //     showError("");
  //   } else {
  //     showError("Passwords Do Not Match");
  //   }
  // };
console.log('these are values', values)
  return (
    <SignUpForm className="SignUpModal">
      <PTag>Thanks for Signing Up!</PTag>
      <Input
        type="text"
        placeholder="Enter your First name"
        name="firstname"
        value={values.firstname || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
       <Input
        type="text"
        placeholder="Enter your Last name"
        name="lastname"
        value={values.lastname || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <Input
        type="text"
        placeholder="Enter your email"
        name="email"
        value={values.email || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <Input
        type="text"
        placeholder="Enter your phone"
        name="phone"
        value={values.phone || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <Input
        type="text"
        placeholder="Enter your password"
        name="password"
        value={values.password || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <Input
        type="text"
        placeholder="Confirm your password"
        name="confirmation"
        value={values.confirmation || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      {/* {errors && <p>{errors}</p>} */}
      <Link to="/profile">
        <Button disabled={setDisabled()} onClick={() => postAUser(values)}>Submit!</Button>
      </Link>
    </SignUpForm>
  );
};
