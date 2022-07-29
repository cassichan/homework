
// 1. Write a function that adds two numbers together.
function sumNum (num1, num2) {
    return num1 + num2;
}
console.log(sumNum(4, 5));


// 2. Write a car object that has a modal and color.  Create a property called year then console.log all of the objects properties individually.

let car = {
    color: "White",
    model: "Prius",
}

car.year = 2016;
console.log(car.color);
console.log(car.model);
console.log(car.year);


// 3. Write a function to get the first element in an array.

let arrayOfFaveStuff = ['cats', 'coffee', 'Disney'];

const getFirstElement = (arr) => {
    return arr[0];
};

console.log(getFirstElement(arrayOfFaveStuff));

