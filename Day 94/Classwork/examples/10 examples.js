//examples of map, filter and forEach();


//double numbers with map:

let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNum = numList.map(num => num * 2)

console.log(doubledNum); //output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]



//filter even numbers with filter:

let filterNumList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterNumList.filter(num => num % 2 === 0);

//console.log((evenNumbers); //output: [2, 4, 6, 8, 10];



//square of numbers with map:

let squareList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareNums = squareList.map(num => num * num);

console.log(squareNums); //output: [1, 4, 9, 16, 25, 36, 49, 64, 81];




//Extract Long names with filter:



let names = ["John", "Jane", "Bob", "Alice", "David", "Emily"];

const longNames = names.filter(name => name.length > 4);

console.log(longNames); //output: ["Alice", "David", "Emily"];



//Capitalize first letter with map();

let names1 = ["john", "jane", "bob", "alice", "david", "emily"];

const capitalizedFirst = names1.map(namesC => namesC.charAt(0).toUpperCase() + namesC.slice(1));

console.log(capitalizedFirst); //output: ["John", "Jane", "Bob", "Alice", "David", "Emily"];


//-----|||||||||||||||||||||||||||||||||

// slice() is a string method in JavaScript that extracts a portion of a string and returns it as a new string, without modifying the original string.

// The syntax is str.slice(beginIndex[, endIndex]). If endIndex is omitted, slice() extracts to the end of the string.

// In our case, str.slice(1) means "take a slice of the string starting from index 1 to the end of the string".

// Remember, string indices in JavaScript (and most programming languages) start at 0. So index 1 is actually the second character of the string.

// Let's take the word "hello" as an example:

// "hello".charAt(0) gives us "h"
// "hello".slice(1) gives us "ello"
// So, when we do str.charAt(0).toUpperCase() + str.slice(1), we're effectively:

// Capitalizing the first letter: "h".toUpperCase() becomes "H"
// Getting the rest of the string: "hello".slice(1) becomes "ello"
// Concatenating these: "H" + "ello" becomes "Hello"



//======================================



//sum of all numbers using forEach():


let numbersLisst = [1, 2, 3, 4, 5];

let sum = 0;

const sumOfNumbers = numbersLisst.forEach(num => sum += num);

console.log(sum); //output: 15

//Explanation: We use forEach() to iterate through each number in the array, adding it to the sum variable. 
//Note that forEach() doesn't return a new array; it just iterates over the existing one.





//remove short words with filter();

let wordList = ["apple", "banana", "cherry", "date", "elderberry"];

const shortenedWords = wordList.filter(word => word.length < 6);

console.log(shortenedWords); //output: ['apple', 'date'];





//add the prefix 'super' to each string with map();

let wordList2 = ["apple", "banana", "cherry", "date",];

const superWords = wordList2.map(word => "super" + word);

console.log(superWords); //output: ['superapple', 'superbanana', 'supercherry', 'superdate'];




//filter odd numbers with filter();

let naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredOddNumbers = naturalNumbers.filter(num => num % 2 !== 0);

console.log(filteredOddNumbers); //output: [1, 3, 5, 7, 9];




//log each element with forEach();

let elements = ["apple", "banana", "cherry", "date"];

const logEachElement = elements.forEach(elem => console.log(elem));

//output: apple banana cherry date




// These examples demonstrate the basic usage of each method:



// forEach() for iteration
// map() for transformation
// filter() for selection
// reduce() for aggregation






// forEach()

// Does NOT create a new array
// Iterates over the existing array and performs operations on each element


// map()

// Creates a NEW array
// Returns a new array with the results of calling a provided function on every element in the array


// filter()

// Creates a NEW array
// Returns a new array with all elements that pass the test implemented by the provided function


// reduce()

// Does NOT create a new array
// Reduces the array to a single value (which could be a number, string, object, or even a new array)


