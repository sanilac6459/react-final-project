import React from 'react'
import './Info.css'
import helloWorld from '../img/coding-hello-world.gif'
import loops from "../img/loops.png"
import fruits from '../img/fruit loops.gif'
import omnom from "../img/string.gif"
import conditionals from "../img/conditionals.png"
import conditionalGif from "../img/conditionalTantrum.gif"
import functions from "../assets/functions.png"
import buttons from "../img/weirdAnimeboi.gif"

export default function Basics() {
    return (
        <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              <u>Basics</u>
              </h1>
                  <ul> 
                    <li class = "list">When coding, make sure you have import the library <strong> #include {"<iostream>"} </strong>and implement<strong> using namespace std</strong>. This means you're using the standard defintions for keywords like cin, cout, to_string, etc.</li>
                    <li>At the end of every line [with some exceptions], remember to add a semi-colon or your program will break. The semicolon is kind of like the period in regular writing. It lets the compiler know when each line is done when it's reading the code.</li>
                    <li>When coding in the main function, <strong>int main()</strong>, add the syntax <strong>return 0; </strong> which will end your program once it's runned</li><br></br>
                    
                    
                     <h2> <li><strong><u>Print statements</u></strong></li> </h2>
                      <img src={helloWorld} alt="anime girl typing furiously to cout hello world" class = "center"/><br></br>
                        <ul>
                         <li>Use <strong>cout</strong> and the symbol <strong>{"<<"}</strong> to add onto your statement if needed</li>
                          <ul>
                          <li>Ex. <strong>cout {"<<"} "Hello World"</strong>; // prints Hello World </li>
                            </ul>
                        </ul><br></br>
                        
                        <h2> <li><strong><u>Taking in user's input</u></strong></li> </h2>
                        <ul>
                          <li>Use <strong>cin</strong> and the symbol <strong>{">>"}</strong></li>
                          <li><strong>Input Redirection: </strong> after compiling, type ./a.out {" < "} fileName.txt , assuming you want to read from a text file.
                          <br></br>Then, declare a variable, and do cin {">>"} varName to get input as usual.</li>
                        </ul><br></br>
                        <h2>  <li><strong><u>New line</u></strong></li> </h2>
                    <ul>
                      <li>Use <strong>\n</strong> or <strong>endl</strong> to add a new line after a statement</li>
                      <ul>
                      <li>Ex. "\n [your string]" or "your string" {"<<"} endl; → both can be used, and not just with strings. Concatenating \n with ints (integers), doubles (decimals), booleans (true or false), and more, is possible.</li>
                      </ul>
                    </ul><br></br>
                    <h2> <li><strong><u>String methods</u></strong></li> </h2>
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
                    <h2> <li><strong><u>Conditionals</u></strong></li> </h2>
                    <ul>
                      <li>Conditionals are used to determine the flow of your program by evaluating conditions with bools (true or false). If a certain condition is <strong><em>true</em></strong>, the block of code with that condition will run. If the condition is <strong><em>false</em></strong>, that block of code will not run</li>
                      <li>In code, we used <strong>if-else</strong> statements, along with <strong>else if</strong> statements, to determine which code should be executed</li>
                      <li>The benefit of using else-if statements is to run multiple conditions without writing a whole bunch of if-statements</li>
                      <li>The image below is the syntax for conditionals: </li>
                    </ul>
                    <br></br>
                    <img src={conditionals} alt="" class = "center"/>
                    <img src={conditionalGif} alt="" class = "center"/>
                    <h2> <li><strong><u>Loops</u></strong></li> </h2> 
                    <ul>
                      <li>Loops are used to repeat a block of code until a certain condition has been met. Once that condition becomes false, the loop would stop running</li>
                      <li>There's three different loops:</li>
                      <ul>
                        <li><strong>While loop</strong> →Runs until the set condition (declared in loop header) is false</li>
                        <li><strong>For loop</strong> → Runs a certain amount of times, usually defined by the user/coder.</li>
                        <li><strong>For each loop</strong> → Similar to a for loop, but you don't define the bounds. It automatically iterates through everything. Usually used to go trhough vectors and arrays.</li>
                        <br></br>
                        <li>In short, while loops if you're not sure how many times it needs to loop, for loops if you DO know, and for each if you want to loop through everything.
                          <br></br> Of course, you can use while loops and for loops interchangeable sometimes, and for each loops can be replaced by regular for loops. Mix and match!
                        </li>
                      </ul>
                      <li>The image below are examples of the three loops:</li>
                      
                    </ul>
                    <br></br>
                    <img src={loops} alt="" class = "center" id = "img"/> <br></br>
                    <img src={fruits} alt="fruit loops overwhelm ppl trying to learn loops lol" class = "center"/><br></br>
                    <h2> <li><strong><u>Functions</u></strong></li> </h2>
                 
                    <ul>
                      <li>Functions are used to store pieces of code that does a single task in a defined block. Once you have implemented that, you can call that code when needed</li>
                      <li>The benefit of using functions that it <em>reduces</em> the redundancy of code</li>
                      <li>When writing a function, it's important to know what you want to return. For example, if you want to return an int, the type of function should be an int.</li>
                      <li>There's also a function type called <strong>void</strong> which has <em>no return value</em></li>
                      <li>The image below is an example of a function to check if the first number (int n) is divisible by the second (int d):</li> <br></br>
                    </ul>
                    <img src={functions} alt="" class = "center"/>
                    <img src={buttons} alt="buttons being pushed" class = "center"/>
                    
                    <h2> <li><strong><u>Generating random numbers</u></strong></li> </h2>
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
    );
}