import React from 'react';
import '../styles/SingleCard.css';

const SingleCard = ({ temp, humidity, condition, icon}) => {
  return (
    <div className="Card">
      <h4>{condition}</h4>
      <img src={icon} alt="weather icon"/>
      <div className="Report">
        <p>{temp}℃</p>
        <p>{humidity}%</p>
      </div>
    </div>
  )
};

export default SingleCard;
