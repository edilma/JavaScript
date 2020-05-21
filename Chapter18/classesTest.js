// let fox = {
//     name: 'Fox',
//     age: 7,
//     mass: 12,
//     catchPhrase: function(repeats) {
//        let phrase = 'LaunchCode';
//        for (let i = 0; i < repeats; i++) {
//           phrase += ' Rocks';
//        }
//        return phrase;
//     }
//  }
 
//  //console.log(`${fox.name} is ${fox.age} years old and has a mass of ${fox.mass} kg.`);
//  //console.log(`${fox.name} says, "${fox.catchPhrase(3)}."`);

//  //console.log (typeof fox);

//  class Car {
//     constructor(make, model, year, color, mpg){
//        this.make = make;
//        this.model = model;
//        this.year = year;
//        this.color = color;
//        this.mpg = mpg;
//     }
//  }

//  let myCar = new Car('Chevy', 'Astro', 1985, 'gray', 20);

//  console.log(typeof myCar.year);

//  let myCar2 = new Car('Tesla', 'Model S', 2019);

//  console.log(myCar2);
// Here we assign the method inside the constructor
// class AstronautI {
//     constructor(name, age, mass){
//        this.name = name;
//        this.age = age;
//        this.mass = mass;
//        this.reportStats = function() {
//           let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
//           return stats;
//        }
//     }
//  }
 
//  // Here we assign the method outside of the constructor
//  class AstronautO {
//     constructor(name, age, mass){
//        this.name = name;
//        this.age = age;
//        this.mass = mass;
//     }
 
//     reportStats() {
//        let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
//        return stats;
//     }
//  }
 
//  let fox = new AstronautI('Fox', 7, 12);
//  let hippo = new AstronautO('Hippo', 25, 1000);
 
//  console.log(fox);
//  console.log(hippo);

class Felidae {
    constructor() {
       this.claws = "retractable";
    }
 }
 
 class Panthera extends Felidae {
    constructor() {
       super();
       this.roar = "loud";
    }
 }
 
 class Tiger extends Panthera {
    constructor() {
       super();
       this.hasStripes = "true";
    }
 }
 
 let tigger = new Tiger();
 
 console.log(tigger);
 


