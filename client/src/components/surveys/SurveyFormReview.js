// surveyFormReview.js

import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyReview = ({
  onCancel, formValues, submitSurvey, history,
}) => {
  const reviewFields = formFields.map(field => (
    <div key={field.name}>
      <label>{field.label}</label>
      <div>
        {formValues[field.name]}
      </div>
    </div>
  ));
  return (
    <div>
      <h3>Please confirm your entries</h3>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
      Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
      Send Survey
      <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps({ form }) {
  return {
    formValues: form.surveyForm.values,
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
