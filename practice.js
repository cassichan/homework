let testArr = [[2, 4], [6, 8], [9,4]]

// Get first element of first subarray
function getFirstElement (arr) {
 return arr[0][0]
}

console.log(getFirstElement(testArr))

// Get last element of last subarray
function getLastElement (arr) {
    const row = arr.length - 1; //last index of row
    const col = arr[row]. length - 1;   //last index of column 
// (how many subarrays in the outer array)
    return arr[row][col] //last index on array
}

console.log(getLastElement(testArr))


// Write function to get a given element of a subarray with the indexes passed as parameters
function getElementOfSubArray (arr, outerIndex, innerIndex) {
    return arr[outerIndex][innerIndex]
}
getElementOfSubArray()
console.log(getElementOfSubArray(testArr,0, 0))


//Write a function to get the index of an element in a subarray and the index of subarray where its element matches a value passed as a parameter

function getIndexOfSpecificElement (arr, element) {
    let Foundelement = arr.find(element => arr.indexOf(element))
console.log(Foundelement)
   //Find how many subarrays there are
   //Find the index of the subarray with the element
    // return arr.indexOf(element)

}

getIndexOfSpecificElement(testArr, 6)
// console.log(getIndexOfSpecificElement(testArr, 6))