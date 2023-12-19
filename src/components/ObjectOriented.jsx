import React from 'react'
import './Info.css'
import classExample from "../img/classDef.png"
import life from "../img/life.gif"

export default function ObjectOriented() {
    return (
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

    );
}