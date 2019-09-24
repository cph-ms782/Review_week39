"use strict"

/* 1)
Using existing functions that takes a callback as an argument */

var d = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Etc"];

/* Using the filter method:
Declare a JavaScript array and initialize it with some names(Lars, Jan, Peter, Bo, Frederik etc.).Use the filter method to 
create a new array with only names that contains the letter ‘a’. */
var nyArr = d.filter(name => name.includes('a'));
console.log("1. filter: " + nyArr);

/* Using the map method:
Use the names - array created above, and, using its map method, create a new array with all names reversed */
var nyArr2 = nyArr.map(name => name.split("").reverse().join("")).reverse(); // first reverse reverse strings and 2. reverse array
console.log("1. map: " + nyArr2);



/* 2)
Implement user defined functions that take callbacks as an argument  */

/* a. Implement a function: myFilter(array, callback)that takes an array as the first argument,
and a callback as the second and returns a new (filtered) array according to the code provided
in the callback   */
function myFilter(array, callback) {
    return callback(array);
};

let filterA = (noget) => {
    var newArray = [];
    noget.forEach(element => {
        if (element.includes('a')) {
            newArray.push(element);
        }
    });
    return newArray;
};

var nyArr3 = myFilter(d, filterA);
console.log("2a.: " + nyArr3);


/* b. Implement a function: myMap(array, callback) that, provided an array and a callback,
provides the same functionality as calling the existing map method on an array. */
function myMap(array, callback) {
    var newArray2 = [];
    array.forEach(element => {
        newArray2.push(callback(element));
    });
    return newArray2;
};

let reverser = (noget) => {
    return noget.split("").reverse().join("");
};

// Test the method with the same array and callback as in the example with the original map method. 
var nyArr4 = myMap(nyArr3, reverser).reverse();
console.log("2b.: " + nyArr4)


/* 3)
Using the Prototype property to add new functionality to existing objects */
var names1 = ["Lars", "Peter", "Jan", "Bo"];
// var newArray = names.myFilter(function(name) {…});
Array.prototype.myFilter2 = function (callback) {
    return callback(this);
};

Array.prototype.myMap2 = function (callback) {
    var newArray2 = [];
    this.forEach(element => {
        newArray2.push(callback(element));
    });
    return newArray2;
};

var newArray = names1.myFilter2(filterA).myMap2(reverser);
console.log("3.: " + newArray);



/* 4)
Getting really comfortable with filter and map  */

/* a) Use map + a sufficient callback to map numbers into this array:
`var result = [4,8,15,21,11];`  */
var numbers = [1, 3, 5, 10, 11];
var result = numbers.map(function (num, index, numbers) {
    if (index < numbers.length - 1) {
        return num + numbers[++index];
    } else {
        return num;
    }
});
console.log("4a.: " + result);


// b) Use map() to create the <a>’s for a navigation set and eventually a string  
function makeNav(arr) {
    var htmls = [];
    htmls.push("<nav>");
    var htmlA = arr.map(name => '<a href=””>' + name + '<\/a>');
    htmls.push(htmlA.join(""));
    htmls.push("</nav>");
    return htmls.join("");;
}
console.log("4b.: \n" + makeNav(names1));


// c) Use map()+(join + ..) to create to create a string, representing a two column table  
var names = [
    { name: "Lars", phone: "1234567" },
    { name: "Peter", phone: "675843" },
    { name: "Jan", phone: "98547" },
    { name: "Bo", phone: "79345" }
];

function makeTable(arr) {
    var tableString = [];
    tableString.push("<table><tbody><tr><th>name</th><th>phone</th></tr>")
    arr.map(object => tableString.push("<tr><td>" + object.name + "</td><td>" + object.phone + "</td></tr>"));
    tableString.push("</tbody></table>");
    return tableString.join("");
}
console.log("4c.: \n" + makeTable(names));


// d) Create a single html-file and test the two examples given above.
console.log(makeNav(names));
document.querySelector("#names").innerHTML = makeTable(names);
document.querySelector("#navnames").innerHTML = makeNav(names1);


// e) Add a button with a click-handler and use the filter method to find only names containing the letter ‘a’. 
document.querySelector("#clicky").addEventListener("click", clickButton);

let filterB = (noget) => {
    var newArray = [];
    noget.forEach(element => {
        console.log(element);
        if (element.name.includes('a')) {
            newArray.push(element);
        }
    });
    return newArray;
};

// Update the nav and the table to represent the filtered data
function clickButton() {
    document.querySelector("#names").innerHTML = makeTable(names.myFilter2(filterB));
    document.querySelector("#navnames").innerHTML = makeNav(names1.myFilter2(filterA));
}

