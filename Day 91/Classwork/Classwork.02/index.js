const products = [
  {id: 1, name: 'Product 1',},
  {id: 2, name: 'Product 2',},
  {id: 3, name: 'Product 3',}
];



function createProductElement(){

  const productContainer = document.getElementById('productContainer');
  
  for(let i = 0; i < products.length; i++){
    const productDiv = document.createElement('div');
    productDiv.innerHTML = '<h3>' + products[i].title + '</h3>' + '<p>' + products[i].id + '</p>';
    productContainer.appendChild(productDiv);
  }
}

window.onload = createProductElement;


