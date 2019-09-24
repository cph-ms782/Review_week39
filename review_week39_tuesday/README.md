# Review_week39

## [Callbacks and more (JavaScript Exercises - Period 2 Day-1)](https://docs.google.com/document/d/1vl8J-PUiFIzUt6jCE9gGpiw5XvOW1L3FeouTiWemwt8/edit)  

### The magic of callbacks
1) Using existing functions that takes a callback as an argument  
2) Implement user defined functions that take callbacks as an argument  
3) Using the Prototype property to add new functionality to existing objects  
4) Getting really comfortable with filter and map  

### The magic of callbacks  
a) Use map + a sufficient callback to map numbers into this array:
`var result = [4,8,15,21,11];`  
b) Use map() to create to create the <a>’s for a navigation set and eventually a string  
c) Use map()+(join + ..) to create to create a string, representing a two column table  
d) Create a single html-file and test the two examples given above.  
e) Add a button with a click-handler and use the filter method to find only names containing the letter ‘a’. Update the nav and the table to represent the filtered data  

### reduce  
a) Use join to create a single string from all, with names: comma-, space. and  # - separated.  
b) Create a reducer callback that, with reduce(..), will return the sum (105) of all values in numbers  
c) Create a reducer callback that, using the Array’s reduce() method,  will return the average age of all members (25 for the provided array).  
d) Create a reduce function that will return a single object like {Clinton: 3, Trump: 4, None: 1 }  


### Hoisting  
Team up with another member of the class. Read about hoisting and implement at least two examples (individually) to illustrate that:

 * Function declarations are completely hoisted  
_****_  

 * var declarations are also hoisted, but not assignments made with them  
_****_  

Explain to each other (as if it was the exam):  

 * What hoisting is  
_****_  

 * A design rule we could follow, now we know about hoisting  
_****_  
  
What is the difference between the keyword var and the ES6 keyword let?  
_****_  


### _this_ in JavaScript  
Explain to each other, using the examples (as if it was the exam):

 * How this in JavaScript differ from this in Java
 * The purpose of the methods call(), apply() and bind()


### Reusable Modules with Closures   
1) Implement and test the Closure Counter Example from w3schools
2)Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age) and returns an object with the following methods:

 * setAge
 * setName
 * getInfo (should return a string like Peter, 45)
