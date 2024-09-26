//forEach Method:

// const names = ["luka", "mari","yura"];

// names.forEach((curValue, index, arr) => {
//     console.log(`curValue: ${curValue}, index: ${index} `)
//     console.log(`arr: ${arr}`)
// })

//forEach-ში არის მასივის მეთოდი და forEach მეთოდს გადაეცემა ფუნქცია ამ შემთხვევაში ჩვენ გადავეცით  arrow ფუნქცია, ამ ფუნქცია რომელიც აქ გადავეცით forEach() გადაცემს 

//3 მნიშვნელობას: ამ ჟამინდეს მნიშვნელობას/curValue, 
//ამ ჟამინდელი მნიშვნელობის ინდექსს/index, და ამ ჟმინდელი მასივი/arr

//==========================================================================================================================================================================

//Examples of forEach() :


//example 1

// const names = ["luka", "mari","yura"];


// names.forEach((curValue, index) => {

//  console.log(curValue)

// })

//================================================

//example 2

// const names = ["luka", "mari","yura"];


// names.forEach((curValue, index) => {

//  console.log(curValue + index)

// })

//===================================================

//forEach() კლონი:

// const manualForEach = (arr, func) => {
//     for(let i = 0; i < arr.length; i++)
//     func(arr[i], i, arr)
// }

// manualForEach(names, (value) => {
//     console.log(value)
// })

//აქ for...of იმიტო არ ვიყენებთ რომ გვჭირდება ინდექსები


//------------------------------------------------------------


