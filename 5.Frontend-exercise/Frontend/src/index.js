import 'bootstrap/dist/css/bootstrap.css'
import { isNullOrUndefined } from 'util';
import tables from "./tables";

var div;
div = document.querySelector("#inputDiv");

const mainURL = "http://localhost:8080/the-facade-and-the-matching-endpoints/api/person/";

// 2. Add a reload button that should refresh the page designed in the 
// previous step. Use Postman to add a new Person to verify that we 
// actually get an updated list (without having to create a new page 
// on the server).
document.querySelector("#reloadButton").addEventListener("click", getFunc);
document.querySelector("#addButton").addEventListener("click", toggleInputForm);

getFunc();

// 1. Implement a read-only page to show all Persons in a table. The table must be 
// built in the browser using plain JavaScript, and data fetched via a REST call.
// Implement a read-only page to show all Persons in a table. The table must be 
// built in the browser using plain JavaScript, and data fetched via a REST call.
function getFunc() {
    // console.log("Get function");
    fetch(mainURL + "all")
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
    toggleInputForm("toggle");
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

    fetch(mainURL, options);
};


function putFunc(idsdsds) {
    toggleInputForm("toggle");
    console.log("put function, idNumber", idsdsds);
    let options = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": idsdsds,
            "firstName": document.querySelector("#inputFirstName").value,
            "lastName": document.querySelector("#inputLastName").value,
            "phone": document.querySelector("#inputPhone").value
        })
    }
    console.log("mainURL + id", mainURL + idsdsds)
    fetch(mainURL + idsdsds, options);
};

function deleteFunc(id) {
    console.log("delete function");
    let options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(mainURL + id, options);
};


function toggleInputForm(type, idnum) {
    div.style.display = div.style.display == "none" ? "block" : "none";
    if (type === "edit") {
        console.log("in edit -> idnum", idnum)
        document.querySelector("#addButtonInputForm").addEventListener("click", function () {
            console.log("in edit function()-> idnum", idnum)
            putFunc(idnum);
        });
    } else if (type === "toggle") {

    }
    else {
        document.querySelector("#addButtonInputForm").addEventListener("click", postFunc);
    }
}

function linking() {
    var tableBody = document.querySelectorAll("#tableDiv tbody tr");    // selecting all rows in table
    var firstRow = document.querySelector("#tableDiv tbody :first-child");    // selecting all rows in table

    tableBody.forEach(element => {                                      // adding links to new tablecolumn but not the first row  
        if (firstRow !== element) {

            //first column of row = id
            var rowID = element.querySelector(":first-Child").innerHTML;
            // console.log("rowID", rowID);

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
}

//adding eventlistener to table body
document.querySelector("#tableDiv").addEventListener("click", tableEvents);

function tableEvents(e) {
    console.log("e.target", e.target);
    var method = e.target.parentElement.querySelector(":first-child").innerHTML;
    var id = e.target.parentElement.querySelector(":link").id;

    console.log("method", method);
    console.log("id", id);

    if (method === "delete") {
        deleteFunc(id);
        getFunc();
    }
    if (method === "edit") {
        toggleInputForm("edit", id);
        getFunc();
    }
};