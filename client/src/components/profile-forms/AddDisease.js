import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDisease } from '../../actions/profile';


const AddDisease = ({ addDisease, history }) => {
  const [formData, setFormData] = useState({
    disease: '',
    name: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });
  const {
    disease,
    name,
    location,
    from,
    to,
    description,
    current
  } = formData;


  const onChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <Fragment>
      <h1 className="large text-primary">Add Your diseases</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add informations about your diseases
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addDisease(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Diseases"
            name="disease"
            value={disease}
            onChange={onChange}
            
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Type of diseases"
            name="name"
            value={name}
            onChange={onChange}
            
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
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
              onChange={() => {
                setFormData({ ...formData, current: !current });
              }}
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
            placeholder="Diseases Description"
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

AddDisease.propTypes = {
  addDisease: PropTypes.func.isRequired
};

export default connect(null, {addDisease})(AddDisease);