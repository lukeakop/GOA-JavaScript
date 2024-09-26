// Created an array of 10 numbers
const numbers = [1, 2, 3, 2, 4, 5, 5, 6, 1, 7];

// Using built-in filter method
const twiceAppearing = numbers.filter((num, index, arr) => 
    arr.indexOf(num) !== index || arr.lastIndexOf(num) !== index
);

console.log("Numbers appearing twice (using built-in filter):", twiceAppearing);




// Clone of filter method
function filterClone(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

// Using filterClone
const twiceAppearingClone = filterClone(numbers, (num, index, arr) => 
    arr.indexOf(num) !== index || arr.lastIndexOf(num) !== index
);

console.log("Numbers appearing twice (using filterClone):", twiceAppearingClone);