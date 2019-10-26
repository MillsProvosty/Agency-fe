export default function validate(values) {
  let errors = {};
  if (!values.email) {
    values.error = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    values.error = "Email address is invalid";
  } else if (!values.password) {
    values.error = "Password is required";
  } else if (values.password.length < 7) {
    values.error = "Password must be 8 or more characters";
  } else if (!values.phone) {
    values.error = "Phone number is required";
  } else if (values.phone.length < 10 && typeof values.phone === "number") {
    values.error = "Phone number must be valid";
  } else if (!values.firstname) {
    values.error = "Name is required";
  } else if (!values.lastname) {
    values.error = "Name is required";
  } else if (!values.confirmation) {
    values.error = "Please confirm your password matches";
  } else if (values.confirmation !== values.password) {
    values.error = "Please confirm your password matches";
  } else {
    values.error = "";
  }

  return errors;
}

export default function validateCreateOpp(values) {
  let errors = {};
  if (!values.time) {
    values.error = "Time is required";
  }else if (!values.address) {
    values.error = "Address is required";
  }else if (!values.description) {
    values.error = "Description is required";
  } else {
    values.error = ""
  }
  return errors
}