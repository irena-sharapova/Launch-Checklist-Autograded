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

    // myFetch().then(function(planets) {
    //     console.log(planets);
    // });

    let listedPlanets;
    // console.log(pickPlanet());
    // myFetch().then(function (json){
    //     console.log(json);
    // });
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result.json().then(function (json) {
            const destinationPlanet = pickPlanet(json);
            addDestinationInfo(
                document,
                destinationPlanet.name,
                destinationPlanet.diameter,
                destinationPlanet.star,
                destinationPlanet.distance,
                destinationPlanet.moons,
                destinationPlanet.image
            );
        });
        // console.log(listedPlanets);
        //         pickPlanet().then(function (planet) {
        //             console.log(planet);
        //         });
        //         // }).then(function(){
        //         //      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        //         //      const selectedPlanet = pickPlanet();
        //         //      // Log the selected planet or use it as needed
        //         //      console.log(selectedPlanet);         
        //         // Optionally: Add information about the planet to the DOM or perform other actions
        //         //      addDestinationInfo(
        //         //          document, 
        //         //          selectedPlanet.name, 
        //         //          selectedPlanet.diameter, 
        //         //          selectedPlanet.star, 
        //         //          selectedPlanet.distance, 
        //         //          selectedPlanet.moons, 
        //         //          selectedPlanet.image
        //         //      );
        //         // })

    });
});



// let listedPlanets;
// // Set listedPlanetsResponse equal to the value returned by calling myFetch()
// let listedPlanetsResponse = myFetch();
// listedPlanetsResponse.then(function (result) {
//     listedPlanets = result;
//     console.log(listedPlanets);
// }).then(function () {
//     console.log(listedPlanets);
//     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
// })


// let listedPlanetsResponse = myFetch();
// listedPlanetsResponse.then(function (result) {
// listedPlanets = result;
// console.log(listedPlanets);
// }).then(function () {
// console.log(listedPlanets);


// // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//     addDestinationInfo(
//         document, 
//         selectedPlanet.name, 
//         selectedPlanet.diameter, 
//         selectedPlanet.star, 
//         selectedPlanet.distance, 
//         selectedPlanet.moons, 
//         selectedPlanet.image
//     );




