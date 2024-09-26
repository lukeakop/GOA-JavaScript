//creating an object:
// const person = {
//   name: "luke",
//   age: 17,
//   city: "London"
// };



// console.log(person); //output: {name: "luke", age: 17, city: "London"}



//Accessing the object Properties:


// console.log(person.name); //output: luke
// console.log(person.age); //output: 17
// console.log(person.city); //output: London




//Destructing an Object:

// const { name, age } = person;

// console.log(name); //output: luke
// console.log(age); //output: 17




//Nested Object Destructing:


// const student = {
//   name: "kuki",
//   age: 23,
//   address: {
//       city: "park",
//       country: "georgia"
//   }
// }


// const {city, country} = student.address;

// console.log(city) //output: park
// console.log(country) //output: georgia






//Default Value in Destructing:

const product = {
  name: "sauce",
  price: 23
}

const {name, category = "general"} = product;

console.log(name); //output: sauce   
console.log(category); //output: general





//Destructure from Function Parameters:


function displayCart({brand, model, year}){

  //using destructing to log the values
  console.log(`brand: ${brand}`);
  console.log(`model: ${model}`);
  console.log(`year: ${year}`);

}






//rest operator with Objects:

const book = {
  title: "the lord of the rings",
  author: "tolkien",
  year: 1954,
  publisher: "harpercollins"
}


const {year, publisher, ...restObjects} = book;

console.log(year); //output: 1954
console.log(publisher); //output: harpercollins
console.log(restObjects); //output: {title: "the lord of the rings", author: "tolkien"}




//Spread operator with Objects:

const user = {
  name: 'nike',
  age : 12
}

const location = {
  city: 'new york',
  country: 'USA'
}


const combinedUser = {...user, ...location};

console.log(combinedUser); //output: {name: "nike", age: 12, city: "new york", country: "USA"}




//rest operator with Function arguments:

function sumNumbers(...numbers){
  let sum = 0;

  for(const number of numbers){
    sum += number;
  }
  return sum;
}

// console.log(sumNumbers(1, 2, 3, 4, 5, 12)); //output: 27




//spread operator with arrays:

let numbers1 = [1, 2, 3, 4, 5];

let numbers2 = [6, 7, 8, 9, 10];

let combinedNumbers = {...numbers1, ...numbers2};

console.log(combinedNumbers); //output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]