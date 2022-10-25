import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  //I create handleClick function to update state in App.js component and it will be choiceOne or choiceTwo states 
    const handleClick = () => {
       if (!disabled) {
        handleChoice(card)
       } 
    }

  return(
    <div className="card">
          <div className={flipped ? "flipped" : ""}>          
            <img className="front" src={card.src} alt="card front" />
            <img className="back"
             src="/img/back.png"
             onClick={handleClick}
             alt="card back"  />
          </div>
    </div> 

  )
}
