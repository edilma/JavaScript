// let f1 = function(str) {
//     return str + str;
//  };
 
//  let f2 = f1;

//  console.log(f1("abcd"));
//  console.log(f2("abcd"));
 ////// ******//////

// let userInput = -1;

//  let logger = function(errorMsg) {
//     console.log("ERROR: " + errorMsg);
//  };
 
//  if (userInput < 0) {
//     logger("Invalid input");
//  }


// function printMessage() {
//     console.log("The future is now!");
//  }
 
//  setTimeout(printMessage, 5000);

// let nums = [3.14, 42, 4811];

// let timesTwo = function (n) {
//    return n*2;
// };

// let doubled = nums.map(timesTwo);

// console.log(nums);
// console.log(doubled);


// let nums = [3.14, 42, 4811];

// // TODO: Write a mapping function
// // and pass it to .map()
// let halved = nums.map(function(n){
//     return n/2;
// });

// console.log(halved);

// let names = ["Chris", "Jim", "Sally", "Blake", "Paul"];

// // TODO: Write a mapping function
// // and pass it to .map()
// let firstInitials = names.map(function(str){
//     return str[0];
// });

// console.log(firstInitials);

//const input = require('readline-sync');

// function getValidInput(prompt, isValid) {

//    // Prompt the user, using the prompt string that was passed
//    let userInput = input.question(prompt);

//    // Call the boolean function isValid to check the input
//    while (!isValid(userInput)) {
//       console.log("Invalid input. Try again.");
//       userInput = input.question(prompt);
//    }

//    return userInput;
// }

// // A boolean function for validating input
// let isEven = function(n) {
//    return Number(n) % 2 === 0;
// };

// console.log(getValidInput('Enter an even number:', isEven));

//**// */
// const input = require('readline-sync');

// function getValidInput(prompt, isValid) {

//     let userInput = input.question(prompt);
 
//     while (!isValid(userInput)) {
//        console.log("Invalid input. Try again.");
//        userInput = input.question(prompt);
//     }
 
//     return userInput;
//  }
 
//  let isValidPassword = function(password) {
 
//     // Passwords should have at least 8 characters
//     if (password.length < 8) {
//        return false;
//     }
 
//     return true;
//  };
 
//  console.log(getValidInput('Create a password:', isValidPassword));

// function callMe(func) {
//     func();
//  }
 
//  callMe("Al");

///***EXERCISER  */
/// 11.10.1----
// let answer = function(item){
//     if (typeof item==="number") {
//        return item*3;
//     } else if (typeof item==="string") {
//         return "ARRR!"
//     } else {
//         return item;
//     }
// };

// let item = [2,5];
// //console.log(answer(item));

// /// 11.10.2----
// let item2 =  ['Elocution', 21, 'Clean teeth', 100] ;
// let mapArray = item2.map(answer)

// console.log(mapArray);


//**10-10-2 */

let level2=function(level){
    if (level > 100000) {
        return level-100001
    } else if (level>50000) {
        return level-50001
    } else
    return 1;
}

let cargoMold = function(arr){
    let arr2 =[];
    let iGd =arr.indexOf('gold');
    let iSt = arr.indexOf('satellite');
    arr2.push(arr.splice(iGd,1,"water"));
    arr2.push(arr.splice(iSt,1,"water"));
    return arr2;

};

function irs(fuelLevel, cargoHold){
    let lostFuel = level2 (fuelLevel);
    let lostCargo = cargoMold(cargoHold);
    return `Raided ${lostFuel} kg of fuel from the tanks, and stole ${lostCargo[0]} and ${lostCargo[1]} from the cargo hold.`
}

function checkFuel(level) {
if (level > 100000){
    level2(level)
    return 'green';
 } else if (level > 50000){
    return 'yellow';
 } else {
    return 'red';
 }
};


function holdStatus(arr){
 if (arr.length < 7) {
    return `Spaces available: ${7 - arr.length}`;
 } else if (arr.length > 7){
    return `Over capacity by ${arr.length - 7} items.`
 } else {
    return "Full";
 }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: "+ checkFuel(fuelLevel));
console.log("Hold status: "+ holdStatus(cargoHold));
console.log( "the stolen fuel was: " + level2(fuelLevel));
//console.log("The stolen cargo hold items are: " + cargoMold(cargoHold));
//console.log ("Final Items in cargo hold are: " + cargoHold);
console.log(irs(fuelLevel,cargoHold));
