import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {validateCreateOpp} from "../../hooks/signInFormValidationRules";
import {useCreateOppForm} from "../../hooks/useForm";

export const CreateOppModal = () => {

  const [ disabled, setDisabled ] = useState(true)
  const { values, handleChange } = useCreateOppForm(validateCreateOpp);

  function setSetDisabled() {
    if (!values.error) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  useEffect(() => {
    validateCreateOpp(values);
    if (!values.error) {
      setSetDisabled();
    }
  }, [values]);

  return (
    <section>
      <input
        type="text"
        placeholder="Enter a Title"
        name="title"
        value={values.title || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <input
        type="text"
        placeholder="Enter an Amount of Time"
        name="time"
        value={values.time || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <input
        type="text"
        placeholder="Enter an Address for the Event"
        name="address"
        value={values.address || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <textarea
        type="text"
        placeholder="Enter an Address for the Event"
        name="description"
        value={values.description || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <Link to="/schedule">
        <button disabled={disabled}>Submit!</button>
      </Link>
    </section>
  );
};

