// Write your helper functions here!

//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    //list = document.getElementById("faultyItems");
    //h2 = document.getElementById("launchStatus");
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
        return;
    }

    if (validateInput(pilot) === "Is a Number") {
        alert("Pilot name should be a string.");
        return;
    }

    if (validateInput(copilot) === "Is a Number") {
        alert("Co-pilot name should be a strings.");
        return;
    }

    if (validateInput(fuelLevel) === "Not a Number") {
        alert("Fuel Level should be a number.");
        return;
    }
    if (validateInput(cargoMass) === "Not a Number") {
        alert("Cargo Mass should be a number.");
        return;
    }



    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
    copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;

    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

   // fuelLevel = Number(fuelLevel);
   // cargoMass = Number(cargoMass);

    faultyItems.style.visibility = "visible";

    if (fuelLevel < 10000 || cargoMass > 10000) {
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        if (fuelLevel < 10000) {
            fuelStatus.textContent = "Fuel level too low for launch";
        } else {
            fuelStatus.textContent = "Fuel level high enough for launch";
        }
        if (cargoMass > 10000) {
            cargoStatus.textContent = "Cargo mass too heavy for launch";
        } else {
            cargoStatus.textContent = "Cargo mass low enough for launch";
        }
    } else {
        launchStatus.textContent = "Shuttle is Ready for Launch";
        fuelStatus.textContent = "Fuel level high enough for launch";
        cargoStatus.textContent = "Cargo mass low enough for launch";
        launchStatus.style.color = "green";
    }

    // if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
    //     alert("Pilot and Co-pilot names should be strings.");
    //     return;
    // }

    // if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    //     alert("Fuel Level and Cargo Mass should be numbers.");
    //     return;
    // }


}










async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

//module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;