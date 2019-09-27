import 'bootstrap/dist/css/bootstrap.css'

document.querySelector("#svg2").addEventListener("click", getFunc);

function getFunc(e) {
    console.log("e.target.id: " + e.target.id);
    // document.querySelector("#div").innerHTML = ("e.target.id: " + e.target.id);
    // document.querySelector("#error").innerHTML = ("e.target.id: " + "http://restcountries.eu/rest/v1/alpha?codes=" + e.target.id);
    var oldcountry = e.target.id;

    //removing -main from ru-main
    // var pos = oldcountry.search("-");
    var country = oldcountry.slice(0, 2);
    document.querySelector("#error").innerHTML = ""; //oldcountry + " " + country;
    fetch("http://restcountries.eu/rest/v1/alpha?codes=" + country)
        .then(res => res.json())
        .then(data => {
            let list = [];
            list.push("Name: " + data[0].name + "<br />");
            list.push("Population: " + data[0].population + "<br />");
            list.push("CallingCodes: " + data[0].callingCodes + "<br />");
            list.push("AltSpellings: " + data[0].altSpellings + "<br />");
            list.push("Languages: " + data[0].languages + "<br />");
            list.push("Borders: " + data[0].borders + "<br />");
            document.querySelector("#p").innerHTML = list.join("");
        })
};


