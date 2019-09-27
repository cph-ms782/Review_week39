import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

// const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>").join("");
// document.querySelector("#jokes").innerHTML = allJokes;

//  implement functionality (in index.js) to find a joke, given it’s id.
// document.querySelector("#getJokeButton").addEventListener("click", clicky);
// function clicky(){
//     var getJokeInput = document.querySelector("#inputGetJoke").value;
//     document.querySelector("#jokes").innerHTML = jokes.getJokeById(getJokeInput);
// };

// add the necessary changes to add new jokes to the internal joke-facade.
// document.querySelector("#setJokeButton").addEventListener("click", clickySetJoke);
// function clickySetJoke(){
//     var setJokeInput = document.querySelector("#inputSetJoke").value;
//     jokes.addJoke(setJokeInput);
//     document.querySelector("#jokes").innerHTML = "Joke added";
// };

// document.querySelector("button").addEventListener("click", motD);
document.querySelector("button").addEventListener("click", timer);

function motD() {
    fetch("https://studypoints.info/jokes/api/jokes/period/hour")
        .then(res => res.json())
        .then(data => {
            document.querySelector("#div").innerHTML = data.joke;
        })

};

function timer() {
    window.setTimeout(motD, 3000);
};

// Add the necessary event handlers, so when pressing each of the “hearts”,
// it will write the  message North, South, East or West respectively.
document.querySelector("#east").addEventListener("click", clickIreland);
document.querySelector("#north").addEventListener("click", clickIreland);
document.querySelector("#west").addEventListener("click", clickIreland);
document.querySelector("#south").addEventListener("click", clickIreland);

function clickIreland(e) {

    document.querySelector("#div").innerHTML = "parent: " + e.target.parentElement.id +
        "\ne.target: " + e.target.id;

};