// const names = ['Luka', 'Lari', 'iura'];

// const newNames = names.filter((curValue) => {
//     return curValue[0] != "L" // ამ ფუნქციამ filter-ის შემთხვევაში უნდა დააბრუნოს ან True ან False
// })


//more like: L != L = false ამიტომ არ დაემატება
        //   L != i - ture ამიტომ დაემატება
        
// console.log(newNames) //output will be anything in array which's letter does not start with "L"

//=============================================================================

//filter დავალება:

// const nameObj = [
//   {
//     name: "Luka",
//     age: 20
//   },

//   {
//     name: "Lari",
//     age: 19
//   },

//   {
//     name: "Irakli",
//     age: 17
//   },

//   {
//     name: "Nika",
//     age: 16
//   },

//   {
//     name: "Gio",
//     age: 25
//   }
// ];

// const adults = nameObj.filter((person => person.age >= 18));
// const minors = nameObj.filter((person => person.age < 18));

// console.log("adults:", adults)
// console.log("minors:", minors)

//=====================================================================

//filter კლონით გაკეთებული:

// const nameObj = [
//   {
//     name: "Luka",
//     age: 20
//   },

//   {
//     name: "Lari",
//     age: 19
//   },

//   {
//     name: "Irakli",
//     age: 17
//   },

//   {
//     name: "Nika",
//     age: 16
//   },

//   {
//     name: "Gio",
//     age: 25
//   }
// ];

// const simpleAgeFilter = (arr, condition) => {
//   const result = []

//   for(let i = 0; i < arr.length; i++){
//     if(condition(arr[i])){
//       result.push(arr[i])
//     }
//   }
//   return result;
// }

// console.log(simpleAgeFilter(nameObj, (person => person.age >= 18)))
// console.log(simpleAgeFilter(nameObj, (person => person.age < 18)))




//=============================================================================

//filter კლონი:

// const manualFilter = (arr, func) => {
//     const result = []
//     for(let i = 0; i < arr.length; i++){
//         const bool = func(arr[i], i, arr);
        
//         if(bool){
//             result.push(arr[i])
//         }
//     }
    
//     return result;
// }

// console.log(manualFilter(names, (curValue) => {
//     return curValue[0] != "L"
// }))
