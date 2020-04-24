// let jsCreator = "Brendan Eich";
// let firstInitial = jsCreator[0];
// let lastInitial =jsCreator[8];

//let outputStr = "JavaScript was created by somebody with initials " + 
//firstInitial +"." + lastInitial + "." ;

//console.log(outputStr);

//console.log(jsCreator[-1]);

// let word = "JavaScript";
// console.log(word.toUpperCase().slice(4));

// console.log(word.slice(4).toUpperCase());
// console.log(word.replace("J","Q").slice(0,5));
// console.log(word.slice(1,6));

// let org = "  The Launch code Foundation ";
// let trimmed = org.trim();

// console.log(trimmed);

//console.log("launch \nCode");

// let name = "Lily" ;
// let verb = "run";
// let adjective = "fast" ;
// let color = "green";
// let pluralNoun = "fishes";

// console.log(`JavaScript provides a ${color} collection of tools — 
// including ${adjective} ${verb} and ${pluralNoun} that allows
// ${name} to ${verb} with strings.`);

//7-2
// let number = 123.2545;

// let numberString = String(number);
// let onlyDigits;
// let lengthNumber ;

// onlyDigits = numberString.replace(".","");
// //console.log(onlyDigits);

// lengthNumber = onlyDigits.length;

//  console.log(lengthNumber);

//7-9-2 Ex 1
let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cat-AGA-GCT    "
let dna = "taco cat"
let upperDna = dna.trim().toUpperCase();
console.log(upperDna);

//7-9-2 Ex 2
// let noGCT;
// noGCT = upperDna.replace("GCT","AGG");
// //console.log(noGCT);

// isCat = upperDna.indexOf("CAT");
// if (isCat ===-1) {
//     console.log("CAT gene NOT found ");
// } else {
//     console.log("CAT gene found ")
// }

// letIndexOfCgt = upperDna.indexOf("CGT");
// thirdGene = upperDna.substring(letIndexOfCgt,letIndexOfCgt+3);
// lengthDna = upperDna.length;
// console.log(`The DNA string is ${lengthDna} characters long.`);

//7-9-3

let title = "title case";

let words;

words = title.split(" ");

console.log(words[0][0].toUpperCase() + words[1][0].toUpperCase());