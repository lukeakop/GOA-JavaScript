//COMPELX FORM OF SCRIPT CAN BE WRITTEN IN EASY WAY WITH SAME LOGIC APPLIED ( I WROTE WHOLE SCRIPT BUT GOT HELP FROM WEB AFTER LINE 44 )


//Creating array to store user objects

let user_info = [];


// Got the form element
const form = document.getElementById("myform");

// Added event listener for form submission
form.addEventListener('submit', function(event){

  // Prevent the default form submission behavior
  event.preventDefault();

  // Get input values
  const nameInput = form.elements.nameInput.value.trim();
  const surnameInput = form.elements.surnameInput.value.trim();
  const emailInput = form.elements.emailInput.value.trim();

  //Validate input fields
  if(validateForm(nameInput, surnameInput, emailInput)) {

     // Create a new user object
    const new_info = {
      nameInput: nameInput,
      surnameInput: surnameInput,
      emailInput: emailInput
    };

    //Added the new user object to the users array
    user_info.push(new_info);

    //Cleared the form
    form.reset();

    // Log the updated users array (for demonstration purposes)
    console.log("Updated Array:", user_info);
  };
});

// Function to validate form inputs
function validateForm(firstName, lastName, email) {
  // Check if any field is empty
  if (firstName === '' || lastName === '' || email === '') {
      alert('All fields are required');
      return false;
  }
  
  // Validate email format using a simple regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return false;
  }
  
  // If all validations pass, return true
  return true;
}