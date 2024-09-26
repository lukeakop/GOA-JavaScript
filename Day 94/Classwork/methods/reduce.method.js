
// array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]

// Callback Function: The heart of reduce. It takes four arguments:

// accumulator: The accumulated result of the reduction
// currentValue: The current element being processed
// index (optional): The index of the current element
// array (optional): The array reduce was called upon


//===============================================================================================


// Let's start with a simple example:

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 15




// // Without initial value (sum)
// [1, 2, 3].reduce((acc, curr) => acc + curr); // 6

// // With initial value (sum starting from 10)
// [1, 2, 3].reduce((acc, curr) => acc + curr, 10); // 16

// // Creating an object
// ['a', 'b', 'c'].reduce((acc, curr) => {
//   acc[curr] = curr.toUpperCase();
//   return acc;
// }, {}); // {a: 'A', b: 'B', c: 'C'}


//==============================================================


// Performance Considerations
// reduce is powerful, but it's not always the fastest option. For simple operations on large arrays, 
//a traditional for loop might be more performant.

// Chaining reduce with Other Methods
// reduce can be incredibly powerful when chained with other array methods:

// const data = [1, 2, 3, 4, 5, 6];
// const result = data
//   .filter(n => n % 2 === 0)  // Keep even numbers
//   .map(n => n * 2)           // Double each number
//   .reduce((acc, n) => acc + n, 0);  // Sum the results

// console.log(result); // 24