
//  1. Always Hungry - function given an array, 
// each time value is "food", clog "yummy". 
//  If "food" was not present in the array, 
//  clog "I'm hungry" once

function alwaysHungry(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        //No, pie doesn't really count as food, but it was fun throwing an OR in there ;)
        if (arr[i] === "food" || arr[i] == "pie") {
            console.log("yummy");
            count++;
        }
    }
    if (count == 0) {
        console.log("I'm hungry");
    }
}
   // this should console log "yummy", "yummy"
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "I'm hungry"
alwaysHungry([4, 1, 5, 7, 2]);



// 2. High Pass Filter - Given array and value cutoff, 
// return new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// 3. Better than average - Given array of SVGAnimatedNumberList, 
// return a count of how many of the numbers are larger than avg.


function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;

    var count = 0
    // count how many values are greater than the average
    for (i = 0; i < arr.length; i++) {
        if ( arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// 4. Array Reverse - Function to reverse the values of an array and return.

function reverse(arr) {
    let reverseArr = [];
    for (let i = 0; i < arr.length; i++) {
        let n = i + 1;
        reverseArr.push(arr[arr.length - n]);
    }
    arr = reverseArr;
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// 5. Fibonacci Array - Function to return array of Fibonacci numbers up to a given length n. 2, 3, 5

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (let i = 3; i <= n; i++)
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
