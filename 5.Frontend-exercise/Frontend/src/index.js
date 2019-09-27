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
    // console.log("Get function");
    fetch("http://localhost:8080/the-facade-and-the-matching-endpoints/api/person/all")
        .then(res => res.json())
        .then(data => {
            // console.log("data", data);
            if (data != isNullOrUndefined || TABLEDIV != isNullOrUndefined) {
                tables.list2Table(data.all, "#tableDiv") //list2Table comes from tables.js
            }

            linking(); // add delete/edit links to table 
        })
};

function postFunc() {
    div.style.display = div.style.display == "none" ? "block" : "none";
    // console.log("post function");
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

function toogleInput() {
    div.style.display = div.style.display == "none" ? "block" : "none";
};

function linking() {
    var tableBody = document.querySelectorAll("#tableDiv tbody tr");    // selecting all rows in table
    var firstRow = document.querySelector("#tableDiv tbody :first-child");    // selecting all rows in table
    console.log("firstRow", firstRow);
    // var x = document.getElementById("myTable").rows[0].cells;
    // console.log("tableBody",tableBody);                              
    tableBody.forEach(element => {                                      // adding links to new tablecolumn but not the first row  
        if (firstRow !== element) {

            //first column of row = id
            var rowID = element.querySelector(":first-Child").innerHTML;
            console.log("rowID", rowID);

            //creating delete link
            var cell = element.insertCell(-1);
            var deleteLinkNode = document.createElement("a");
            deleteLinkNode.setAttribute("href", "#");
            deleteLinkNode.setAttribute("class", "btndelete");
            deleteLinkNode.setAttribute("id", rowID);
            var deleteText = document.createTextNode("delete");
            deleteLinkNode.appendChild(deleteText);
            cell.appendChild(deleteLinkNode);
            
            //creating edit link
            cell = element.insertCell(-1);
            var editLinkNode = document.createElement("a");
            editLinkNode.setAttribute("href", "#");
            editLinkNode.setAttribute("class", "btnedit");
            editLinkNode.setAttribute("id", rowID);
            var editText = document.createTextNode("edit");
            editLinkNode.appendChild(editText);
            cell.appendChild(editLinkNode);
        }
    });

    // var cell = e.target.parentElement.insertCell(-1);
    // var text = document.createTextNode("edit/delete");
    // cell.appendChild(text);
};