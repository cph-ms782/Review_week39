// reduce
"use strict"

var all = ["Lars", "Peter", "Jan", "Bo"];

// a) Use join to create a single string from all, with names: comma-, space. and # - separated.
var comma = all.join(",");      // Lars,Peter,Jan,Bo
var space = all.join(" ");      // Lars Peter Jan Bo
var havelaage = all.join("#");  // Lars#Peter#Jan#Bo

console.log(comma);
console.log(space);
console.log(havelaage);

// b) Create a reducer callback that, with reduce(..), will return the sum (105) of all values in numbers
var numbers = [2, 3, 67, 33];

function myFunc(total, num) {
    return total + num;
}

var num = numbers.reduce(myFunc);  // 105
console.log(num);

// c) Create a reducer callback that, using the Array’s reduce() method, will
// return the average age of all members (25 for the provided array).
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }]

function ageReduce(total, currentValue) {
    return (total + currentValue.age);
};

var ageing = members.reduce(ageReduce,0)/members.length;
console.log(ageing);


// d) Create a reduce function that will return a single object like {Clinton: 3, Trump: 4, None: 1 } 
var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];
var a = {}
if (a["clinton"])
 console.log("I Will Not Print")
a["clinton"] = 1;
console.log("You will see me")
console.log("Value of clinton "+ a["clinton"]);