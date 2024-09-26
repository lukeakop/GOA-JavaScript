//**Filter Prime Numbers**

// Create an array of numbers from 1 to 10
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to check if a number is prime
const isPrime = num => {
  // 1 is not considered a prime number
  if(num === 1){
    return false;
  } 
  // 2 is the smallest prime number
  else if(num === 2){
    return true;
  } 
  else{
    // Loop from 0 to num
    for(let i = 0; i < num; i++){
      // If num is divisible by i, it's not prime
      if(num % i === 0){
        return false;
      }
    }
  }
  
}

// Function to filter out prime numbers from an array
const filteredPrime = numList => {
  // Use the filter method to create a new array
  // Keep only the numbers that are NOT prime (note the ! operator)
  const filteredNums = numList.filter(el => !isPrime(el));
  return filteredNums;
}

// Call filteredPrime with our numList and log the result
console.log(filteredPrime(numList)); // [1, 4, 6, 8, 9, 10]




//**Map to Object Conversion**
//- Given an array of objects (e.g., users with `id` and `name`), use `map()` to create an array of strings that contains only the names.

let userObj = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Jane'},
  {id: 3, name: 'Bob'},
]

const onlyStrings = userObj.map(user => user.name);


console.log(onlyStrings); // ['John', 'Jane', 'Bob']





//4. **Filter Objects by Property**
//- Given an array of objects representing products (each having a `name` and `price`), use `filter()` to return products that are cheaper than a certain value.

let products = [
  {name: 'apple', price: 10},
  {name: 'banana', price: 19},
  {name: 'orange', price: 15},
  {name: 'grape', price: 20},
]

const cheapProducts = products.filter(product => product.price < 15);

console.log(cheapProducts); // [{name: 'apple', price: 10}, {name: 'banana', price: 19}]




//**Map Complex Transformations**
//- Create an array of objects representing books (with `title` and `author`). Use `map()` to return an array of strings in the format: `"Title by Author"`.

let books = [
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'},
  {title: 'To Kill a Mockingbird', author: 'Harper Lee'},
  {title: '1984', author: 'George Orwell'},
]


const bookInfo = books.map(book => `{${book.title} by ${book.author}}`);


console.log(bookInfo); // ['The Great Gatsby by F. Scott Fitzgerald', 'To Kill a Mockingbird by Harper Lee', '1984 by George Orwell']




// **Filter Numbers Based on Multiple Conditions**
//- Given an array of numbers, use `filter()` to return numbers that are both greater than 10 and divisible by 3.

let numbers = [5, 12, 18, 27, 30, 35, 42];

const filteredNums = num => {
  return num > 10 && num % 3 === 0;
}

console.log(numbers.filter(filteredNums)); // [12, 18, 27, 42]




//**Modify Array of Objects (map)**
//- Given an array of objects representing users with a `name` and `age`, use `map()` to return a new array where all users are considered adults (i.e., add a new `isAdult` property based on their age).


let userAges = [
  {name: 'alice', age: 25},
  {name: 'bob', age: 17},
  {name: 'charlie', age: 30}
];


const adults = userAges.map(user =>{
  return {user, isAdult: user.age >= 18}  //here 'user' became 'name'.
});



console.log(adults); // [{name: 'alice', age: 25, isAdult: true}, {name: 'bob', age: 17, isAdult: false}, {name: 'charlie', age: 30, isAdult: true}]






//**Chaining map and filter**
//- Create an array of numbers. First, use `filter()` to return numbers greater than 50. Then, use `map()` to halve those numbers.



let nums = [10, 25, 55, 70, 85, 100, 200, 400];

let greaterThan100 = nums.filter(num => num > 100)

let halver = greateThan100.map(num => num / 2);

console.log(halver); // [100, 200]





//**Log Word Frequencies (forEach)**
//- Create an array of words. Use `forEach()` to create an object that tracks how many times each word appears in the array.


let words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const wordCount = {};

words.forEach(word => {
  if(wordCount[word]){
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }
})

console.log(wordCount); // {apple: 3, banana: 2, orange: 1}






//**Filter Objects by Nested Property**
// - Given an array of objects representing cars (with nested objects for `brand` and `model`), use `filter()` to return only cars of a specific brand.


let carObj = [
  {brand:  'Toyota', model: 'Camry'},
  {brand: 'Honda', model: 'Civic'},
  {brand: 'Toyota', model: 'Corolla'},
  {brand: 'Ford', model: 'Mustang'},
]


const toyotaCars = carObj.filter(car => car.brand = 'Toyota')

console.log(toyotaCars); // [{brand: 'Toyota', model: 'Camry'}, {brand: 'Toyota', model: 'Corolla'}]