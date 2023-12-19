import React from 'react'
import './Info.css'
import vector from "../img/vector.gif"

export default function Vectors() {
    return (
        <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              <u>Vectors</u> 
              </h1>
              <p class="text-small">
                <ul>
                  <li>Vectors are a form of lists in C++. The size can be changed, and just like with other variables, you have to declare the type </li>
                  <li>A standard declaration of a vector looks like: <strong>vector{"<int>"};</strong>. It doesn't have to be of type int, it can also be string, bool, char, and even custom types (provided you made a class and objects of that class)</li>
                  <li>Remember, to use vectors you <strong>MUST</strong> include <strong>#include {"<vector>"}</strong></li>
                  <li>The three most common functions used with vectors are:</li>
                  <ul>
                  <li><strong>vectorName.push_back(element)</strong> → this adds element to the end of the list</li>
                  <li><strong>vectorName[i]</strong> → accesses the element at index i. Like with arrays, the indices start with 0</li>
                  <li><strong>vectorName.pop_back()</strong> → removes the last element of the list</li>
                  <li><strong>vectorName.size()</strong> → returns an int representing the size of the array. The last index can be calculated by writing vectorName.size() - 1</li>

                  </ul>
                </ul>
              
              </p>
              <img src={vector} alt="direction and maginutde" class = "center"/>
          </div>
      </div>

    );
}