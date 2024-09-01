function manualIndexOf(value, list) {

  // Iterate over each element in the list
  for (let i = 0; i < list.length; i++) {

    // Check if the current element matches the value we're looking for
    if (list[i] === value) {

      // Return the index if the value is found
      return i;

    }

  }
  
  // If the value isn't found, return -1
  return -1;

}


 