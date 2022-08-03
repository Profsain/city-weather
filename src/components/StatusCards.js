import React from 'react';
import '../styles/StatusCard.css';

const StatusCards = (title, measure, unit) => {
  return (
    <div className="StatusCard">
      <h4 className="Title">{title}</h4>
      <p className="Record">{measure}<span>{unit}</span></p>
    </div>
  )
}

export default StatusCards;
