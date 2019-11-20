import { useState } from "react";

export const useSignInForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(validate(values));
  };

  return {
    handleChange,
    values,
    errors
  }
};

export const useCreateOppForm = (validateCreateOpp) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(validateCreateOpp(values));
  };

  return {
    handleChange,
    values,
    errors
  }
};

export const useEditNameForm = (validateEditName) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(validateEditName(values));
  };

  return {
    handleChange,
    values,
    errors
  }
};