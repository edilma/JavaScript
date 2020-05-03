// console.log(typeof (true));
// console.log(typeof ("true"));
// console.log(Boolean("true"));
// console.log(Boolean("TRUE"));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(""));
// console.log(Boolean('LaunchCode'));

//console.log(4 =="4");
//console.log(!(5>7));
//console.log(4<3||2<3);
/*
let billHasBeenPaid =true;
if(!billHasBeenPaid){
    console.log("Your bill is due soon")
}else {
    console.log("your payments are up to date")
}*/

// let x=-69597683438755;
// let y=-69593829858355;

// if (x>y) {
//     console.log("x is greater than y");
// } else if (x<y) {
//     console.log("y is greater than x") ;
// }else{
//     console.log("x is equal to y");
// }

// let num = 7;

// if (num % 2 === 0) {
//     if (num % 2 === 1) {
//         console.log("odd");
//     }
// }

//Exercises Chapter 5 
//Exercise 2.

let engineIndicatorLight = "red blinking"
let spaceSuitsOn = true
let shuttleCabinReady= true
let crewStatus=	spaceSuitsOn && shuttleCabinReady
let computerStatusCode = 200
let shuttleSpeed = 15000

if (engineIndicatorLight === "green") {
    console.log("engines have started");
 } else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
 } else {
    console.log("engines are off");
 }
 //Exercise 3

 if (crewStatus) {
     console.log("Crew Ready")
 } else {
     console.log("Crew no Ready")
 }

 if (computerStatusCode===200 ) {
     console.log("Please stand by. Computer is rebooting")
 } else if (computerStatusCode===400) {
     console.log ("Sucess! Computer online")
 } else {
     console.log("ALERT: Computer offline!")
 }

 if (shuttleSpeed>17500) {
     console.log("ALERT: Escape velocity reached!")
 } else if (shuttleSpeed<8000) {
     console.log("ALERT: cannot maintain orbit!")
 } else {
     console.log ("Stable speed")
 } {
     
 }

 //Exercise 4
 if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }

 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }

 // Exercise 5
