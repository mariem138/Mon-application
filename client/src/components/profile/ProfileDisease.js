import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileDisease = ({
  disease: { diseases, ChronicnotChronic, location, current, to, from, description }
}) => (
  <div>
    <h3 className="text-dark">{diseases}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Chronic/notChronic: </strong> {ChronicnotChronic}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileDisease.propTypes = {
  diseases: PropTypes.object.isRequired
};

export default ProfileDisease;
