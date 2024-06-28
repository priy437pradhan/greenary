import React from 'react';
import "./scss/card.scss";

function SingleCard({ title, text, buttonText, img }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={img} alt="" />
      </div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="card-button">{buttonText}</button>
    </div>
  );
}

export default SingleCard;
