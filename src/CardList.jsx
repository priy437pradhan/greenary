import  { useEffect, useState } from 'react';
import "./scss/card.scss";
import SingleCard from './SingleCard';


function CardList() {
  const [card, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cards')
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
    <h1 className="card-listh1">shop by category</h1>
    <div className="card-list">
      {card.map((card, index) => (
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


export default CardList;
