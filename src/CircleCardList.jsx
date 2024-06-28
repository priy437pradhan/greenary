import React, { useEffect, useState } from 'react';
import "./scss/card.scss";
import CircleCards from './CircleCard';

function CircleCardList() {
  const [circleCards, setCircleCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/CircleCard')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setCircleCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="circlecard-list">
      {circleCards.map((circleCards, index) => (
        <CircleCards
          key={index} 
          text={circleCards.text} 
          img={circleCards.img}
        />
      ))}
    </div>
  );
}

export default CircleCardList;
