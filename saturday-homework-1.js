// Write a function that that returns a newArray with the square of each number

const numbers = [2, 4, 9, 12, 7, 18, 22, 3];
//With .map()
function squareEachNum(arr) {
  let squaredNumbers = arr.map((num) => num ** 2);
  return squaredNumbers;
}

console.log(squareEachNum(numbers));

//With a for loop
const numbers1 = [2, 4, 9, 12, 7, 18, 22, 3];

function squareEachNum(arr) {
  let squaredNumbers1 = [];
  for (let i = 0; i < arr.length; i++) {
    squaredNumbers1.push(arr[i] ** 2);
  }
  return squaredNumbers1;
}
console.log(squareEachNum(numbers1));

/* Write a function that adds up each element in the same position and
create a newArray containing the sum of each pair. Assume both arrays are of the same length. */

let arr1 = [4, 6, 7];
let arr2 = [8, 1, 9];

function getSumOfElementsInTwoArrays(firstArray, secondArray) {
  let newArray = [];
  for (i = 0; i < firstArray.length; i++) {
    newArray.push(firstArray[i] + secondArray[i]);
  }
  return newArray;
}

console.log(getSumOfElementsInTwoArrays(arr1, arr2));
