//Creating map function clone:

function mapClone(array, callback){
  for(let i = 0; i < array.length; i++){
    array[i] = callback(array[i], i, array);
  }
}