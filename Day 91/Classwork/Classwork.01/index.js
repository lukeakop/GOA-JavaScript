const addCart = document.getElementById("btn2");
const img = document.getElementById("img2");
const toBeAdded = document.getElementById("container2");

addCart.addEventListener('click', function(e){
  e.preventDefault();
    alert("Added to Cart");

  toBeAdded.appendChild('img2')
});


