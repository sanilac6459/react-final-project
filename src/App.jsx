import { useState } from 'react'
import './App.css'
import logo from './img/logo.gif'
import bgMusic from "./assets/Hall-of-Horoscope.mp3"
import ham from "./img/ham.gif"
import useSound from 'use-sound'
import Basics from './components/Basics'
import Pointers from './components/Pointers'
import ObjectOriented from './components/ObjectOriented'
import Vectors from './components/Vectors'
import Inheritance from './components/Inheritance'
import Recursion from './components/Recursion'

// BIG THINGS HAPPENING


function App() {
    const [count, setCount] = useState(0)
    // function play()
    // {
    //   new Audio(bgMusic).play()
    // }
    const [playSound] = useSound(bgMusic);
    return (
      
  <section class="section">
  <audio src="./assets/Hall-of-Horoscope.mp3" autoPlay loop />
      <div class="box-main">
          <div class="firstHalf">
              <strong><h1 class="text-big">
              C++ for Dummies! <br></br>(Haha, we're all dummies trying to learn :D)
              </h1></strong>
              <img src={logo} alt="C++ Users nerd emoji gif" class = "center"/>
              <h3 class="sub-heading">
                  Here is all the things you need to learn when programming in C++<br></br>
                  (Yes, we woke up and chose violence :D )
              </h3>
              <div class="sound-button">
                <button onClick={playSound}>Play BGM (by Soichi Terada)</button>
              </div>
          </div>
      </div>
          
      <Basics/>

      <br></br>
      <br></br>

      <Pointers/>
      
      <br></br>
      <br></br>
  
      <ObjectOriented/>

      <br></br>
      <br></br>

      <Vectors/>
      
      <br></br>
      <br></br>

      <Inheritance/>

      <br></br>
      <br></br>

      <Recursion/>
      
      <br></br>
      <br></br>
      <div class = "note">
        <h2 class = "center">Congratulations! You now know C++. Good job buddy, now let's learn CSS!! <br></br>(it's even more fun I swear :D)</h2><br></br>
          <img src={ham} alt="sad and flat" class = "center"/>
      </div>
  </section>
  
    );
  }

export default App
