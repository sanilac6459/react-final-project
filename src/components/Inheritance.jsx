import React from 'react'
import './Info.css'
import inheritance from "../img/matroyoshka.gif"

export default function Inheritance() {
    return (
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
                      <li>In order to derive all the <strong>public</strong> properties, you must declare the subclass in the following way: </li>
                      <ul>
                        <li>
                          <strong>class</strong> subclassName <strong>: public</strong> superclassName
                        </li>
                      </ul>
                      <li>You can also use the superclass's methods and constructors by using scope to inherit those properties. For example: </li>
                      <ul>
                        <li>Student::Student(datatype parameter1, datatype parameter2) : Person(datatype parameter1)</li>
                      </ul>
                      <li>In addition, when making objects from subclasses, you have to be careful when setting an object equal to another object because only superclasses can be set by a subclass. For example: </li>
                      <ul>
                        <li>Person p; <br></br> Student s;</li>
                        <li><strong>p = s</strong> is <strong>allowed</strong>. This is because Student has all the properties Person has already, so a Person can be set by a Student</li>
                        <li><strong>s = p</strong> is <strong>not</strong> allowed. This is because Student is the subclass, so they have more properties that the Person class is missing. Therefore, a Student can't be set by a Person</li>
                      </ul>
                    </ul>

                  </ul>

              </p>
              <img src={inheritance} alt="" class = "center"/>
          </div>
      </div>

    );
}