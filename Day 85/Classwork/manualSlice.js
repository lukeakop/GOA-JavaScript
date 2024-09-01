
// it takes three parameters:

// list: The array from which we want to extract a portion.
// start: The index at which to start extraction (inclusive).
// end: The index before which to end extraction (exclusive).



// function manualSlice(list, start, end){
//   slicedArray = [];

//   let i = start: Initializes the loop counter i to the start index. This is where the slicing begins.

//   i < end: The loop continues as long as i is less than end. This ensures that we don't include the element at the end index itself (mimicking the exclusive nature of the slice() method).

//   i < list.length: This condition prevents the loop from going out of bounds if the end index is greater than the length of the list. This is a safety check to avoid errors.

//   i++: adds the loop counter i by 1 after each iteration.

//   for(let i = start; i < end && i < list.length; i++){

//     slicedArray.push(list[i])
//   }

//   return slicedArray
// }

// console.log(manualSlice(["apple", "banana", "cherry", "date"], 1, 3)); // Output: ["banana", "cherry"]
