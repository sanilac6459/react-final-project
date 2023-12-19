import React from 'react'
import './Info.css'
import recur from "../img/recursion.gif"
import recursion from "../img/recursion.png"

export default function Recursion() {
    return (
        <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              <u>Recursion</u> 
              </h1>
              <p class="text-small">
                 <ul>
                  <li>Recursive functions are functions that call themselves repeatingly, until a certain result is reached</li>
                  <li>It's mostly used to solve the original problem through sub-problems</li>
                  <li>The benefit of recursion is that it reduces the time to write and debug code</li>
                  <li>The image below is an example of recursion to print numbers in a certain range:</li>
                 </ul>
              </p>
              <img src={recursion} alt="" class = "center"/>
              <img src={recur} alt="recursive dancing" class = "center"/><br></br>
          </div>
      </div>
    );
}