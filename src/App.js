import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const gifs = ["/innocent_face.gif" , "/how_dare.gif"  , "/angry_bear.gif" , "pull_cheek.gif", "/bully_cat.gif"]

  useEffect(() => {
      if(count > 5) setCount(0)
  } , [count])

  const handleNoEnter = () => {
    console.log("enter")
    setCount(count + 1)
    let heartSize;
    if (window.matchMedia('(min-width: 768px)').matches) {
      heartSize = 13
    } else {
      heartSize = 10
    }
    let x = heartSize * (16 * Math.pow(Math.sin(count), 3));
    let y = -heartSize * (13 * Math.cos(count) - 5 * Math.cos(2 * count) - 2 * Math.cos(3 * count) - Math.cos(4 * count));

    const button = document.getElementById("no-button")
    
    // x += window.innerWidth / 2;
    // y += window.innerHeight / 2;
    button.style.transform = `translate(${x}px ,  ${y}px)`
    // button.style.left = x + 'px';
    // button.style.top = y + 'px';
  }

  const handleNoLeave = () => {
    console.log("leave")

    for (let i = -3; i <= 3; i++) {
      let line = '';
      for (let j = -3; j <= 3; j++) {
          line += (Math.pow(i, 2) + Math.pow(j, 2) < 10) ? '*' : ' ';
      }
      console.log(line);
  }

  }
  return (
    <div className='container'>
      <div><img className="image" src="teddy1.gif" alt="Overlay Image"></img></div>
      {/* <div><img className="image" src={gifs[count]} alt="Overlay Image"></img></div> */}
      <button className="yn-button yes" > Yes </button>
      <button id="no-button" className="yn-button no" onMouseEnter = {handleNoEnter} onMouseLeave = {handleNoLeave}> No </button>
    </div>
   
  );
}

export default App;
