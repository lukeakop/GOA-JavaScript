//map method:
// const names = ["luka", "mari","yura"];

// const newNames = names.map((curName, index, arr) =>{
//     return curName + index
// })

//=================================================

//example 1
// const newNames = names.map((curValue, index) => curValue + index);


// console.log(newNames)



//example 2

// const newNames = names.map((curValue, index) => {
    
// });


// console.log(newNames) //output: undefined


//==========================================================

//map დავალება:

// const names = ['luka', 'mari', 'iura', 'gio', 'nika'];

// const newNames = names.map((name, index) => {
//     if (index % 2 === 0) {
//         return name.toUpperCase();
//     } else {
//         return name.toLowerCase();
//     }
// });

// console.log(newNames);


//


//==========================================================

//map კლონი:


// const manualMap = (arr, func) => { //დავადეკლარირეთ manualMap function რომელსაც გადავეცით არგუმენტად (arr, func)

//     const result = []; //შევქმენით ახალი მასივი რადგან map აბრუნებს ახალ მასივს.
    
//     for(let i = 0; i < arr.length; i++){ //for ციკლით გადავუარეთ arr-ს

//         const value = func(arr[i], i, arr); // გადავეცით ამჟმინდელი მნშვნელობა, ინდექსი და მასივი.func-ისგან ველოდებით ახალ მნიშვნელობას

//         result.push(value) // და როგორც კი დაგვიბრუნდება ახალი მნიშვნელობა დავამატებთ result-ში
//     }

//     //საბოლოოდ როცა for ციკლი შეწყვეტს მუშაობას და გამოვიძახებ func ფუნქციას საბოლოოდ  ამ ახალ შექმნილ მასივს დავაბრუნებთ ფუნქციიდან
    
//     return result
// }

// console.log(manualMap(names, (curValue, index) => curValue + index))