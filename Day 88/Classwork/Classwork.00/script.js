const form = document.getElementById("myForm")

// Addeed an event listener to the form for the 'submit' event
form.addEventListener('submit', function(e){

  // Prevent the default form submission (which would reload the page)
  e.preventDefault();

  //Got form values
  let name = form.elements.forName.value;
  let password = form.elements.forPassword.value;
  let email = form.elements.forEmail.value;

  // Create a new table row element
  let tr = document.createElement("tr");

  // Create a new table data cell for the name
  const nameId = document.createElement("td");
  // Set the text content of this cell to the name value
  nameId.textContent = name;

  const passwordId = document.createElement("td"); //SAME GOES FOR THIS
  passwordId.textContent = password;

  const emailId = document.createElement("td"); //SAME GOES FOR THIS
  emailId.textContent = email;
  
  // Append the name cell to the newly created table row
  tr.appendChild(nameId);
  tr.appendChild(passwordId); //SAME GOES FOR THIS
  tr.appendChild(emailId); //SAME GOES FOR THIS

  // Append the new row to the table body
  // form.nextElementSibling refers to the next sibling element of the form
  // children[1] refers to the second child of that sibling, assumed to be the table
  form.nextElementSibling.children[1].appendChild(tr) 
});