// let tortoiseTwo = {
//     species: "Galapagos Tortoise",
//     name: "Patricia",
//     weight: 800,
//     age: 85,
//     diet: ["pumpkins", "lettuce", "cabbage"],
//     sign: function() {
//        return this.name + " is a " + this.species;
//     }
//   };

// for (item in tortoiseTwo){
//     console.log(item + ":\t" + tortoiseTwo[item]);
// }

// function randomSelection(arr){
//    let index = Math.floor(Math.random()*arr.length);
//    return arr[index];
// }

// let happiness = ['Hope','Joy','Peace','Love','Kindness','Puppies','Kittens','Tortoise'];

// for (i=0; i < 8; i++){

//    console.log(randomSelection(happiness));
// }

// console.log(Math.random()*8);
// const input = require('readline-sync');

// console.log(typeof input);

const palindromeCheck = require('./practiceExports.js');

console.log(typeof palindromeCheck);
console.log(palindromeCheck.isPalindrome('that'));
console.log(palindromeCheck.isPalindrome('radar'));
