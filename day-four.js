// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either “A,” “B,” “C,” “D,” or “F.” Call that function for a few different scores and log the result to ensure it works.

const findGrade = (score) => {
  if (score >= 90 && score <= 100) {
    score = "A grade";
  } else if (score >= 80 && score < 90) {
    score = "B grade";
  } else if (score >= 70 && score < 80) {
    score = "C grade";
  } else if (score >= 60 && score < 70) {
    score = "D grade";
  } else {
    score = "Student has failed";
  }
  return score;
};
console.log(findGrade(95));
console.log(findGrade(75));
console.log(findGrade(81));
console.log(findGrade(10));

// 2. Create a function that returns the number of true values in an array.
const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];

let numberOfTrues = 0;

function sortOutTheFalses(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === true) { // arr[i] === 1 also works (binary system)
      numberOfTrues++;
    }
  }
  return numberOfTrues;
}
sortOutTheFalses(testArray); //Calling the function
console.log(numberOfTrues); //Logging the return value

// 3. Create a function that converts a string to all uppercase letters and console.log the result (hint: string methods):

let str = "WHAT a TIME to BE ALIVE!";
let capitalStr;

function shout(strOfChoice) {
  capitalStr = strOfChoice.toUpperCase();
}

shout(str);
console.log(capitalStr);

// 4. Create a function that takes in a number of two-pointers and three-pointers made and returns a basketball team’s total score?

let score = 0;

const calculateScore = (numberOfTwoPointers, numberOfThreePointers) => {
  return (score = score + numberOfTwoPointers * 2 + numberOfThreePointers * 3);
};

console.log(calculateScore(2, 3));

// Extra for experts:
// 5. Create a function that takes an array of numbers & returns both min and max in that order. (use a loop)

let myArray = [6, 45, 17, 200];

function findMinAndMax(arrayOfChoice) {
  let max = arrayOfChoice[0];
  let min = arrayOfChoice[0];
  for (let i = 0; i < arrayOfChoice.length; i++) {
    if (arrayOfChoice[i] > max) {
      max = arrayOfChoice[i];
    }
  }
  for (let i = 0; i < arrayOfChoice.length; i++) {
    if (arrayOfChoice[i] < min) {
      min = arrayOfChoice[i];
    }
  }
  return `min: ${min}, max: ${max}`;
}

console.log(findMinAndMax(myArray));

// function findMinAndMax (arrayOfChoice) {
//      min = Math.min.apply(Math, arrayOfChoice);
//      max = Math.max.apply(Math, arrayOfChoice)
// }

// findMinAndMax(myArray);
// console.log(min;
// console.log(max);
