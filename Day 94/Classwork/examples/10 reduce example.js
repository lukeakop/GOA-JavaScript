//sum of numbers using reduce():

let numberList = [1, 2, 3, 4, 5];

const sum = numberList.reduce((acc, cur) => acc + cur, 0); //    to simplify: acc is 0 and cur is 1 
//                                                         //    and iterates like 0 + 1 then 1 + 2 and so on the 0 in the end is where
//                                                     //        we want summing to start from.

console.log(sum); //output: 15




//count how many elements are in the array with reduce():

let stringList = ["apple", "banana", "cherry", "date", "elderberry"];

const count = stringList.reduce((acc, curr) => acc + 1, 0); //here 1 was the actual index of the array

console.log(count); //output: 5


//