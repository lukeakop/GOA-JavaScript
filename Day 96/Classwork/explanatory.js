// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(num => num * 2);


// const manualMap = (arr, func) => {
//     const newArr = [];
//     for(const value of arr){ // arr = (5) [1, 2, 3, 4, 5]
//         newArr.push(func(value)) // func = num => num * 2
//     }

//     return newArr
// }

//map method გადაუვლის ამ მასივს რომელსაც გამოვიძახებთ და ყოველ 
// ჯერზე გამოვიძახებს ამ ფუნქციას, ფუნქციიდან დაბრუნებულ მნიშვნელობას დაამატებს
// ახალ მასივში და ახალ მასივს საბოლოოდ დაგვიბრუნებს ჩვენ და შეინახავს doubledNumbers მასივში

//map method ავტომატურად გადასცემს 3 მნიშვნელობას: 1: ამ ჟამინდელ მნიშვნელობას, 2: ინდექსს და 3: მასივს






// const names = ['John', 'Jane', 'Bob', 'Alice'];

// const upperNames = names.map(user => user.toUpperCase())

// console.log(upperNames) // (4) ['JOHN', 'JANE', 'BOB', 'ALICE']









//filter method ელოდება ყოველთვის boolean მნიშვნელობას ანუ ან ტრუ ან ფოლსი


// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers) // (2) [2, 4]




//example clone:

// const numbers = [1, 2, 3, 4, 5];

// const manualFilter = (arr, func) => {
//   const result = [];

//   for(let i = 0; i < arr.length; i++){
//     if(func(arr[i], i, arr)){
//       result.push(arr[i])
//     }
//   }

//   return result
// }



// function numbers(){
// console.log(arguments
// }


// numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)