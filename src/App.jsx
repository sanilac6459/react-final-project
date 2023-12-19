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
import functions from "./assets/functions.png"
import vector from "./img/vector.gif"
import pointer from "./img/pointers.gif"
import omnom from "./img/string.gif"
import inheritance from "./img/matroyoshka.gif"
import buttons from "./img/weirdAnimeboi.gif"
import loops from "./img/loops.png"
import recursion from "./img/recursion.png"
import useSound from 'use-sound'

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
                <button onClick={playSound}>Play BGM</button>
              </div>
          </div>
      </div>
          
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
      <br></br>
      <br></br>
  
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              <u> Pointers</u>
              </h1>
              <p class="text-small">
                  <ul>
                    <li>Pointers are... well they point to another variable!</li>
                    <li>Each variable you make have their own unique <strong>address</strong> stored in it</li>
                    <li>And pointers take in the address of the variable you want it to point to and can be used to modify the original variable!</li>
                    <li>There are three ways to define and initialize a pointer (for this example, we will be using an integer pointer): </li>
                    <ul>
                      <li><strong>int* variableName = nullptr</strong></li>
                      <li> <strong>int a = 4</strong> <br></br>
                      <strong>int* pointerToA = &a</strong></li>
                      <ul>
                        <li>The & operator displays the address of the datatype</li>
                      </ul>
                      <li><strong>int* variableName = new int</strong></li>
                      <ul>
                        <li>Note: the location of the <strong>*</strong> doesn't matter as long as it's between the data type and the name of the variable, and that there's a space separating the data type and variable name.</li>
                      </ul>
                    </ul>
                  </ul>

                  <h2><li><strong><u>Using a Pointer</u></strong></li></h2>
                  <ul>
                    <li>Pointers point to the address of another variable's data</li>
                    <li>Therefore, it can change that data. For example:</li>
                    <ul>
                      <li>int a = 8; <br></br> int* ptr = &a; <br></br> *ptr = 5</li>
                      <li>If you print out a, it should be 5</li>
                    </ul>
                    <li>In the example, you needed the <strong>*</strong> before the variable name. This is important because pointers store addresses, so if you want to change the value of the int a, you need to make it point to the original variable.</li>
                    <li>Therefore, if you try to print out the value of ptr, you would get the address, but printing out *ptr would print out the value.</li>
                  </ul>

                  <h2><li><strong><u>Pointers in Arrays</u></strong></li></h2>
                  <ul>
                    <li>Pointers also work alongside arrays!</li>
                    <li>For example, you can create an array of pointers: </li>
                    <ul>
                      <li><strong>int* arr = {'{'}5,6,7,8{'}'};</strong></li>
                      <li>int size = 6; <br></br> int* arr = new int[5]</li>
                    </ul>
                    <li>But, that is not the only thing pointers can do for arrays...</li>
                    <li>In a program, the name of the array actually stores the address of the first element in the array!</li>
                    <ul>
                      <li>Therefore, if you have an array initialized as int arr[5]; <strong>arr == &arr[0]</strong></li>
                    </ul>
                    <li>So, when you use a pointer on an array name, you get the value of the first element</li>
                    <li>If you want the other elements, you can add numbers depending on the size of the array. This is able to happen because the addresses for each of the elements are next to each other.</li>
                    <ul>
                      <li>For example, in int arr[] = {'{'}1,2,3{'}'} <br></br> (arr+1) == &arr[1] <br></br> and *(arr+2) == arr[2]</li>
                    </ul>

                    <h2><li><strong><u>Pointers in 2D Arrays</u></strong></li></h2>
                    <ul>
                      <li>You can also make a 2D array of pointers!</li>
                      <li>In order to create and initialize a 2D array of pointers, you must follow these steps:</li>
                      <ul>
                        <li>int size = 4; <br></br> int** arr = new int* arr[5]; <br></br> for(int i = 0; i {'<'} 5; i++) {'{'} <br></br> arr[i] = new int[size]; <br></br> {'}'}</li>
                        <ul>
                          <li>The reason why we use <strong>**</strong> instead of just <strong>*</strong> is to make sure we have two sets of pointers instead of one</li>
                        </ul>
                      </ul>
                      <li>You will have then created a 2D pointer array with 5 rows and 4 columns!</li>
                    </ul>

                    <h2><li><strong><u>Dynamic Memory Allocation</u></strong></li></h2>
                    <ul>
                      <li>When using pointers, you might not need it anymore after some time, therefore you would want to delete it so it can free up memory!</li>
                      <li>This is called <strong>dynamic memory allocation</strong>!</li>
                      <li>By using the key words <strong>delete</strong> for a single element/variable and <strong>delete[]</strong> for an array of elements, you can delete the data of the pointer to free up space. If you're pointing to another variable, that variable will still exist, it's only the pointer that's being freed up in order to make more memory avaiable</li>
                      <li>Using delete is not the end though, after that you want to avoid the <strong>dangling pointer</strong> problem</li>
                      <li>A <strong>dangling pointer</strong> is when there is a pointer that is pointing to data that is invalid, or is already deleted</li>
                      <li>Therefore, in order to avoid the dangling pointer problem, you want to set your variable or array to <strong>nullptr</strong>. For example:</li>
                      <ul>
                        <li><strong>delete</strong> a; <br></br> a = <strong>nullptr</strong>;</li>
                        <li><strong>delete[]</strong> a; <br></br> a = <strong>nullptr</strong>;</li>
                      </ul>
                      <li>Remember to delete any data you don't need anymore to free up memory!</li>
                    </ul>
                  </ul>
              </p>
              <img src={pointer} alt="spiderman" class = "center"/>
          </div>
      </div>
      <br></br>
      <br></br>
  
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              <u>Object oriented</u>
              </h1>
              <p class="text-small">
                <ul>
                  <li>Object Oriented Programming (OOP) is based on the idea of <strong>classes</strong>. Classes are like templates, they have their own instance variables, functions, and are often used to store information in an orderly way</li>
                  <li>For example, we could make a person class. Each person has a name, age, birthdate, country of origin, etc. These values can be stored as strings, ints, doubles, you name it</li>
                  <li>Instead of declaring and initialzing each variable for every single person, the Person class can take care of that for you, sort of like a container for all that info. It's like if you asked a person to fill out an official government form with set questions, vs giving them a blank piece of paper and asking them to provide info about themselves. You wouldn't have to tell them "write your name, age, etc.", it would be written on the paper itself</li>
                  <li>So, in simpler terms, classes can allow you to make custom variable types. Strings have their own set functions, as do ints, and doubles, chars, bools, they are just data types. Classes are a way of making your own data types</li>
                </ul>
                  <br></br>
                  <img src={classExample} alt="w3schools explain classes" class = "center"/><br></br>
                  <ul>
                    <li>This image from w3schools shows a standard class declaration. Here, since the 2 variables are <strong>public</strong>, they may be accessed outside of the class. However, if the variables were private, you might have to make get and set member functions</li>
                    <ul>
                    <li>The <strong>private</strong> keyword is a great way to restrict access to functions or variables outside of the class declaration, especially if you don't want people changing stuff willy nilly.</li>
                    <li>Also, another commmon convention of classes is to create a <strong>constructor</strong></li>
                    <ul>
                    <li>Here, there is no constructor, but since all the variables are public, to set their value you can just do <strong><em>myObject.varName = value;</em></strong></li>
                    <li> <strong>Constructors</strong> are typically written as classname() under public: in the class declaration. Inside the constructor, it initalizes all the member variables to their default value. With a constructor, you can then make objects of that class by writing <strong><em>className objectName = new className()</em></strong>, assuming you are using the default constructor, which has no parameters.</li>
                    <li><strong>Nondefault</strong> constructors function the same way, except they use parameters as the values for the data members.</li>
                    </ul>
                    </ul>
                  
                  </ul>
                  
                   <ul>
                    <li>Now, let's imagine you actually have a life, (a life object made with a life class), below may be some functions that are part of the life class</li>
                   </ul>
                  <br></br>
                  
                  <img src={life} alt="if code described life" class = "center"/>
              </p>
          </div>
      </div>
      <br></br>
      <br></br>
  
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
      <br></br>
      <br></br>
  
      <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              <u>Inheritance</u>  
              </h1>
              <p class="text-small">
                  Before we learned that the purpose of <strong>Classes</strong> is to simplify our code and reduce redundancy. But what if you want to have some special cases in your class that not all the objects will share?
                  <br></br> Sure, you can modify your existing class declaration, but that would be annoying, since not all of the cases apply to your intent of the object 
                  <br></br> For example, let's say you have a Person class. Each person has a different occupation and each occupation has their own specific little details. A Person with a doctor occupation is going to have patients but a Person with a student occupation has no need for that. How can we solve this problem?
                  <br></br><strong>Solution: </strong> Create a <strong>subclass</strong>
                  <ul>
                    <li>A <strong>subclass</strong> derives all the public properties of an existing class while including it's own properties</li>
                    <li>Similarly, a <strong>superclass</strong> is a class where it's properties are being inherited by a <strong>subclass</strong></li>
                    <li>For example, let's say you have a Person class and the Student subclass</li>
                    <ul>
                      <li>The Person class would have properties such as name, age, birthday, etc.</li>
                      <li>By making Student a subclass of Person and deriving the public properties of Person, Student would already have the properties name, age, birthday, etc. because it derived it from the Person class</li>
                      <li>Therefore, you only need to make things that are specific to the Student class, such as GPA, classes, schedule, etc.</li>
                      <ul>
                        <li>This also shows another reason why you would need a Student subclass, since not every person object has a GPA or takes classes, but every Student object has a name and age just like every Person object</li>
                      </ul>
                    </ul>
                    <li>Something of importance to remember is that the subclass will not have <strong>access</strong> to any private data members, but it can still inherit any private data members</li>
                    
                    <h2><li><strong><u>Using Subclasses</u></strong></li></h2>
                    <ul>
                      <li></li>
                    </ul>

                  </ul>

              </p>
              <img src={inheritance} alt="" class = "center"/>
          </div>
      </div>
      <br></br>
      <br></br>
  
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
