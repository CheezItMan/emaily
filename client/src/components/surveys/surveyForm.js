// surveyForm.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { reduxForm, Field } from 'redux-form';
import SurveyField from './surveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


class SurveyForm extends Component {
  static renderFields() {
    return formFields.map((field, index) => <Field key={index} label={field.label} type="text" name={field.name} component={SurveyField} />);
  }
  render() {
    return (
      <div>
        <h4>Survey Form</h4>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {SurveyForm.renderFields()}
          <Link className="red btn-flat left white-text" to="/surveys">Cancel</Link>
          <button className="" className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  const emailValidations = validateEmails(values.recipients);
  if (emailValidations) {
    errors.recipients = emailValidations;
  }

  formFields.forEach(({ name, label }) => {
    if (!values[name]) {
      errors[name] = `${label} is required.`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
