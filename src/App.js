import { useState } from 'react'
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "/img/christmas-balls.png"},
  {"src": "/img/christmas-bells.png"},
  {"src": "/img/christmas-elfs.png"},
  {"src": "/img/christmas-lolly-sticks.png"},
  {"src": "/img/christmas-present-box.png"},
  {"src": "/img/christmas-snowman.png"} 
]

function App() {
  //4) to store my cards in for a particular game I create a state.
  const [cards, setCards] = useState([])
  //6) to know how many turns player does during the game I create state turns
  const [turns, setTurns] = useState(0)




  //1) shuffle cards
  const shuffledCards = () => {
  // I have 6 images but I need to double them so that every image has an identical pair. I use spread operator.  
    const shuffledCards = [...cardImages, ...cardImages]
  //2) to get random cards oder  I use Math.random method with 0.5 shift, the return maybe a negative number and  items will have the same order or if return is positive, it switches the order around
      .sort(() => Math.random() - 0.5)
  //3) to get an id property to every item in shuffledCards array I use .map()
      .map((card) => ({...card, id: Math.random()})) 
      
  //5) to update the current state of the cards I use setCards function 
  setCards(shuffledCards) 
  setTurns(0)   
  }
console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Memory</h1>
    {/*I use on click function to initiate the shuffleCards()  */}
      <button onClick={shuffledCards}>New Game</button> 

      <div className="card-grid"> 
        {cards.map(card => (
         <SingleCard key={card.id} card={card}/>
        ))}
      </div>
    </div>
  );
}

export default App;
