import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileProblem = ({
  problem: { name, type, status, current, to, from, description }
}) => (
  <div>
    <h3 className="text-dark">{name}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Type: </strong> {type}
    </p>
    <p>
      <strong>Status: </strong> {status}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileProblem.propTypes = {
  problem: PropTypes.object.isRequired
};

export default ProfileProblem;
