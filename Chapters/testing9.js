// for (let i = 0; i < 51; i++) {
//     console.log(i);
//  }



//  let str = "blue";
// let reversed = "";

// for (let i = 0; i < str.length; i++) {
//    reversed = str[i] + reversed;
//    console.log(reversed);
// }

// console.log(reversed);

// let phrase = "LaunchCode's LC101";
// let count =0;
// for (let i = 0; i < phrase.length - 1; i = i + 3) {
//    count +=1;
//    console.log(phrase[i]);
// }

// console.log(phrase.length);
// console.log("count is " + count);


// let n = 10;
// let answer = 1;

// while (n > 0) {
//    answer = answer + n;
//    n = n - 1;
//    }

// console.log(answer);

// for (let i = 0; i < 100; i++) {
//    console.log((i + " Repetition is a good thing");
   
// }

//Exercises Chapter 9

//9-9-1**** 1)
//console.log ("--"*20)
// for (let index = 0; index <21; index++) {
//    console.log(index);
// }
// console.log ("Exercise b")

// for (let i = 3; i < 30; i=i+2) {
//    console.log(i);
// }
// console.log ("Exercise c")

// for (let index = 12; index > -15; index=index-2) {
//    console.log(index);
   
// }

// console.log ("Exercise d")
// for (let index = 51; index >20; index--) {
//    if (index%3===0) {
//       console.log(index);
//    }
   
// }

//**** 2)
// let word = "LaunchCode";
// let myArray = [1, 5, 'LC101', 'blue', 42];

// console.log ("Exercise a");

// for (let index = 0; index < myArray.length; index++) {
//    console.log(myArray[index]);   
// }
// console.log ("Exercise b");
// for (let index = word.length-1; index > 0; index--) {
//    console.log(word[index]);
   
// }

//9-9-3**** 

// let anArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
// let even =[];
// let odd=[];
// for (let i = 0; i< anArray.length; i++) {
//    if (anArray[i]%2==0) {
//       even.push(anArray[i]);
//    }
//    else{
//       odd.push(anArray[i]);
//    }
// }
// console.log(even);
// console.log(odd);

//9-9-3**** 4)

const input = require('readline-sync');
let startingFuel = input.question("Enter an Starting Fuel lever ");

let altitudShuttle=0;
startingFuel =Number(startingFuel);

//console.log(startingFuel);
while ((startingFuel>5000) && (startingFuel<30000)) {
    startingFuel = input.question("Enter an Starting Fuel lever ");
 }
 let numberAstronauts = input.question("How many astronauts are comming? ");
 numberAstronauts = Number(numberAstronauts);
 while (numberAstronauts>7) {
   numberAstronauts = input.question("How many astronauts are comming? ");
 }

 while (startingFuel>500) {
   altitudShuttle = altitudShuttle+50;
   startingFuel = startingFuel-100;    
 }
 console.log ( "the shuttle gained and altitude of " + altitudShuttle + "  km.");
 if (altitudShuttle>2000) {
    console.log ("Orbit Achieved")
 }
 else{
    console.log ("Failed to reach orbit");
 }

 

