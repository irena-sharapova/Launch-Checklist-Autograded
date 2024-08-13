// Write your JavaScript code here!

window.addEventListener("load", function () {
    let form = document.querySelector('form');
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let pilotName = document.getElementById("pilotName").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");

        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);

    });

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        const destinationPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document,
            destinationPlanet.name,
            destinationPlanet.diameter,
            destinationPlanet.star,
            destinationPlanet.distance,
            destinationPlanet.moons,
            destinationPlanet.image
        );
    })
});
