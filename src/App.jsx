import { useState } from 'react'
import './App.css'
import logo from './img/logo.gif'
import ham from "./img/ham.gif"
import Basics from './components/Basics'
import Pointers from './components/Pointers'
import ObjectOriented from './components/ObjectOriented'
import Vectors from './components/Vectors'
import Inheritance from './components/Inheritance'
import Recursion from './components/Recursion'
import PlaySound from './components/Sound'

// BIG THINGS HAPPENING


function App() {
    const [count, setCount] = useState(0)
    return (
      
  <section class="section">
  <PlaySound/>
      <div class="box-main">
          <div class="firstHalf">
              <strong><h1 class="text-big">
              C++ for Dummies! <br></br>(Haha, we're all dummies trying to learn :D)
              </h1></strong>
              <img src={logo} alt="C++ Users nerd emoji gif" class = "center"/>
              <h3 class="sub-heading">
                  Here is all the things you need to learn when programming in C++<br></br>
                  (Yes, we woke up and chose violence :D ) <br></br>
                  <br></br>
                  (Music by Soichi Terada)
              </h3>
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
