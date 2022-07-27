// What are the seven paradigms of the database?
// 1. Key-value
// 2. Wide-column
// 3. Document
// 4. Relational
// 5. Graph
// 6. Search
// 7. Multi-model

// Create a function that takes a base number and an exponent number and returns the calculation.

function exponentiateNum(base, exponent) {
    return base ** exponent;
}
//Math.pow(base, exponent)
console.log(exponentiateNum(4, 2))


// Create a function that takes an array and a string as arguments and returns the index of the string.

let testString = 'woof'
let testArray = [30, false, 'woof', 10]

function calculateIndexOfString(arr, str) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return arr.indexOf(str)    //Loop not needed
        }
    }
}

console.log(calculateIndexOfString(testArray, testString))


// Create a function that takes an array and returns the types of values (data types) in a new array.

let myArr = [5, 'meow', 12, true]  //Test array

function determineDataTypes (arr) {
    let dataTypeArray = [];
    for (i = 0; i < arr. length; i++) {
        dataTypeArray.push(typeof arr[i]);
    }
    return dataTypeArray;
}

console.log(determineDataTypes(myArr))




