import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { validateCreateOpp } from "../../hooks/signInFormValidationRules";
import { useCreateOppForm } from "../../hooks/useForm";
import { setUserOpportunities, addUserOpp, setAllOpps } from "../../actions/";
import { postAnOpportunity } from "../../util/apiCalls";
import { connect } from "react-redux";
import { CreateOppForm, PTag, Input, TextArea, Button } from './CreateOppModalStyled'

export const CreateOppModal = props => {
  const [disabled, setDisabled] = useState(true);
  const [newValue, setNewValue] = useState(false)
  const { values, handleChange } = useCreateOppForm(validateCreateOpp);

  function setSetDisabled() {
    if (!values.error) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  const createOpp = async () => {
    let iterable;
    
    console.log(props.opportunities['0'])

    if (props.opportunities['0'] !== undefined && props.opportunities['0'].length > 1) {
      console.log('fuck', props.opportunities['0'].length)
      console.log('shit', props)
      iterable = props.opportunities[0];
      console.log("up", iterable);
    } else {
      iterable = props.opportunities;
      console.log("bitches", iterable);
    }

    let newOpp = await postAnOpportunity(props.user.id, values);
    let iterableSent = [...iterable, newOpp]
    console.log(iterableSent)
    await props.setAllOpps(iterableSent);
  };

  useEffect(() => {
    console.log("setNewValue")
    setNewValue(true)
  }, [props.opportunities]);

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
        <Button id='create-opp' disabled={disabled} onClick={createOpp}>
          Submit!
        </Button>
      </Link>
    </CreateOppForm>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  opportunities: state.opportunities
});

export const mapDispatchToProps = dispatch => ({
  addOpp: opp => dispatch(addUserOpp(opp)),
  setAllOpps: opportunities =>
  dispatch(setUserOpportunities(opportunities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOppModal);
