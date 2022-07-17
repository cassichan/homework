// Write a function to convert temperatures from Fahrenheit to Celsius.

let celsius;

function convertCelsiusToFahrenheit(fahrenheit) {
  return (celsius = (5 / 9) * (fahrenheit - 32));
}

convertCelsiusToFahrenheit(100);
console.log(`It is ${celsius} degrees in Celsius.`);

// Write a function that converts USD to any other currency of choice.
//1 USD = 0.99 euro

const convertUSD = (USD) => {
  let euro = USD * 0.99;
  return `${USD} converts to ${euro} euros`;
};

console.log(convertUSD(10));

// The FizzBuzz problem is a classic test given in coding interviews. The task is simple:
// Print integers 1 to N, but print "Fizz" if an integer is divisible by 3, "Buzz" if an integer is divisible by 5, and "FizzBuzz" if an integer is divisible by both 3 and 5.

let N = 20;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, N]

function fizzBuzz(array) {
  for (let i = 0; i < array.length; i++)
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      console.log ("Fizz");
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      console.log("Buzz");
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log (array[i]);
    }
    return "You did awesome!"
}

console.log(fizzBuzz(array));

//Alternate: 
// Given a positive integer A, return an array of strings with all the integers from 1 to N.
// But for multiples of 3 the array should have "Fizz" instead of the number.
// For the multiples of 5, the array should have "Buzz" instead of the number.
// For numbers which are multiple of 3 and 5 both, the array should have "FizzBuzz" instead of the number.

// let N = 20;
// let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, N];
// let fizzBuzzArray = [];


// function fizzBuzz(array) {
//   for (let i = 0; i < array.length; i++)
//     if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
//       fizzBuzzArray.push("Fizz");
//     } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
//       fizzBuzzArray.push("Buzz");
//     } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
//       fizzBuzzArray.push("FizzBuzz");
//     } else {
//       fizzBuzzArray.push(array[i]);
//     }
//     return fizzBuzzArray;
// }

// console.log(fizzBuzz(originalArray))

// let finalArray = fizzBuzz(originalArray); //OR Assign return value to a variable
// console.log(finalArray);



// You are given 2 arrays, one called shoppingList and one called cart.
// Create a new version of shoppingList where the items in the cart have been removed.

let shoppingList = ['coffee', 'eggs', 'bread', 'blueberries'];
let cart = ['coffee', 'eggs'];

let updatedShoppingList = shoppingList.slice(2, 4); //slice where you want to make the new list
console.log(updatedShoppingList);


//Exploring other options

let anotherShoppingList = ['kale', 'bananas', 'oatmilk', 'peanut butter', 'almonds'];
let anotherCart = ['bananas', 'almonds', 'peanut butter'];

anotherShoppingList.pop();
anotherShoppingList.pop();
console.log(anotherShoppingList) //List with almonds and PB removed
let anotherItemRemoved = anotherShoppingList.splice(1, 1); //Removing one item "bananas" at specific index - mutates original array.
console.log(anotherShoppingList) //List with cart removed, -> kale, oatmilk





// given a sentence reverse order: "the sky is blue" -> "euld si yks eht"

let sentence = "the sky is blue";
let sentenceInArrayForm = sentence.split(''); //turns string into array of substrings
// console.log(sentenceInArrayForm)
let reversedSentenceInArrayForm = sentenceInArrayForm.reverse(); //reverse the order of the array of substrings
// console.log(reversedSentenceInArrayForm);
let reversedSentence = reversedSentenceInArrayForm.join(""); //turns the array of substrings into a string
console.log(reversedSentence)

//Do without reverse

// let str = "the sky is blue" 
// function changeOrder (str) { 
//     let originalArray = str.split("")// turning "str" (in the block scope) to a new array
//     let jointStr= '' 
//     for (let i = originalArray.length - 1; i >= 0; i--) { 
//         jointStr += originalArray[i] // add the letter at the index i to the end of jointStr
//     }
//     return jointStr
// }

// console.log(changeOrder(str));