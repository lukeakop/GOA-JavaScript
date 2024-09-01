//გააკეთეთ 10-10 მაგალითი  while, for and if-else ზე


//----------------------WHILE----------------------------

// #1 Counting numbers

// let count = 10;
// while (count > 0) {
//     console.log(count);
//     count--;
// }





//#2 While password is not correct keep asking.

// let password = "";
// while (password !== "secret") {
//     password = prompt("Enter the password:");
// }




//#3 

// let fruits = ["apple", "banana", "cherry"];
// let i = 0;
// while (i < fruits.length) {
//     console.log(fruits[i]);
//     i++;
// }



//#4 Calculate factorial

// let num = 5;
// let factorial = 1;
// while (num > 0) {
//     factorial *= num;
//     num--;
// }
// console.log(factorial);





// // 5. Repeating a message
// let times = 3;
// while (times > 0) {
//     console.log("Hello!");
//     times--;
// }


// // 6. Summing numbers
// let sum = 0;
// let num = 1;
// while (num <= 5) {
//     sum += num;
//     num++;
// }
// console.log("Sum:", sum);



// // 7. Reading input until a condition is met
// let text = "";
// while (!text.includes("stop")) {
//     text = prompt("Enter some text (type 'stop' to end):");
// }



// // 8. Printing even numbers
// num = 0;
// while (num <= 10) {
//     console.log(num);
//     num += 2;
// }



// // 9. Validating input
// let age = 0;
// while (age <= 0) {
//     age = parseInt(prompt("Enter your age (positive number):"));
// }



// // 10. Countdown with a message
// let seconds = 5;
// while (seconds > 0) {
//     console.log(`${seconds} seconds remaining`);
//     seconds--;
// }
// console.log("Time's up!");




//For Loop Examples

// // 1. Iterating through an array
// const fruits = ["apple", "banana", "cherry"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }



// // 2. Counting up
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }



// // 3. Counting down
// for (let i = 5; i > 0; i--) {
//     console.log(i);
// }



// // 4. Iterating through a string
// const word = "Hello";
// for (let letter of word) {
//     console.log(letter);
// }



// // 5. Summing numbers
// const numbers = [1, 2, 3, 4, 5];
// sum = 0;
// for (let num of numbers) {
//     sum += num;
// }
// console.log("Sum:", sum);



// // 6. Printing multiplication table
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }



// // 7. Nested loops
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`(${i}, ${j})`);
//     }
// }



// // 8. Iterating with index
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1}. ${fruits[i]}`);
// }



// // 9. Skipping elements
// for (let i = 0; i < 10; i += 2) {
//     console.log(i);
// }



// // 10. Iterating through an object
// const person = {name: "John", age: 30, city: "New York"};
// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }











// // If-Else Examples

// // 1. Simple condition
// age = 18;
// if (age >= 18) {
//     console.log("You are an adult");
// } else {
//     console.log("You are a minor");
// }



// // 2. Multiple conditions
// const grade = 85;
// if (grade >= 90) {
//     console.log("A");
// } else if (grade >= 80) {
//     console.log("B");
// } else if (grade >= 70) {
//     console.log("C");
// } else {
//     console.log("F");
// }



// // 3. Checking equality
// const color = "red";
// if (color === "red") {
//     console.log("The color is red");
// } else {
//     console.log("The color is not red");
// }



// // 4. Nested if-else
// num = 10;
// if (num > 0) {
//     if (num % 2 === 0) {
//         console.log("Positive even number");
//     } else {
//         console.log("Positive odd number");
//     }
// } else {
//     console.log("Non-positive number");
// }



// // 5. Logical operators
// age = 25;
// const hasLicense = true;
// if (age >= 18 && hasLicense) {
//     console.log("You can drive");
// } else {
//     console.log("You cannot drive");
// }



// // 6. Checking membership
// const fruit = "apple";
// if (["apple", "banana", "cherry"].includes(fruit)) {
//     console.log("This is a valid fruit");
// } else {
//     console.log("This is not a valid fruit");
// }



// // 7. Ternary operator
// age = 20;
// const status = age >= 18 ? "adult" : "minor";
// console.log(status);



// // 8. Checking string properties
// text = "Hello";
// if (text.startsWith("H")) {
//     console.log("The text starts with 'H'");
// } else {
//     console.log("The text doesn't start with 'H'");
// }



// // 9. Comparing numbers
// const x = 5;
// const y = 10;
// if (x < y) {
//     console.log("x is less than y");
// } else if (x > y) {
//     console.log("x is greater than y");
// } else {
//     console.log("x is equal to y");
// }



// // 10. Checking multiple conditions
// const day = "Monday";
// if (day === "Saturday" || day === "Sunday") {
//     console.log("It's the weekend");
// } else {
//     console.log("It's a weekday");
// }
