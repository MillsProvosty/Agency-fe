import React, { useState, useEffect } from "react";
import "./SignUpModal.scss";
import { Link } from "react-router-dom";
import { validate } from "../../hooks/signInFormValidationRules";
import { useSignInForm } from "../../hooks/useForm";
import { postAUser, getAllOpportunities, getAllOpportunitiesForSpecificUser } from "../../util/apiCalls";
import { setUser, setOpps } from "../../actions";
import { connect } from "react-redux";
import { SignUpForm, PTag, Input, Button } from './SignUpModalStyled';

export const SignUpModal = props => {
  const [disabled, setDisabled] = useState(true);
  const [newOpportunities, setNewOpportunities] = useState(false)
  const { values, handleChange } = useSignInForm(validate);

  const setUserInRedux = async (e, values) => {
    e.preventDefault()
    try {
      let allValues = {
        ...values,
        role: props.role
      }
      let newUser = await postAUser(allValues);
      let allValuesAndId = {
        ...allValues,
        id: newUser.id
      }
      props.setAUser(allValuesAndId);
      if (allValues.role === 'volunteer'){
        let allOpps = await getAllOpportunities();
        props.setAllOpps(allOpps)
        console.log('UP ALL OPPS', allOpps)
      } else {
        let userOpps = await getAllOpportunitiesForSpecificUser(allValuesAndId.id)
        console.log('clientj', userOpps)
        props.setAllOpps(userOpps)
      }
    } catch (error) {
      console.log(error);
    }
  };

  function setSetDisabled() {
    if (!values.error) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  useEffect(() => {
    validate(values);
    if (!values.error) {
      setSetDisabled();
    }
  }, [values]);

  useEffect(() => {
    if (props.opportunities){
      setNewOpportunities(true)
    } else {
      props.opportunities(false)
    }
  }, [props.opportunities])

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
        <Button disabled={disabled} onClick={(e) => setUserInRedux(e, values)}>
          Submit!
        </Button>
    </SignUpForm>
  );
};

export const mapStateToProps = state => ({
  role: state.role,
  opportunities: state.opportunities
})

export const mapDispatchToProps = dispatch => ({
  setAUser: (user) => dispatch(setUser(user)),
  setAllOpps: (opps) => dispatch(setOpps(opps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpModal);
