const info = require("readline-sync");



let date = "Monday 2019-03-18";
let time = "10:05:34 AM"
let astronatCount = info.question("How many astronauts? ");
let astronatStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronatCount* averageAstronautMassKg;
let fuelMassKg =760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg+ fuelMassKg+shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 100;
let weatherStatus = "clear";

let dash = "-"
console.log(dash.repeat(37));
console.log("> LC04 - LAUNCH CHECKLIST ")
console.log(dash.repeat(37));
console.log ("Date: "+ date);
console.log(time);
console.log("");
console.log(dash.repeat(37));
console.log("> ASTRONAUT INFO ")
console.log(dash.repeat(37));
console.log("* count: "+ astronatCount);
console.log("* status: " + astronatStatus);
console.log("");
console.log(dash.repeat(37));
console.log("> FUEL DATA ")
console.log(dash.repeat(37));
console.log("* Fuel temp celsius: "+ fuelTempCelsius)
console.log("* Fuel level: "+ fuelLevel);
console.log("");
console.log(dash.repeat(37));
console.log("> MASS DATA ")
console.log(dash.repeat(37));
console.log("* Crew mass: "+ crewMassKg + " kg");
console.log("* Fuel mass: " + fuelMassKg + " kg");
console.log("* Shuttle mass: "+ shuttleMassKg + " kg");
console.log("* Total mass: " + totalMassKg + " kg");
console.log("");
console.log(dash.repeat(37));
console.log("> FLIGHT PLAN ")
console.log(dash.repeat(37));
console.log("* Weather: "+ weatherStatus)
console.log("");
console.log(dash.repeat(37));
console.log("> OVERALL STATUS ")
console.log(dash.repeat(37));
console.log("* Clear for takeoff: YES")


