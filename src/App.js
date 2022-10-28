// import { useEffect, useState } from 'react'
// import './App.css';
// import './Button.css';
// import SingleCard from './components/SingleCard';
// import Tut from './components/Tut'


// //add matched property to the cards
// const cardImages = [
//   {"src": "/img/christmas-balls.png", matched: false},
//   {"src": "/img/christmas-bells.png", matched: false},
//   {"src": "/img/christmas-elfs.png", matched: false},
//   {"src": "/img/christmas-lolly-sticks.png", matched: false},
//   {"src": "/img/christmas-present-box.png", matched: false},
//   {"src": "/img/christmas-snowman.png", matched: false} 
// ]

// function App() {
//   //4) to store my cards in for a particular game I create a state.
//   const [cards, setCards] = useState([])
//   //6) to know how many turns player does during the game I create state turns
//   const [turns, setTurns] = useState(0)

//   // to save the player card choice I create two states with initial state equal to "null"
//   // when user click on first card it will update the choiceOne to be that card
//   const [choiceOne, setChoiceOne] = useState(null)
//   // when user click on second card it will update the choiceTwo to be that card
//   const [choiceTwo, setChoiceTwo] = useState(null)
//   //disabled state after two cards click so the comparison happened before next card clicked
//   const [disabled, setDisabled] = useState(false)




//   //1) shuffle cards
//   const shuffledCards = () => {
//   // I have 6 images but I need to double them so that every image has an identical pair. I use spread operator.  
//     const shuffledCards = [...cardImages, ...cardImages]
//   //2) to get random cards oder  I use Math.random method with 0.5 shift, the return maybe a negative number and  items will have the same order or if return is positive, it switches the order around
//       .sort(() => Math.random() - 0.5)
//   //3) to get an id property to every item in shuffledCards array I use .map()
//       .map((card) => ({...card, id: Math.random()})) 
      
//   //5) to update the current state of the cards I use setCards function 
//   setChoiceOne(null)
//   setChoiceTwo(null)
//   setCards(shuffledCards) 
//   setTurns(0)   
//   }

//   // to handle a choice
//   const handleChoice = (card) => {
//   //I check if choiceOne has a value. If it doesn't choiceOne will be updated, if choiceOne has value so choiceTwo will be updated
//      choiceOne ? setChoiceTwo(card) : setChoiceOne(card) 
//   }
//   // compare 2 selected cards
//   useEffect(() => {
//     if (choiceOne && choiceTwo) {
//       setDisabled(true)
//       if (choiceOne.src === choiceTwo.src) {
//        setCards(prevCards => {
//         return prevCards.map(card =>{
//           if (card.src === choiceOne.src) {
//             return {...card, matched: true}
//           } else {
//             return card
//           }
//         })
//        }) 
//         resetTurn()
//       } else {
//   // Set Timeout 1sec. in order pictures do not flip immediately if they do not match      
//         setTimeout(() => resetTurn(), 1000)
//       }
//     }
//   }, [choiceOne,choiceTwo])

//   console.log(cards)

//   // reset choices and increase turn
//   const resetTurn = () => {
//     setChoiceOne(null)
//     setChoiceTwo(null)
//     setTurns(prevTurns => prevTurns + 1)
//     setDisabled(false)
//   }

//   //start a new game automatically
//   useEffect(() => {
//     shuffledCards()
//   }, [])




//   return (
//     <div className="App">
      
//     <div class="snowflakes" aria-hidden="true">
    
//     <div class="snowflake">
//     ❅
//     </div>
//     <div class="snowflake">
//     ❅
//     </div>
//     <div class="snowflake">
//     ❆
//     </div>
//     <div class="snowflake">
//     ❄
//     </div>
//     <div class="snowflake">
//     ❅
//     </div>
//     <div class="snowflake">
//     ❆
//     </div>
//     <div class="snowflake">
//     ❄
//     </div>
//     <div class="snowflake">
//     ❅
//     </div>
//     <div class="snowflake">
//     ❆
//     </div>
//     <div class="snowflake">
//     ❄
//     </div>
//         <ul id="wire">
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//         </ul>
//         <br />
       
//       <h1>Magic Memory</h1>
//     {/*I use on click function to initiate the shuffleCards()  */}
       
//       <div className="centerer">
//         <button onClick={shuffledCards}>New Game</button> 
//       </div>
//       <p>Sound</p><Tut />
//       <div className='board'>
//           <div className="card-grid"> 
//             {cards.map(card => (
//             <SingleCard 
//               key={card.id} 
//               card={card}
//               handleChoice={handleChoice}
//               flipped={card === choiceOne || card === choiceTwo || card.matched}
//               disabled={disabled}
//             />   
//             ))}
//           </div>
//       </div>   
//       <p>Turns: {turns}</p>
//     </div>
//     </div>  
//   );
// }

// export default App;

