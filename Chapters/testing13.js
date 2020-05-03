let myArray =[1,5,"hole", 5,"bam","cue",[2,5,9]];
console.log(myArray.length);

let select = myArray[Math.random()* myArray.length];

//console.log(select);

function randomFromArray(arr){
    //Your code here to select a random element from the array passed to the function.
    let select = arr[Math.random()* arr.length];
    return arr[select];

}

console.log(randomFromArray(myArray));