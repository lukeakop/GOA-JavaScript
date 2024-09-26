// const numbers = [10, 12, 15, 16, 11, 10];


// const evenIndex = numbers.map((value, index) => {
    
//     if(index % 2 === 0){
//         return value * 2
//     } else {
//         return value
//     }
// })

// console.log(evenIndex)


//value is each number from the numbers array.

//index is the index of that number in the array.

//We check if the index is even, not the value itself.

//We multiply the value by 2 if the index is even, otherwise we return the value as is.

//This should give you the result you're looking for, multiplying numbers at even indexes by 2.




//with mapClone: 


function mapClone(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

// Test the mapClone function
const numbers = [10, 12, 15, 16, 11, 10];

const evenIndex = mapClone(numbers, (value, index) => {
  if (index % 2 === 0) {
    return value * 2;
  } else {
    return value;
  }
});

console.log(evenIndex);