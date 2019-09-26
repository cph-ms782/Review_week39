import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

document.querySelector("#getButton").addEventListener("click", getFunc);
document.querySelector("#postButton").addEventListener("click", postFunc);
document.querySelector("#putButton").addEventListener("click", putFunc);
document.querySelector("#deleteButton").addEventListener("click", deleteFunc);

function getFunc() {
    console.log("Get function");
    fetch("http://localhost:8080/api/test/1")
        .then(res => res.json())
        .then(data => {
            document.querySelector("#div").innerHTML = data.name;
        })
};

function postFunc() {
    console.log("post function");
    let options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "Peter Blonde"
        })
    }

    fetch("http://localhost:8080/api/test/", options);
};

function putFunc() {
    console.log("put function");
    let options = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "Hans Pan"
        })
    }

    fetch("http://localhost:8080/api/test/1", options);
};

function deleteFunc() {
    console.log("delete function");
    let options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch("http://localhost:8080/api/test/1", options);
};