// import {Howl} from "howler";
// import React from "react";


// function Tut() {

//   const sound = new Howl ({
//     src: ["https://ia801701.us.archive.org/18/items/home-alone-soundtrack/Home%20Alone/01%20Somewhere%20In%20My%20Memory.mp3"],
//     html5: true

//   })


//   return (
//     <div>
//       <div onClick={() => sound.play()}>Click to play</div>
//       <div onClick={() => sound.pause()}>Click to pause</div>
//     </div>  
    
//   )
// }
// export default Tut;

import {Howl} from "howler";
import React from "react";
import './Tut.css'




function Tut() {

  const sound = new Howl ({
    src: ["https://ia801701.us.archive.org/18/items/home-alone-soundtrack/Home%20Alone/01%20Somewhere%20In%20My%20Memory.mp3"],
    html5: true

  })
  // const [toggled, setToggled] = useState(false)
  const toggleType = (event) => {
    const checkBox = event.target
    if (checkBox.checked === true) {
      sound.play()
    } else {
      sound.pause()
    }
  }


  return (
    <div>
      
     <label class="toggler-wrapper style-1">
       <input type="checkbox" onChange={toggleType} />
       
      <div class="toggler-slider">
      <div class="toggler-knob"></div>
          </div>
      </label>
       
    </div>  
    
  )
}
export default Tut;
    
    


