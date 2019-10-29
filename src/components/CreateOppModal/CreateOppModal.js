import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { validateCreateOpp } from "../../hooks/signInFormValidationRules";
import { useCreateOppForm } from "../../hooks/useForm";
import { setUserOpportunities } from "../../actions/";
import { postAnOpportunity } from "../../util/apiCalls";
import { connect } from "react-redux";

const CreateOppForm = styled.form`
  margin: 50px auto;
  height: auto;
  background-color: white;
  border: 1px solid #37474e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 20px;
  font-family: "Quicksand", sans-serif;
  color: #7a86cb;

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
  border: 1px solid #37474e;
  padding: 5px;
  width: 300px;
  font-family: "Quicksand", sans-serif;
  margin-top: 10px;
`;

const TextArea = styled.textarea`
  border-radius: 5px;
  font-size: 1.5em;
  height: 3em;
  border: 1px solid #37474e;
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
  background-color: #7a86cb;
  margin-top: 30px

  :hover {
    border: 2px solid #7a86cb;
    color: #7a86cb;
    background-color: white;
  }
`;

export const CreateOppModal = props => {
  const [disabled, setDisabled] = useState(true);
  const { values, handleChange } = useCreateOppForm(validateCreateOpp);

  function setSetDisabled() {
    if (!values.error) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  const createOpp = async () => {
    let newOpp = await postAnOpportunity(props.user.id, values);
    props.addOpp(newOpp);
  };

  useEffect(() => {
    validateCreateOpp(values);
    if (!values.error) {
      setSetDisabled();
    }
  }, [values]);

  return (
    <CreateOppForm>
      <PTag>Add an Opportunity For Our Community!</PTag>
      <Input
        type="text"
        placeholder="Enter a Title"
        name="title"
        value={values.title || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <Input
        type="text"
        placeholder="Enter an Amount of Time"
        name="time"
        value={values.time || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <Input
        type="text"
        placeholder="Enter an Address for the Event"
        name="address"
        value={values.address || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <Input
        type="text"
        placeholder="Enter a Type: i.e. Physical labor"
        name="type"
        value={values.type || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <TextArea
        type="text"
        placeholder="Enter a Description"
        name="description"
        value={values.description || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <Link to="/schedule">
        <Button disabled={disabled} onClick={createOpp}>
          Submit!
        </Button>
      </Link>
    </CreateOppForm>
  );
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  addOpp: opp => dispatch(setUserOpportunities(opp))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOppModal);
