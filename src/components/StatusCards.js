import PropTypes from 'prop-types';
import React from 'react';
import '../styles/StatusCard.css';

const StatusCards = ({ title, measure, unit }) => (
  <div className="StatusCard">
    <h4 className="Title">{title}</h4>
    <p className="Record">
      {measure}
      <span>{unit}</span>
    </p>
  </div>
);

StatusCards.propTypes = {
  measure: PropTypes.number,
  title: PropTypes.string,
  unit: PropTypes.string,
};

export default StatusCards;
