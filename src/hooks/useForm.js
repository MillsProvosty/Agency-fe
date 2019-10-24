import { useState, useEffect } from "react";

export const useSignInForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log('errors', errors)
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(validate(values))
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};
