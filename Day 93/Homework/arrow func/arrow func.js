//Basic Arrow Function with a Single Parameter:

//=========== ================ =================


// const num = number => `The number is ${number}`

// console.log(num(10))    //output: 10


//----------------------------------------------------

//Basic Arrow Function with a Single Parameter:

//=========== ================ =================


// const sum = (a, b) => `The sum of ${a} and  ${b} is ${a + b}`

// console.log(sum(10, 10)) //output: The sum of 10 and  10 is 20

//----------------------------------------------------

//Arrow Function without Parameter:

//=========== ================ =================


// const withoutParameter = () => `Learning Javascirpt`

// console.log(withoutParameter()) //output: Learning Javascirpt

//-----------------------------------------------------


// Conditional Arrow Function:

////=========== ================ =================


// const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd"

// console.log(evenOrOdd(10)) //output: Even

// console.log(evenOrOdd(11)) //output: Odd

//-----------------------------------------------------

// Arrow Function with Default Parameters:

//=========== ================ =================


// const defaultParameters = (num1, num2) => {
//   if(num2 === undefined){
//     return num1
//   }
//   return num1 * num2
// }

// console.log(defaultParameters(10)) //output: 10
// console.log(defaultParameters(10, 10)) //output: 100

//-----------------------------------------------------


// Arrow Function returning an object:

//=========== ================ =================


// const object = (name, age) => {
//   name: name,
//   age; age
// }

// console.log(object("luka", 20)) //output: {name: "luka", age: 20}

// console.log(object("luka")) //output: {name: "luka", age: undefined}


//-------------------------------------------------------

//Arrow Function with Nested Arrow Functions:

//=========== ================ =================


// const nestedArrow = (a, b) => {
//   const product = (x, y) => x * y;

//   return product(a, b);
// }

// console.log(nestedArrow(10, 10)) //output: 100

//-----------------------------------------------

//Arrow Function for Summing an Array:

//=========== ================ =================


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let sum = 0;

// const arraySum = () => {

//   for(let i = 0; i < array.length; i++){
//     sum += array[i];
//   }

//   return sum;
  
  
// }

// console.log(arraySum()) //output: 66
