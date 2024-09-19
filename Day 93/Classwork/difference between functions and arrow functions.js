// //javascript_ში არის 2 ფუნქცია: arrow ფუქნცია და ჩვეულებრივი ფუნქცია

// //ამ ორ ფუნქციის ტპისი შორის არის ერთი განსხვავება, მთავარი გასხვავება კი
// //ის არის რომ სინტაქსურადსხვანაირად იწერება, arrow function იმიტომ შექმნეს რომ ფუნქციების შექმნაც კი ყოფილიყო მარტივიანუ შეგვემოკლებინა კოდი



// //--------------------EXAMPLES-----------------------------------------


// //normal function:

// // function greet(name){
// //     return  `Hello Mr/Ms ${name}`
// // }


// //console.log(greet("luka"))

// //--------------------------------------------

// //arrow function:

// //         parameter // returning result (return)
//       //        |     //       |
// const greet = name => `Hello Mr/Ms ${name}`
//         //          |     
//     //            arrow



// console.log(greet("luka", "akofiani"))

// //arrow function არის ჩვეულებრივი ფუნქციის შემოკლებული სინტაქსი რომელიც გვაძლევს იმის საშუალებას რომ ფუნქცია დავწეროთ ერთ ხაზში. arrow function ებს ვინახავთ ან let ცვლადებში ან const ცვლადებში რადგან მისი ჩვეულებრივად დეკლარაცია არარის დაშვებული



// //-------------------------------------------------------------------



// const greet = (name, lastname) => `Hello Mr/Ms ${name} ${lastname}`

// console.log(greet("luka", "akofiani"))

// //როცა ერთზე მეტი პარამეტრის გადაცემა გვინდა ჩვენ ორივე პარამეტრი უნდა მოვაქციოთ ერთად ფჩხილებში



// //--------------------------------------------------------------------



// const greet = () => `Hello Mr/Ms ${name} ${lastname}`

// //                                                   output: Hello Mr/Ms

// console.log(greet("luka", "akofiani"))//if we deleted "luka", "akofiani" output will remain same

// //თუ პარამეტრი არ გვაქ შეგვიძლია დავტოვოთ ცარიელი ფრჩხილი



// //--------------------------------------------------------------------- 



// const greet = (name, lastname) => {
//     if(name === "Luka"){
//         return "Hello Leader"
//     }
//     return `Hello Mr/Ms ${name} ${lastname}`//if we deleted this and if "if" statement does not match true it will output: undefined
// }

// console.log(greet("luka", "akofiani"))