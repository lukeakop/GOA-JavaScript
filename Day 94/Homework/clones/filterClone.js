//Creating filter js function clone:

function filterClone(array, callback) {
      const filteredArray = [];
      for (let i = 0; i < array.length; i++) {
          if (callback(array[i], i, array)) {
              filteredArray.push(array[i]);
          }
      }
      return filteredArray;
  }