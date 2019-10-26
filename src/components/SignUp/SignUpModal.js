import React, { useState, useEffect } from "react";
import "./SignUpModal.scss";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {validate} from '../../hooks/signInFormValidationRules';
import { useSignInForm } from '../../hooks/useForm';
import { postAUser } from '../../util/apiCalls';
import { setUser } from '../../actions';
import { connect } from "react-redux";

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

export const SignUpModal = (props) => {
  const [ disabled, setDisabled ] = useState(true)
  const { values, handleChange } = useSignInForm(validate);

  const setUser = async (values) => {
    try {
      const user = await postAUser(values)
      props.setAUser(user)
    } catch(error) {
      console.log(error)
    }
  }
  
  function setSetDisabled() {
    if (!values.error) {
      setDisabled(false)
    } else {
      setDisabled(true);
    }
  }

  useEffect(() => {
      validate(values)
      if(!values.error){
        setSetDisabled()
      }
    }, [values]);

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
        <Button disabled={disabled} onClick={() => setUser(values)}>Submit!</Button>
      </Link>
    </SignUpForm>
  );
};

export const mapDispatchToProps = dispatch => ({
  setAUser: user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(SignUpModal)
