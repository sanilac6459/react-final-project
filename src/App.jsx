import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './img/logo.gif'
import helloWorld from './img/coding-hello-world.gif'
// BIG THINGS HAPPENING


function App() {
    const [count, setCount] = useState(0)
  
    return (
      <section class="section">
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
                  C++ info website
              </h1>
              <img src={logo} alt="C++ Users nerd emoji gif" />
              <h3 class="sub-heading">
                  Here is all the things you need to learn when programming in C++
              </h3>
          </div>
      </div>
          
      <div class="box-main">
          <div class="firstHalf">
              <h2 class="text-big">
             Basics
              </h2>
            
                  <ul> 
                    <li>When coding, make sure you have import the library <strong> #include {"<iostream>"} </strong>and <strong> and implement using namespace std</strong>
                    <br></br><b>using namespace std</b> means you're using the standard defintions for keywords like cin, cout,to_string, etc.</li>
                    <li>At the end of every line [with some exceptions], remember to add a semi-colon or your program will break. The semicolon is kind of like the period in regular writing. It lets the compiler know when each line is done when it's reading the code.</li>
                    <li>When coding in the main function, <strong>int main()</strong>, add the syntax <strong>return 0; </strong> which will end your program once it's runned</li><br></br>
                    
                      <li><strong>Print statements</strong></li>
                      <img src={helloWorld} alt="anime boi typing furiously to cout hello world" />
                        <ul>
                          <li>Use <strong>cout</strong> and the symbol <strong>{"<<"}</strong> to add onto your statement if needed</li>
                          <ul>
                          <li>Ex. <strong>cout {"<<"} "Hello World";</strong> // prints Hello World </li>
                            </ul>
                          
                        </ul><br></br>
                      <li><strong>Taking in user's input</strong></li>
                        <ul>
                          <li>Use <strong>cin</strong> and the symbol <strong>{">>"}</strong></li>
                        </ul><br></br>
                    <li><strong>New line</strong></li>
                    <ul>
                      <li>Use <strong>\n</strong> or <strong>endl</strong> to add a new line after a statement
                      <br></br>For example, "\n [your string]" or "your string" {"<<"} endl; Both can be used, and not just with strings. Concatenating \n with ints, doubles, booleans, and more, is possible.</li>
                    </ul><br></br>
                    <li><strong>String methods</strong></li>
                    <ul>
                      <li><strong>.length()</strong> or <strong>.size()</strong> - finding the length of a string</li>
                      <ul>
                        <li>Ex.string txt = "Hello World!";</li>
                      <li>cout {"<<"} <strong>txt.length();</strong> // outputs 12, including the spaces</li>
                      </ul>
                    </ul><br></br>
                    <li><strong>Conditionals</strong></li>
                    
                    <li><strong>Loops</strong></li>
                    
                    <li><strong>Functions</strong></li>
                    <li><strong>Generating random numbers</strong></li>
                    <ul>
                      <li>Import the library <strong>#include {"<cstdlib>"}</strong> and <strong>#include {"<ctime>"}</strong></li>
                      <li>Add <strong>srand(time(NULL))</strong> to get all the results from the random sequence</li>
                      <li>For generating <em><strong>random integers</strong></em> put the following syntax in an int variable: </li>
                      <ul>
                        <li><strong>rand() % (end - start + 1) + start</strong> → generate random ints from start to end</li>
                        <li>this would usually generate numbers from 0 to 0.9999 so casting or saving it as an int variable would generate numbers from 0 to 1 (NOT INCLUDING 1)</li>
                      </ul>
                      <li>For generating random <em><strong>floating (decimals) integers</strong></em> from start to end:</li>
                      <ul>
                        <li><strong>1.0 * rand() / RAND_MAX</strong> → generate random float number in [0,1]</li>
                        <li><strong>1.0 * rand() / RAND_MAX * (end - start)</strong> → generate random float number in [0, end-start]</li>
                        <li><strong>1.0 * rand() / RAND_MAX * (end – start)</strong> + start → shift the result by start</li>
                      </ul>
                    </ul>
                  </ul>
  
          </div>
      </div>
  
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              Pointers 
              </h1>
              <p class="text-small">
                  Here is all the things you need to learn in C++
              </p>
          </div>
      </div>
  
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              Object oriented
              </h1>
              <p class="text-small">
                  Here is all the things you need to learn in C++
              </p>
          </div>
      </div>
  
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              Vectors 
              </h1>
              <p class="text-small">
                  Here is all the things you need to learn in C++
              </p>
          </div>
      </div>
  
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              Inheritance  
              </h1>
              <p class="text-small">
                  Here is all the things you need to learn in C++
              </p>
          </div>
      </div>
  
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              Recursion 
              </h1>
              <p class="text-small">
                  Recursive functions are functions that call themselves, usually until a certain result is reached.
              </p>
          </div>
      </div>
  
  </section>
  
    );
  }

export default App
