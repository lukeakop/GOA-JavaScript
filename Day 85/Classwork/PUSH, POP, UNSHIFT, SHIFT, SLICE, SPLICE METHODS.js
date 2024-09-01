// //PUSH

// //created a variable named "name", then we added list to it
// let name = ["Luka", "Nika", "Goal", "Orientadze", "Lika", ]

// //here we used push ethod which pushes the word which we write in "" 
//     //and then adds it as last index in name array
// name.push("Lika")

// console.log(name)



// //created a variable named "name", then we added list to it
// let nameww = ["Luka", "Nika", "Goal", "Orientadze", "Lika", "Nigga"]

// //here we used push ethod which pushes the word which we write in "" 
//     //and then adds it as last index in name array
    
//   //second word adding: we can use push and in it write as much words as we want, it does not have limit, 
//   //in this case it added nigga after lika ;)

// name.push("Lika", 'Nigga')

// console.log(name)



//POP

// //created a variable named "name", then we added list to it
// let name = ["Luka", "Nika", "Goal", "Orientadze"]



// //We used POP function here, what it does it that it  
// //removes the last index of the list, in this case it remove "orientadze", because it was last index in the list.
// name.pop()


// console.log(name)

// //----------------------------------------------------------------------------------------------------------------------

// //created a variable named "name", then we added list to it
// let nameww = ["Luka", "Nika", "Goal", "Orientadze"]

// // 1st pop explanation: We used POP function here, what it does it that it  removes the last index of the list, 
// //    in this case it remove "orientadze", because it was last index in the list.

// // 2nd pop explanation: here we used pop second time to again remove last index after used first pop which removed "orientadze".
// name.pop()
// name.pop()


// console.log(name)



//-------------------------------------------------------------------------------------------------------------------------------------



// //UNSHIFT

// //created a variable named "name", then we added list to it
// let name = ["Luka", "Nika", "Goal", "Orientadze"]

// //unshift added this two so called strings  in the start of array, so unshift adds any gives string at start of an array.

// name.unshift("Lika", 'Nigga')

// console.log(name)



//----------------------------------------------------------------------------------------------------------------------------------


 //SHIFT

// //created a variable named "name", then we added list to it
// let name = ["Luka", "Nika", "Goal", "Orientadze"]

// //shift added this two so called strings  in the end of array, so shift adds any gives string at end of an array.

// name.shift("Lika", 'Nigga')

// console.log(name)

//--------------------------------------------------------------------------------------------------------------------------


// //SLICE

// //created a variable named "name", then we added list to it
// let name = ["Luka", "Nika", "Goal", "Orientadze"]

// //here we created new variable to  store sliced array because if we did not have created a new variable and stored name variable in new variable 
// //called sliced_name it would only have printed original array.

// let sliced_name = name.slice(0, 1)

// console.log(sliced_name)

//SPLICE

// // //created a variable named "name", then we added list to it
// let name = ["Luka", "Nika", "Goal", "Orientadze"]

// //we chose which index to include only in array with splice function.
// let spliced = name.splice(1, 2)


// console.log(spliced)