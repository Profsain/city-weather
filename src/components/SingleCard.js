import PropTypes from 'prop-types';
import React from 'react';
import '../styles/SingleCard.css';

const SingleCard = ({
  temp,
  humidity,
  condition,
  icon,
}) => (

  <div className="Card">
    <h4>{condition}</h4>
    <img src={icon} alt="weather icon" />
    <div className="Report">
      <p>
        {temp}
        ℃
      </p>
      <p>
        {humidity}
        %
      </p>
    </div>
  </div>
);

SingleCard.propTypes = {
  condition: PropTypes.string,
  humidity: PropTypes.number,
  icon: PropTypes.string,
  temp: PropTypes.number,
};

export default SingleCard;
