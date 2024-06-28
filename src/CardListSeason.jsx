
import React, { useEffect, useState } from 'react';
import "./scss/card.scss";
import SingleCard from './SingleCard';
function CardListSeason() {
    const [CardSeason, setCards] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/CardSeason')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then(data => setCards(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
  
    return (<>
      <h1 className="card-listh1">shop by season~</h1>
      <div className="card-list">
        {CardSeason.map((card, index) => (
          <SingleCard 
            key={index} 
            title={card.title} 
            text={card.text} 
            buttonText={card.buttonText} 
            img={card.img}
          />
        ))}
      </div>
      
      </>
    );
  }
  export default CardListSeason;