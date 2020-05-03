// let launchReady = false;
// let fuelLevel = 17000;

// if (fuelLevel >= 20000) {
//    console.log('Fuel level cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Insufficient fuel!');
//    launchReady = false;
// }

// let launchReady = false;
// let crewStatus = true;
// let computerStatus = 'green';

// if (crewStatus && computerStatus === 'green') {
//    console.log('Crew & computer cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Crew or computer not ready!');
//    launchReady = false;
// }

// if (launchReady) {
//    console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
//    console.log("Fed parrot...");
//    console.log("Ignition...");
//    console.log("Liftoff!");
// } else {
//    console.log("Launch scrubbed.");
// }

// let launchReady = false;
// let fuelLevel = 17000;

// if (fuelLevel >= 20000) {
//    console.log('Fuel level cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Insufficient fuel!');
//    launchReady = false;
// }

// let launchReady = false;
// let fuelLevel = 27000;

// if (fuelLevel >= 20000) {
//    console.log('Fuel level cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Insufficient fuel!');
//    launchReady = false;
// }

// if (launchReady) {
//    console.log("10, 9, 8...");
//    console.log("Fed parrot...");
//    console.log("6, 5, 4...");
//    console.log("Ignition...");
//    console.log("3, 2, 1...");
//    console.log("Liftoff!");
// } else {
//    console.log("Launch scrubbed.");
// }
let launchReady = false;
let fuelLevel = 21000;
let crewStatus = true;
let computerStatus = 'green';
let fuelstatus = false;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelstatus = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelstatus = false;
}

if ((crewStatus && computerStatus === 'green')&& (fuelstatus)){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}