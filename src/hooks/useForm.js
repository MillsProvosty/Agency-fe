import { useState, useEffect } from "react";

export const useSignInForm = (validate) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    password: '',
    error: '',
    confirmation: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    validate(values);
  };

  return {
    handleChange,
    values,
    errors
  }
};
