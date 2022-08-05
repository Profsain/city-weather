import PropTypes from "prop-types"
import React from 'react';
import '../styles/CityCard.css';

const CityCard = ({ cityName, cityPic }) => (
  <div className="City-card">
    <img src={cityPic} alt="abuja city" />
    <h4>{cityName}</h4>
  </div>
);

CityCard.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityPic: PropTypes.string.isRequired,
};

export default CityCard;
