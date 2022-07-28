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