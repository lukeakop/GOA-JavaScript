// function  manualAssign(copyObjects, ...restObjects){
//   console.log(restObjects)
// }



// manualAssign(1, 2, 3, 4, 5, 6, 7, 8) //output [2, 3, 4, 5, 6, 7, 8]

// //1 იანი შეინახა copyObject-ში


// function  manualAssign(copyObjects, ...restObjects){
//   for(const obj of restObjects){
//       for(const key in obj){
//           copyObjects[key] = obj[key]
//       }
//   }
// }

// const me = {
//   name: "luka"
// };



// manualAssign(me, {a: 5}, {name: "nia"}, {lastname: "niggadze"});

// console.log(me)
