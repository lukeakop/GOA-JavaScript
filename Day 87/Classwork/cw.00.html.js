const div = document.getElementById("Div1")
const pgArray = document.getElementsByTagName("p")

console.log(div.parentElement) // .parentElement აბრუნებს მშობელ ელემენტს.

console.log(div.children) // .children  აბრუნებს შვილ ელემენტებს.

console.log(div.firstElementChild) // .firstElementChild აბრუნებს პირველი შვილ ელემენტს

console.log(div.lastElementChild) // .lastElementChild აბრუნებს ბოლო შვილ ელემენტს.

console.log(div.previousElementSibling) // .previousElementSibling აბრუნებს პირველ დედმამიშვილს.

console.log(div.nextElementSibling) // .nextElementSibling აბრუნებს ბოლო დედმამიშვილს.