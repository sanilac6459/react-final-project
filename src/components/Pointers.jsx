import React from 'react'
import './Info.css'
import pointer from "../img/pointers.gif"


export default function Pointers() {
    return (
        <div class="box-main">
          <div class="firstHalf">
              <h1 class="text-big">
              <u>Pointers</u>
              </h1>
              <p class="text-small">
                  <ul>
                    <li>Pointers are... well they point to another variable!</li>
                    <li>Each variable you make have their own unique <strong>address</strong> stored in it</li>
                    <li>And pointers take in the address of the variable you want it to point to and can be used to modify the original variable!</li>
                    <li>There are three ways to define and initialize a pointer (for this example, we will be using an integer pointer): </li>
                    <ul>
                      <li><strong>int* variableName = nullptr</strong></li>
                      <li><strong>int a = 4</strong><br></br>
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
    );
}