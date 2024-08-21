
// let usinput1 = document.getElementById("us1")
// let usinput2 = document.getElementById("us2")
// let result = usinput1 + usinput2

// console.log(result)

//დავუკავშირდით html-ის ფორმას
const form = document.getElementById("myForm");
const btn = document.getElementById("btn");

//დავადეკლარირეთ ფუნქცია სახელად validateForm რომელიც გაუშვებს if ში ჩაწერილ
//წინადადებას თუ name ან email value ან pass და color  არის ცარიელი იგივე ხდება else if-ში
//თუ ყველაფერი სწორადა ჩწერილი დაიწერება ინფო ( console.log )

function validateForm(){

  const nameValue =  form.elements.forname.value;
  const emailValue = form.elements.email.value;
  const passValue = form.elements.password.value;
  const colorValue = form.elements.forcolor.value;

  if(nameValue == '' || emailValue == '' || passValue == '' || colorValue == ''){
    alert('Please Fill all the fields');
    return;
  }

  

  console.log("Form Submitted Succesfully");
  console.log("Name: " + nameValue);
  console.log("Email: " + emailValue);
  console.log("Password: " + passValue);
  console.log("Color: " + colorValue);




}