// import { useEffect, useState } from 'react'
// import './App.css';
// import './Button.css';
// import SingleCard from './components/SingleCard';
// import Tut from './components/Tut'



// //add matched property to the cards
// const backImage = "/img/back.png"
// const backProgrammingImage = "/img/question.png"

// const cardImages = [
//   {"src": "/img/christmas-balls.png", matched: false},
//   {"src": "/img/christmas-bells.png", matched: false},
//   {"src": "/img/christmas-elfs.png", matched: false},
//   {"src": "/img/christmas-lolly-sticks.png", matched: false},
//   {"src": "/img/christmas-present-box.png", matched: false},
//   {"src": "/img/christmas-snowman.png", matched: false} 
// ]
// const cardProgrammingImages = [
//   {"src": "/img/vue.png", matched: false},
//   {"src": "/img/Ruby.png", matched: false},
//   {"src": "/img/react.png", matched: false},
//   {"src": "/img/JS.png", matched: false},
//   {"src": "/img/java.png", matched: false},
//   {"src": "/img/css.png", matched: false} 
// ]
// function App() {
//   const [theme, setTheme] = useState(cardProgrammingImages)

//   const [backTheme, setBackTheme] = useState(backImage)

//   const [snowflake, setSnowflake] = useState(false)



//   //4) to store my cards in for a particular game I create a state.
//   const [cards, setCards] = useState([])
//   //6) to know how many turns player does during the game I create state turns
//   const [turns, setTurns] = useState(0)

//   // to save the player card choice I create two states with initial state equal to "null"
//   // when user click on first card it will update the choiceOne to be that card
//   const [choiceOne, setChoiceOne] = useState(null)
//   // when user click on second card it will update the choiceTwo to be that card
//   const [choiceTwo, setChoiceTwo] = useState(null)
//   //disabled state after two cards click so the comparison happened before next card clicked
//   const [disabled, setDisabled] = useState(false)

//   const changeTheme = () => {
//     if (theme === cardImages) {
//       setTheme(cardProgrammingImages)
//       setBackTheme(backProgrammingImage)
//       setSnowflake(!snowflake)
      
//     } else {
//       setTheme(cardImages)
//       setBackTheme(backImage)
//       setSnowflake(snowflake)
//     }
//   }


//   //1) shuffle cards
//   const shuffledCards = () => {
//   // I have 6 images but I need to double them so that every image has an identical pair. I use spread operator.  
//     const shuffledCards = [...theme, ...theme]
//   //2) to get random cards oder  I use Math.random method with 0.5 shift, the return maybe a negative number and  items will have the same order or if return is positive, it switches the order around
//       .sort(() => Math.random() - 0.5)
//   //3) to get an id property to every item in shuffledCards array I use .map()
//       .map((card) => ({...card, id: Math.random()})) 
      
//   //5) to update the current state of the cards I use setCards function 
//   setChoiceOne(null)
//   setChoiceTwo(null)
//   setCards(shuffledCards) 
//   setTurns(0)   
//   }

//   // to handle a choice
//   const handleChoice = (card) => {
//   //I check if choiceOne has a value. If it doesn't choiceOne will be updated, if choiceOne has value so choiceTwo will be updated
//      choiceOne ? setChoiceTwo(card) : setChoiceOne(card) 
//   }
//   // compare 2 selected cards
//   useEffect(() => {
//     if (choiceOne && choiceTwo) {
//       setDisabled(true)
//       if (choiceOne.src === choiceTwo.src) {
//        setCards(prevCards => {
//         return prevCards.map(card =>{
//           if (card.src === choiceOne.src) {
//             return {...card, matched: true}
//           } else {
//             return card
//           }
//         })
//        }) 
//         resetTurn()
//       } else {
//   // Set Timeout 1sec. in order pictures do not flip immediately if they do not match      
//         setTimeout(() => resetTurn(), 1000)
//       }
//     }
//   }, [choiceOne,choiceTwo])

//   console.log(cards)

//   // reset choices and increase turn
//   const resetTurn = () => {
//     setChoiceOne(null)
//     setChoiceTwo(null)
//     setTurns(prevTurns => prevTurns + 1)
//     setDisabled(false)
//   }

//   //start a new game automatically
//   useEffect(() => {
//     shuffledCards()
//   }, [])




//   return (
//     <div className="App">
//       <button onClick={() => {changeTheme()}}>Theme</button>
      
//     <div className="snowflakes" aria-hidden="true">
    
//     <div className={snowflake?"Show":""}>
//     ❅
//     </div>
//     <div className={snowflake?"Show":""}>
//     ❅
//     </div>
//     <div className={snowflake?"Show":""}>
//     ❆
//     </div>
//     <div className={snowflake?"Show":""}>
//     ❄
//     </div>
//     <div className={snowflake?"Show":""}>
//     ❅
//     </div>
//     <div className={snowflake?"Show":""}>
//     ❆
//     </div>
//     <div className={snowflake?"Show":""}>
//     ❄
//     </div>
//     <div className={snowflake?"Show":""}>
//     ❅
//     </div>
//     <div className={snowflake?"Show":""}>
//     ❆
//     </div>
//     <div className={snowflake?"Show":""}>
//     ❄
//     </div>
//         <ul id="wire">
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//         </ul>
//         <br />
       
