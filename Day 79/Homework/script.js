//HW #1 SCRIPT:

//Have had Accessed HTML Form/button/paragraph

//const form = document.getElementById("origform")
//const button = document.getElementById("btn")
//const textappear = document.getElementById("p2")


//Created function for alert message 
//so if the password is 8 characters less it will display a message "password must be more then 8 character long"
//but if the password is more then 8 characters long it will display the message  "password is correct" (For trying (Not Needed))

// function alertmesg(){

//   const passValue = form.elements.pass.value

//   if(passValue.length < 8){
//     textappear.textContent = "Password Must be more then 8 character long"
//   }

//   else{
//     textappear.textContent = "Password is correct"
//   }


//---------------------------------------------------------------------------------------



 // HW #2 SCRIPT:

//   // Wait for the DOM to be fully loaded

//   document.addEventListener('DOMContentLoaded', function() {

//     // Got the clear button element

//     const clearButton = document.getElementById('clearButton');

//     // Added click event listener to the clear button

//     clearButton.addEventListener('click', function() {

//         // Get all the form elements

//         const nameInput = document.getElementById('name');
//         const emailInput = document.getElementById('email');
//         const messageInput = document.getElementById('message');

//         // Cleared the values of all input fields

//         nameInput.value = '';
//         emailInput.value = '';
//         messageInput.value = '';

//         // Log to console for debugging

//         console.log('Clear button clicked');
//     });
// });


//-------------------------------------------------------------------------------------------------------------------

//HW #3 SCRIPT

// // Got the textarea and counter elements from the HTML

// const textarea = document.getElementById('textarea');
// const counter = document.getElementById('counter');

// // Added an event listener to the textarea

//    textarea.addEventListener('input', function() {

//     // Got the current length of the text in the textarea

//     const currentLength = textarea.value.length;

//     // Updated the counter text to show the current length and max length

//     counter.textContent = `${currentLength}/200 characters`;
// });

//------------------------------------------------------------------------------------------------------------------------------

// //HW #4 SCRIPT

// const colorSelect = document.getElementById('color-select')
// const displayColor = document.getElementById('displayColor')

// colorSelect.addEventListener('change', function(){
//   const selectedColor = colorSelect.value;
//   displayColor.textContent = `Selected Color: ${selectedColor || 'None'}`
// })
