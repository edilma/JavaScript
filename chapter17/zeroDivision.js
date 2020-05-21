function divide(numerator , denominator)
{
    let result;
    if (denominator===0) {
        throw Error("Attempted to divide by zero.😞");
    } else {
        result = numerator/denominator;
    }
    return result;
}

let answer = divide(10,0)
console.log("the answer is " + answer);