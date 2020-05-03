// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/scrabble-scorer.html

// Code your transform function here:
function transform (oldPointStructure ){
    let newPointStructure={};
    for (const score in oldPointStructure ) {
            const letterArray = oldPointStructure [score];
            for (let index = 0; index < letterArray.length; index++) {
                let letter = (letterArray[index]);
                letter = letter.toLowerCase();
                newPointStructure[letter]=Number(score);  
            }
    }
    return newPointStructure;
}


// Code your initialPrompt function here:
const input = require('readline-sync');
function initialPrompt (){
    let welcomeText =`Welcome to the Scrabble score calculator!

    Which scoring algorithm would you like to use?
    
    0 - Scrabble: The traditional scoring algorithm.
    1 - Simple Score: Each letter is worth 1 point.
    2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.
    
    Enter 0, 1, or 2:\n`
    let algoritmSelected = input.question(welcomeText);
    return algoritmSelected;
}


// Code your runProgram function here:

function runProgram(scoringAlgorithms){
    let algorithmSelected = 0;
    let wantToContinue = true;
    let score;
    algorithmSelected = Number(initialPrompt ());
    while (wantToContinue ===true){
        let word = input.question("Enter a word to be scored, or 'Stop' to quit: \n");
        if (word !="Stop") {
            word= word.toLowerCase();
           
            if (algorithmSelected===0) {
                console.log ("Using algorithm: Simple Score\n")
                score = SimpleScore(word) 
                console.log ("Score for "+ word + " "+ score + "\n");
            } else if (algorithmSelected===1) {
                console.log ("Using algorithm: Bonus Vowels \n")
                score = BonusVowels(word)
                console.log ("Score for "+  word + " "+ score + "\n")
            }else{
                console.log ("Using algorithm: Scrabble \n")
                score = ScrabbleScore(word, newPointStructure) 
                console.log ("Score for "+  word+ " " + score + "\n")   
            }
        } else {
            wantToContinue = false; 
            return ("Thanks for playing with us");
        }
    }
}

// Here is the oldScoreKey object:
const oldScoreKey = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
 };
 
 // Use the transform function to create the newScoreKey object here:

 let newPointStructure  = transform (oldPointStructure )
 
 //scoring algoritm #1 -> Simple Score

function SimpleScore(word){
    size= word.length
    return size;
};
//scoring algoritm #2 - Bonus Vowel
function BonusVowels(word){
    let vowels =["a","e","i","o","u"];
    let score=0;
    for (let index = 0; index < word.length; index++) {
        if (vowels.includes(word[index])) {
            score=score+3;
        }else{
            score= score+1;
        }
    }
    return score;
}
//scoring algoritm #3 - Scrabble

function ScrabbleScore(word, newPointStructure){
    score =0;
    for (let index = 0; index < word.length; index++) {
        let value = newPointStructure[word[index]];
         score= score+value;        
    }

    return score;    
    
}

//Array with all algorithm 
let scoringAlgorithms =[SimpleScore(word), BonusVowels(word), ScrabbleScore(word, newPointStructure)];

 
 // Call the runProgram function here:
 console.log (scoringAlgorithms);
 //console.log(runProgram(oldPointStructure))