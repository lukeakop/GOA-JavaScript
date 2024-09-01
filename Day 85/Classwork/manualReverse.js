function manualReverse(list) {
  // Created an empty array to store the reversed elements
  let reversedList = [];

  // Looping through the list from the end to the beginning with for loop
  for (let i = list.length - 1; i >= 0; i--) {

    // Add each element to the reversedList array
    reversedList.push(list[i]);
  }

  // Return the reversed array
  return reversedList;
}


console.log(manualReverse([1, 7, 9, 10]))