function randomFromArray(arr){
    //Your code here to select a random element from the array passed to the function.
    let select = arr[Math.floor(Math.random()* arr.length)];
    return select;
}
  //TODO: Export the randomFromArray function.
 
 

  module.exports = randomFromArray;