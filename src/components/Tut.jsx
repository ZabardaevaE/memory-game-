import {Howl} from "howler";
import React from "react";


function Tut() {

  const sound = new Howl ({
    src: ["https://ia801701.us.archive.org/18/items/home-alone-soundtrack/Home%20Alone/01%20Somewhere%20In%20My%20Memory.mp3"],
    html5: true

  })


  return (
    <div>
      <div onClick={() => sound.play()}>Click to play</div>
      <div onClick={() => sound.pause()}>Click to pause</div>
    </div>  
    
  )
}
export default Tut;