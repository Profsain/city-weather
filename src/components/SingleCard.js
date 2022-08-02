import React from 'react';
import '../styles/SingleCard.css';

const SingleCard = () => {
  return (
    <div className="Card">
      <h4>Today</h4>
      <img src="shower.png" alt="weather icon"/>
      <div className="Report">
        <p>16℃</p>
        <p>11℃</p>
      </div>
    </div>
  )
}

export default SingleCard