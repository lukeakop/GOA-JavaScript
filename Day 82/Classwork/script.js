// შექმენით ფუნქცია რომელსაც დაარქმევთ even_sum, ამ ფუნქციას ექნება 1 პარამეტრი სახელად border (ზღვარი),
//  ფუნქციამ 0-იდან border-ის ჩათვლით უნდა გაიგოს ყველა რიცხვი if პირობითი განცხადების საშვალებით,
//  ეს ყველა ლუწი რიცხვი უნდა შეკრიბოთ და დააბრუნოთ

//CW #1

//----------------------------

// function even_sum(border){
//   let sum = 0;

//     for(let i = 0; i <= border; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(even_sum(10))




//შექმენით for ციკლი რომლითან 20-იდან 0-ის ჩათვლით ყველა რიცხვს დაბეჭდავთ

//CW #2

//----------------------------

// function minus_num(){

  

//   for(let i = 20; i >= 0; i--){

//     console.log(i)
//   }

  
// }

// console.log(minus_num())





//შექმენით for ციკლი რომელიც 0-იდან 10-ის ჩათვლით ყველა ლუწ რიცხვს დაბეჭდავს, if-ის გამოყენების გარეშე

//CW #3

//----------------------------

// function toTenn(){

//   for(let i = 0; i < 12; i += 2){

//     console.log(i)
//   }
// }
// toTenn();


// შექმენით ფუნქცია რომელსაც დაარქმევთ generate even ამ ფუნქციას უნდა გადაეცემოდეს border, ჩვენი დავალებაა რომ შევქმნათ ახალი 
//მასივი შემდეგ მასივში დავამატოთ 0-იდან border-ის ჩათვლით რიცხვები და დავაბრუნოთ მასივი, ხოლო დაბუნებული მასივი უნდა გადავცეთ
// შემდეგ ფუნქციას calculateSum, თქვენი დავალებაა რომ for ციკლის საშვალებით გამოიანგარიშოთ ყველა რიცხვის ჯამი და დააბრუნოთ

//CW #4

//----------------------------

// function generateEven(border) {
//   array = [];

//   for (let i = 0; i < border; i += 2) {
//     array.push(i);
//   }
//   return array;
// }

// function calculateSum(numbers){
//   let sum = 0

//   for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
//   }
//   return sum
// }

// const border = 10;
// const func = generateEven(border);
// const sum = calculateSum(func)

// console.log(sum)



//შექმენით for ციკლი რომლითაც გაიგებთ რიცხვებს 0-იდან 10-ის ჩათვლით, თქვენი დავალებაა მასივში დაამატოთ ობიექტი, ობიექტში უნდა გქონდეთ 
// 2 კუთვნილება პირველი value (რიცხვი), მეორე type (აქ გაუწერთ ლუწია თუ კენტი)

//CW #5

//----------------------------

// let array = []

// for(let i = 0; i < 10; i++){
//     let type;
//     if(i % 2 === 0){
//         type = "even";
//     }
//     else{
//         type = "odd"
//     };

//     let numObject = {
//         value: i,
//         type: type
//     };

//     array.push(numObject);
// }

// console.log(array)



//შექმენით ლოგიკა რომლის მიხედვითაც მომხმარებელს უნდა შემოატანინოთ პაროლი თუ პაროლი სწორია 
//alert-ის საშვალებით გამოიტანეთ რომ მას მიეცა წვდომა, ხოლო თუ არასწორია თავიდან შეეკითხეთ პაროლი
// და მოაკელით პაროლის მცდელობა, თავიდან მცდელობები არის 3 თუ მცდელობები ამოიწურა ითიშება while ციკლი,
// ყოველ ცდაზე უნდა გამოუტანოთ მცდელობების რაოდენობა (დაგჭირდებათ while ციკლი და if პირობითი განცხადება)

//-------------------------------

//CW #6

// let correctPassword = "GOA1234";
// let attempts = 3;
// let access = false;

// while (attempts > 0 && !access) {
//     let userPassword = prompt("Enter the password:");
    
//     if (userPassword === correctPassword) {
//         alert("Access granted!");
//         access = true;
//     } else {
//         attempts--;
//         if (attempts > 0) {
//             alert(`Incorrect password. You have ${attempts} attempts left.`);
//         } else {
//             alert("No more attempts left. Access denied.");
//         }
//     }
// }

