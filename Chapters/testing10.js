// function plusTwo(num) {
//     return num + 2;
//  }
 
//  let a = 2;
 
//  for (let i=0; i < 4; i++) {
//     a = plusTwo(a);
//  }
 
//  console.log(a);

//  function repeater(str) {
//     let repeated = str + str;
//     console.log(repeated);
//  }
 
//  repeater('Bob');

// let message = "Hello, World!";

// function printMessage() {
//    console.log(message);
// }

// printMessage();
// message = "Goodbye";
// printMessage();


// function reverse(str) {
//     let lettersArray = str.split('');
//     let reversedLettersArray = lettersArray.reverse();
//     return reversedLettersArray.join('');
//  }

//  console.log(reverse('edilma'));

//  function reverse(str) {
//     return str.split('').reverse().join('');
//  }
 
//  function isPalindrome(str) {
//     return reverse(str) === str;
//  }
 
//  console.log(isPalindrome('edilma'));

// EXERCISES ***//

//10.1.1 //

function makeLine2(n){
    let result="";
    for (let index = 0; index < n; index++) {
        result = result +"#";
        
    }
    return result;
}

//console.log(makeLine2(5));

//10-2  Make Square
function makeSquare(num){
    let wide="";
    for (let index = 0; index < num; index++) {
        wide = `${wide}\n${makeLine2(num)}`;
        
    }
    return wide;

}

//console.log(makeSquare(5));

//10-3 Make Rectangle
function makeRectangle(n, num){
    let wide="";
    for (let index = 0; index < num; index++) {
        wide = `${wide}\n${makeLine2(n)}`;
        
    }
    return wide;

}

console.log(makeRectangle(5, 3));
