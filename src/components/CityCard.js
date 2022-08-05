import React from 'react';
import '../styles/CityCard.css';

export const CityCard = ({cityName, cityPic}) => {
  return (
    <div className="City-card">
      <img src={cityPic} alt="abuja city" />
      <h4>{cityName}</h4>
    </div>
  )
};
