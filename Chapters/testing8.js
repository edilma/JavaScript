// let classes = ["science, computer, art"];

// let teachers = ["Jones", "Willoughby", "Rhodes"];

// let classes2 = classes[0].split(",");

// //console.log(classes2);

// classes[1] = "hello";
// console.log(classes);
// let classes3 = classes.splice(1,2);
// console.log(classes3);

// let charles = ['coder', 'Tech', 47, 23, 350];
// charles.sort();
// console.log(charles);

// let slicIt;
// slicIt = charles[3].slice(1,3);
// console.log(slicIt);

// let str = 'LaunchCode students rock!' ;
// console.log(str.split(" "));

//  let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
//  let selectedItems = [];

// selectedItems = groceryBag.slice(2, 5).sort();
// console.log(selectedItems);

let practiceFile =[273.15];
practiceFile.push(42,"hello");
console.log(practiceFile);

let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 
        'meal packs', 'slinky', 'security blanket'];

let indexSlinky = cargoHold.indexOf("slinky");
console.log (indexSlinky);

cargoHold.splice(5,1,"space tether");
console.log(cargoHold);

cargoHold.splice(3,0,"keys");
console.log(cargoHold);

let indexInstruction = cargoHold.indexOf("instruction manual");
cargoHold.splice(indexInstruction,1);
console.log(cargoHold);

cargoHold.splice(2,2,"cat","fob","string cheese");
console.log(cargoHold);

8-5-4
