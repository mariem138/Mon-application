import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProblem } from '../../actions/profile';

const AddProblem = ({ addProblem, history }) => {
  const [formData, setFormData] = useState({
    cas: '',
    type: '',
    lifestatus: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const {
    cas , 
    type,
    lifestatus,
    from,
    to,
    description,
    current
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add Your Problem</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add your problem
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addProblem(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* What is your cas"
            name="cas"
            value={cas}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* type of your problem"
            name="type"
            value={type}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="lifestatus"
            name="lifestatus"
            value={lifestatus}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
            />{' '}
            untill now
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Problem Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddProblem.propTypes = {
  addProblem: PropTypes.func.isRequired
};

export default connect(null, { addProblem })(AddProblem);
