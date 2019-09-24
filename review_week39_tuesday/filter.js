/* 1) Using existing functions that takes a callback as an argument */

var d = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Etc"];

/* Using the filter method:
Declare a JavaScript array and initialize it with some names(Lars, Jan, Peter, Bo, Frederik etc.).Use the filter method to 
create a new array with only names that contains the letter ‘a’. */
var nyVar = d.filter(name => name.includes('a') > 0);
console.log(nyVar);

/* Using the map method:
Use the names - array created above, and, using its map method, create a new array with all names reversed */
var nyVar2 = nyVar.map(name => name.split("").reverse().join("")).reverse(); // strings and array reversed
console.log(nyVar2);

/* 2) Implement user defined functions that take callbacks as an argument
Now, assume the array did not offer these two methods.Then we would have to implement them by our self.
    a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback as the second
    and returns a new (filtered) array according to the code provided in the callback(this method should provide the
        same behaviour as the original filter method). */

function myFilter(array, callback) {
    callback(array);
};

function callback(e) {
    return e.contains('a');
}

console.log(myFilter(d, callback()));

/* Test the method with the same array and callback as in the example with the original filter method.
    b) Implement a function: myMap(array, callback)that, provided an array and a callback, provides the same functionality
    as calling the existing map method on an array. */

/* Test the method with the same array and callback as in the example with the original map method. */


