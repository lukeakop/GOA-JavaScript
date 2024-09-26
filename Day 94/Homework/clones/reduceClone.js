//Creating reduce function clone:

function reduceClone(array, callback, initialValue){
  let accumulate = initialValue;
  for(let i = 0; i < array.length; i++){
    accumulate = callback(accumulate, array[i], i, array);
  }

  return accumulate;
}


// function reduceClone(array, callback, initialValue) // explanation:

// This mimics the Array.prototype.reduce() method.
// array: The array we're reducing.
// callback: The function to execute on each element.
// initialValue: The initial value of the accumulator.



// Accumulator Initialization

// let accumulate = initialValue;

// This is crucial. We start our accumulation with the initialValue.
// In the real reduce, if initialValue is not provided, the first element of the array is used.



// for(let i = 0; i < array.length; i++)

//   We're using a simple for loop to iterate through the array.
//   This is essentially what reduce does internally.



// accumulate = callback(accumulate, array[i], i, array);

// This is the heart of the reduce operation.
// We call the callback function with four arguments:
// accumulate: The accumulated value so far.
// array[i]: The current element being processed.
// i: The index of the current element.
// array: The original array being reduced.
// The result of the callback becomes the new value of accumulate.



// return accumulate;

// After the loop, we return the final accumulated value.
// This line was missing in the original code, but it's crucial!