const counter = document.getElementById("counter")
const click = document.getElementById("click")
click.onclick = function(){
  let currentCount = parseInt(counter.textContent)
  counter.textContent = currentCount + 1 
}

//----------------------------------------------

//ჩვენ შევინახეთ id-ები ცვლადში ( გავიმარტივეთ საქმე )

let red = document.getElementById("red")
let blue = document.getElementById("blue")
let pink = document.getElementById("pink")
let black = document.getElementById("black")
let green = document.getElementById("green")

//----------------------------------------------------------------

//შემდგომ გავუწერეთ კოდი რომ როდესაც დააკლიკებდნენ იმ ღილაკს რომელის 
//აიდიცაა მაგალითად red  გამხრადიყო დივის ბექგრაუდნი წითელი
red.onclick = function(){
  document.getElementById("uniq-div").style.backgroundColor = "red"
}

blue.onclick = function(){
  document.getElementById("uniq-div").style.backgroundColor = "blue"
}

pink.onclick = function(){
  document.getElementById("uniq-div").style.backgroundColor = "pink"
}

black.onclick = function(){
  document.getElementById("uniq-div").style.backgroundColor = "black"
}

green.onclick = function(){
  document.getElementById("uniq-div").style.backgroundColor = "green"
}




