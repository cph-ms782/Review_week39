import 'bootstrap/dist/css/bootstrap.css'
import { isNullOrUndefined } from 'util';
import tables from "./tables";

var div;

div = document.querySelector("#inputDiv");

// 2. Add a reload button that should refresh the page designed in the 
// previous step. Use Postman to add a new Person to verify that we 
// actually get an updated list (without having to create a new page 
// on the server).
document.querySelector("#reloadButton").addEventListener("click", getFunc);
document.querySelector("#addButton").addEventListener("click", toogleInput);
document.querySelector("#addButtonInputForm").addEventListener("click", postFunc);

getFunc();

// 1. Implement a read-only page to show all Persons in a table. The table must be 
// built in the browser using plain JavaScript, and data fetched via a REST call.
// Implement a read-only page to show all Persons in a table. The table must be 
// built in the browser using plain JavaScript, and data fetched via a REST call.
function getFunc() {
    console.log("Get function");
    fetch("http://localhost:8080/the-facade-and-the-matching-endpoints/api/person/all")
        .then(res => res.json())
        .then(data => {
            console.log("data",data);
            if(data!=isNullOrUndefined || TABLEDIV!=isNullOrUndefined){
                tables.list2Table(data.all, "#tableDiv") //list2Table comes from tables.js
            }

            // add column for edit

        })
};

function postFunc() {
    div.style.display = div.style.display == "none" ? "block" : "none";
    console.log("post function");
    let options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                "firstName": document.querySelector("#inputFirstName").value,
                "lastName": document.querySelector("#inputLastName").value,
                "phone": document.querySelector("#inputPhone").value
        })
    }

    fetch("http://localhost:8080/the-facade-and-the-matching-endpoints/api/person/", options);
};

function toogleInput(){
    div.style.display = div.style.display == "none" ? "block" : "none";
};