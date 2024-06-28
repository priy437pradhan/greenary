import React from "react";
import "./scss/card.scss";

function CircleCards({ text, img }) {
  return (
    <div className="CircleCardContainer">
      <div className="card2">
        <img src={img} alt="" />
      </div>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default CircleCards;
