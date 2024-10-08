// Write your helper functions here!
//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = `
        <h2>Mission Destination</h2 >
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                    `;
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
}


async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;