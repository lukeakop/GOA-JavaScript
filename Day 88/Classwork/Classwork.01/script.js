const button = document.getElementById("btn");


button.addEventListener('click', function(){

 

  const p = document.createElement('p');
  p.textContent = Math.floor(Math.random() * 1000) +1;

  document.body.appendChild(p)

})