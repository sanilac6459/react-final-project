import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './img/logo.gif'
import helloWorld from './img/coding-hello-world.gif'
import emoji from'./img/emoji2.gif'
import fruits from './img/fruit loops.gif'
import bgMusic from "./assets/Hall-of-Horoscope.mp3"
import ham from "./img/ham.gif"
import recur from "./img/recursion.gif"
import life from "./img/life.gif"
import classExample from "./img/classDef.png"
import conditionals from "./img/conditionals.png"
import conditionalGif from "./img/conditionalTantrum.gif"
import functions from "./img/functions.png"
import vector from "./img/vector.gif"
import pointer from "./img/pointers.gif"
import omnom from "./img/string.gif"
import inheritance from "./img/matroyoshka.gif"
import buttons from "./img/weirdAnimeboi.gif"

// BIG THINGS HAPPENING


function App() {
    const [count, setCount] = useState(0)
    function play()
    {
      new Audio(bgMusic).play()
    }
    return (
      
  <section class="section">
  <audio src="/home/rb4271/react-final-project/public/Hall-of-Horoscope.mp3" autoPlay loop />
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
                  C++ info website
              </h1>
              <img src={logo} alt="C++ Users nerd emoji gif" class = "center"/>
              <h3 class="sub-heading">
                  Here is all the things you need to learn when programming in C++
              </h3>
              <h3>(Yes, we woke up and chose violence :D )</h3>
          </div>
      </div>
          
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
             Basics
              </h1>
            
                  <ul> 
                    <li class = "list">When coding, make sure you have import the library <strong> #include {"<iostream>"} </strong>and implement<strong> using namespace std</strong>. This means you're using the standard defintions for keywords like cin, cout, to_string, etc.</li>
                    <li>At the end of every line [with some exceptions], remember to add a semi-colon or your program will break. The semicolon is kind of like the period in regular writing. It lets the compiler know when each line is done when it's reading the code.</li>
                    <li>When coding in the main function, <strong>int main()</strong>, add the syntax <strong>return 0; </strong> which will end your program once it's runned</li><br></br>
                    
                     <h2> <li><strong>Print statements</strong></li> </h2>
                      <img src={helloWorld} alt="anime girl typing furiously to cout hello world" class = "center"/><br></br>
                        <ul>
                         <li>Use <strong>cout</strong> and the symbol <strong>{"<<"}</strong> to add onto your statement if needed</li>
                          <ul>
                          <li>Ex. <strong>cout {"<<"} "Hello World"</strong>; // prints Hello World </li>
                            </ul>
                          
                        </ul><br></br>
                        <h2> <li><strong>Taking in user's input</strong></li> </h2>
                        <ul>
                          <li>Use <strong>cin</strong> and the symbol <strong>{">>"}</strong></li>
                        </ul><br></br>
                        <h2>  <li><strong>New line</strong></li> </h2>
                    <ul>
                      <li>Use <strong>\n</strong> or <strong>endl</strong> to add a new line after a statement</li>
                      <ul>
                      <li>Ex. "\n [your string]" or "your string" {"<<"} endl; → both can be used, and not just with strings. Concatenating \n with ints (integers), doubles (decimals), booleans (true or false), and more, is possible.</li>
                      </ul>
                    </ul><br></br>
                    <h2> <li><strong>String methods</strong></li> </h2>
                    <ul>
                      <li><strong>.length()</strong> or <strong>.size()</strong> → finding the length of a string</li>
                      <ul>
                        <li>Ex. string txt = "Hello World!";</li>
                         cout {"<<"} <strong>txt.length()</strong>; // outputs 12, including the spaces
                      </ul>
                      <br></br>
                      <li>Finding the ith character of a string → <strong>[]</strong></li>
                      <ul>
                        <li>Ex. string str = "Gengshin";</li>
                        cout {"<<"} <strong>str[5]</strong>; // h
                        <ul>
                        <li><strong>NOTE: when finding the position of a letter, you're going by the index which starts at 0</strong></li>
                        str[0] = "G", str[1] = "e", str[2] = "n", etc.
                        </ul>
                        <br></br>
                      </ul>
                      <li>Substring method → <strong>string substr(pos, len)</strong></li>
                      <ul>
                        <li>pos = position of char</li>
                        <li>len = length of substring</li>
                        <ul>
                          <li>Ex. string str1 = "Programming in C++.";</li>
                          string str2 = str1<strong>.substr(3,4)</strong>; // gram → gets 4 letters from index 3 <br></br>
                          string str3 = str1<strong>.substr(15)</strong>; // C++ → get all the letters from index 15
                        </ul>
                        <br></br>
                        <img src={omnom} alt="being annoyed by string" class = "center"/>
                      </ul>
                    </ul><br></br>
                    <h2> <li><strong>Conditionals</strong></li> </h2>
                    <ul>
                      <li>Conditionals are used to determine the flow of your program by evaluating conditions with bools (true or false). If a certain condition is <strong><em>true</em></strong>, the block of code with that condition will run. If the condition is <strong><em>false</em></strong>, that block of code will not run</li>
                      <li>In code, we used <strong>if-else</strong> statements, along with <strong>else if</strong> statements, to determine which code should be executed</li>
                      <li>The benefit of using else-if statements is to run multiple conditions without writing a whole bunch of if-statements</li>
                      <li>The image below is the syntax for conditionals: </li>
                    </ul>
                    <br></br>
                    <img src={conditionals} alt="" class = "center"/>
                    <img src={conditionalGif} alt="" class = "center"/>
                    <h2> <li><strong>Loops</strong></li> </h2> 
                    <img src={fruits} alt="fruit loops overwhelm ppl trying to learn loops lol" class = "center"/><br></br>
                    <h2> <li><strong>Functions</strong></li> </h2>
                    {/* <img src={buttons} alt="buttons being pushed" class = "center"/> */}
                    <ul>
                      <li>Functions are used to store pieces of code that does a single task in a defined block. Once you have implemented that, you can call that code when needed</li>
                      <li>The benefit of using functions that it <em>reduces</em> the redundancy of code</li>
                      <li>When writing a function, it's important to know what you want to return. For example, if you want to return an int, the type of function should be an int.</li>
                      <li>There's also a function type called <strong>void</strong> which has <em>no return value</em></li>
                      <li>The image below is an example of a function to check if the first number (int n) is divisible by the second (int d):</li> <br></br>
                    </ul>
                    <img src={functions} alt="" class = "center"/>
                    <img src={buttons} alt="buttons being pushed" class = "center"/>
                    
                    <h2> <li><strong>Generating random numbers</strong></li> </h2>
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
              <img src={pointer} alt="spiderman" class = "center"/>
          </div>
      </div>
  
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              Object oriented
              </h1>
              <p class="text-small">
                  Object Oriented Programming (OOP) is based on the idea of classes. Classes are like templates, they have their own instance variables, functions, and are often used to store information in an orderly way. For example, we could make a person class. Each person has a name, age, birthdate, country of origin, etc. These values can be stored as strings, ints, doubles, you name it! Instead of declaring and initialzing each variable for every single person, the Person class can take care of that for you, sort of like a container for all that info. It's like if you asked a person to fill out an official government form with set questions, vs giving them a blank piece of paper and asking them to provide info about themselves. You wouldn't have to tell them "write your name, age, etc.", it would be written on the paper itself.
                  <br></br> So, in simpler terms, classes can allow you to make custom variable types. Strings have their own set functions, as do ints, and doubles, chars, bools.. they are just data types. Classes are a way of making your own data types.
                  <br></br>
                  <br></br>
                  <img src={classExample} alt="w3schools explain classes" class = "center"/><br></br>
                  This image from w3schools shows a standard class declaration. Here, since the 2 variables are public, they may be accessed outside of the class. However, if the variables were private, you might have to make get and set member functions. The private keyword is a great way to restrict access to functions or variables outside of the class declaration, especially if you don't want people changing stuff willy nilly.
                  Also, another commmon convention of classes is to create a constructor. Here, there is no constructor, but since all the variables are public, to set their value you can just do myObject.varName = value;
                  Constructors are typically written as classname() under public: in the class declaration. Inside the constructor, it initalizes all the member variables to their default value. With a constructor, you can then make objects of that class by writing className objectName = new className(), assuming you are using the default constructor, which has no parameters. Nondefault constructors function the same way, except they use parameters as the values for the data members.
                  <br></br><br></br> Now, let's imagine you actually have a life, (a life object made with a life class), below may be some functions that are part of the life class.
                  <br></br>
                  <br></br>
                  <img src={life} alt="if code described life" class = "center"/>
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
              <img src={vector} alt="direction and maginutde" class = "center"/>
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
              <img src={inheritance} alt="" class = "center"/>
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
              <img src={recur} alt="recursive dancing" class = "center"/><br></br>
          </div>
      </div>
      <div class = "note">
        <h2 class = "center">Congratulations! You now know C++. Good job buddy, now let's learn CSS!! <br></br>(it's even more fun I swear :D)</h2><br></br>
          <img src={ham} alt="sad and flat" class = "center"/>
      </div>
  </section>
  
    );
  }

export default App
