import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [gifSource , setGifSource] = useState("/teddy1.gif")
  const [yesClicked , setYesClicked] = useState(false)

  const gifs = ["/how_dare.gif"  , "/angry_bear.gif" , "pull_cheek.gif", "/smirk.gif", "/bully_cat.gif", "/give_up.gif"]

  useEffect(() => {
      if(count > 5) setCount(0)
  } , [count])

  const handleNoEnter = () => {
    console.log("enter")
    
    let heartSize;
    if (window.matchMedia('(min-width: 768px)').matches) {
      heartSize = 13
    } else {
      heartSize = 10
    }
    let x = heartSize * (16 * Math.pow(Math.sin(count), 3));
    let y = -heartSize * (13 * Math.cos(count) - 5 * Math.cos(2 * count) - 2 * Math.cos(3 * count) - Math.cos(4 * count));
    const button = document.getElementById("no-button")
    button.style.transform = `translate(${x}px ,  ${y}px)`
    setGifSource(gifs[count])
    setCount(count + 1)
    // setTimeout(() => setGifSource("/teddy1.gif") , 3000)
  }

  const handleYesEnter = () => {
    setGifSource("/blush.gif")
    setCount(0)
    const button = document.getElementById("no-button")
    button.style.transform = `translate(0px ,  0px)`
  }

  const handleYesLeave = () => {
    if(!yesClicked) setGifSource("/teddy1.gif")
  }

  const handleYesClick = () => {
    setYesClicked(true)
    setGifSource("/heart_burst.gif")
  }


  return (
    <div className='container' onMouseEnter = {handleYesLeave} onCick = {handleYesLeave}>
      <div><img className="image" src={gifSource} alt="Overlay Image" onMouseEnter = {handleYesLeave} ></img></div>
      {!yesClicked && 
        <div className='buttons'>
          <button className="yn-button yes" onMouseEnter = {handleYesEnter} onMouseLeave = {handleYesLeave} onClick= {handleYesClick}> Yes  </button>
          <button id="no-button" className="yn-button yes no" onMouseEnter = {handleNoEnter}> No </button>
        </div>
      }
    </div>
   
  );
}

export default App;
