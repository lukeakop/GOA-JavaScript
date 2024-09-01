// The indexOf() 
// method searches for a specified element in an array or a
// string and returns the first index at which the element is found. If the element is not found, it returns -1.




//IN THIS CASE: Explanation: The indexOf() method searches for the first occurrence of "banana" in the array and returns the index 1, 
//which is the position of the first "banana".


// let fruits = ["apple", "banana", "cherry", "apple", "banana"];

// console.log(fruits.indexOf("banana")); // Output: 1




// let fruits = ["apple", "banana", "cherry"];

// console.log(fruits.indexOf("orange")); // Output: -1



//CASE SENSITIVITY
// let names = ["Alice", "Bob", "Charlie"];

// console.log(names.indexOf("alice")); // Output: -1

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// lastIndexOf()
// The lastIndexOf() method searches for a specified element in an array or a string and returns 
// the last index at which the element is found. If the element is not found, it returns -1.




// let numbers = [1, 2, 3, 1, 2, 3];

// console.log(numbers.lastIndexOf(2)); // Output: 4 (Count starts from 0)



//"hello world hello", the last occurrence of "hello" starts at index 12.
// let sentence = "hello world hello";

// console.log(sentence.lastIndexOf("hello")); // Output: 12



//ELEMENT NOT FOUND
//let letters = ["a", "b", "c", "d"];

//console.log(letters.lastIndexOf("z")); // Output: -1

//---------------------------------------------------------------------------------------------------------------------------------------

// includes()
// The includes() method checks if an array or a string contains a specified element
//  or substring. It returns true if the element is found, and false otherwise.




//let animals = ["cat", "dog", "bird"];

// console.log(animals.includes("dog")); // Output: true

// The includes() method returns true because "dog" is present in the animals array.



// let animals = ["cat", "dog", "bird"];

// console.log(animals.includes("fish")); // Output: false

//returns false because fish is not in the array of animals




//let phrase = "JavaScript is fun";

// console.log(phrase.includes("javascript")); // Output: false

//returns false because javascript is not in the phrase (Case Sensitive)


