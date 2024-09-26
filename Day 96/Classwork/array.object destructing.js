// const numbers = [1, 2, 3];

// const [one, two, three] = numbers;

// console.log(one, two, three) // this is called array destructing


// //method #1

// const numbers = [1, 2, 3];

// const [one, , three] = numbers;

// console.log(one, , three) //output 1 3



// //method #2


// const me = {
//   name: "luka",
//   lastname: "akofiani"
// }

// const {lastname, name} = me

// console.log(lastname) // this is called object destructing



const me = {
  name: "luka",
  lastname: "akofiani"
}

const {lastname: niggas} = me

console.log(niggas) // this will output akofiani even though we returning niggas becuase of changes made at 37 line