//       <h1>Magic Memory</h1>
//     {/*I use on click function to initiate the shuffleCards()  */}
       
//       <div className="centerer">
//         <button onClick={shuffledCards}>New Game</button> 
//       </div>
//       <p>Sound</p><Tut />
//       <div className='board'>
//           <div className="card-grid"> 
//             {cards.map(card => (
//             <SingleCard 
//               key={card.id} 
//               card={card}
//               handleChoice={handleChoice}
//               flipped={card === choiceOne || card === choiceTwo || card.matched}
//               disabled={disabled}
//               backTheme={backTheme}
            
//             />   
//             ))}
//           </div>
//       </div>   
//       <p>Turns: {turns}</p>
//     </div>
//     </div>  
//   );
// }

// export default App;
import { useEffect, useState } from 'react'
import './App.css';
import './Button.css';
import SingleCard from './components/SingleCard';
import Tut from './components/Tut'
//add matched property to the cards
const cardImages = [
  {"src": "/img/christmas-balls.png", matched: false},
  {"src": "/img/christmas-bells.png", matched: false},
  {"src": "/img/christmas-elfs.png", matched: false},
  {"src": "/img/christmas-lolly-sticks.png", matched: false},
  {"src": "/img/christmas-present-box.png", matched: false},
  {"src": "/img/christmas-snowman.png", matched: false} 
]
function App() {
  //4) to store my cards in for a particular game I create a state.
  const [cards, setCards] = useState([])
  //6) to know how many turns player does during the game I create state turns
  const [turns, setTurns] = useState(0)
  // to save the player card choice I create two states with initial state equal to "null"
  // when user click on first card it will update the choiceOne to be that card
  const [choiceOne, setChoiceOne] = useState(null)
  // when user click on second card it will update the choiceTwo to be that card
  const [choiceTwo, setChoiceTwo] = useState(null)
  //disabled state after two cards click so the comparison happened before next card clicked
  const [disabled, setDisabled] = useState(false)
  //1) shuffle cards
  const shuffledCards = () => {
  // I have 6 images but I need to double them so that every image has an identical pair. I use spread operator.  
    const shuffledCards = [...cardImages, ...cardImages]
  //2) to get random cards oder  I use Math.random method with 0.5 shift, the return maybe a negative number and  items will have the same order or if return is positive, it switches the order around
      .sort(() => Math.random() - 0.5)
  //3) to get an id property to every item in shuffledCards array I use .map()
      .map((card) => ({...card, id: Math.random()})) 
      
  //5) to update the current state of the cards I use setCards function 
  setChoiceOne(null)
  setChoiceTwo(null)
  setCards(shuffledCards) 
  setTurns(0)   
  }
  // to handle a choice
  const handleChoice = (card) => {
  //I check if choiceOne has a value. If it doesn't choiceOne will be updated, if choiceOne has value so choiceTwo will be updated
     choiceOne ? setChoiceTwo(card) : setChoiceOne(card) 
  }
  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
       setCards(prevCards => {
        return prevCards.map(card =>{
          if (card.src === choiceOne.src) {
            return {...card, matched: true}
          } else {
            return card
          }
        })
       }) 
        resetTurn()
      } else {
  // Set Timeout 1sec. in order pictures do not flip immediately if they do not match      
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne,choiceTwo])
  console.log(cards)
  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }
  //start a new game automatically
  useEffect(() => {
    shuffledCards()
  }, [])
  return (
    <div className="App">
      
    <div class="snowflakes" aria-hidden="true">
    
    <div class="snowflake">
    ❅
    </div>
    <div class="snowflake">
    ❅
    </div>
    <div class="snowflake">
    ❆
    </div>
    <div class="snowflake">
    ❄
    </div>
    <div class="snowflake">
    ❅
    </div>
    <div class="snowflake">
    ❆
    </div>
    <div class="snowflake">
    ❄
    </div>
    <div class="snowflake">
    ❅
    </div>
    <div class="snowflake">
    ❆
    </div>
    <div class="snowflake">
    ❄
    </div>
        <ul id="wire">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <br />

      <h1>Magic Memory</h1>
    {/*I use on click function to initiate the shuffleCards()  */}
        {/* <Tut /> */}

      <div className="centerer">
        <button onClick={shuffledCards}>New Game</button> 
      </div>
      <p>Add Music</p><Tut />
      <div className='board'>
          <div className="card-grid"> 
            {cards.map(card => (
            <SingleCard 
              key={card.id} 
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />   
            ))}
          </div>
      </div>   
      <p>Turns: {turns}</p>
    </div>
    </div>  
  );
}
export default App;