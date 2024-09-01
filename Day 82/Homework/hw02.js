// 3 შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი, start - 
//end, თქვენი მოვალეობაა ამ რიცხვებს შორის ყველა რიცხვის გაგება და მასივში შეტანა, საბოლოოდ დააბრუნეთ მასივი


// function createNumberArray(start, end){
//   let numberArray = [];
    
//   for(let i = start; i < end; i++){
//       numberArray.push(i);
//   }
//   return numberArray;
// }

// console.log(createNumberArray(1, 10))



// 4 დაბრუნებული მასივი გადაეცით ფუნქციას რომელსაც დაარქმევთ 
// calculateAverage ამ ფუნქციაში გამოითვლით იმ რიცხვების საშუალოს  -----this two codes are merged in-fact but bc of Classwork i separated them.
//  მოთავსებულია სიაში, მიღებული საშულა დააბრუნეთ ფუნქციიდან

// function calculateAverage(numbers){
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++){
//       sum = sum + numbers[i];
//   }
  
//   let average = sum / numbers.length
//   return average
  
  
// }

// let start = 1
// let end = 11

// let nums = createNumberArray(start, end);
// let averageNum = calculateAverage(nums);

// console.log(nums)
// console.log(averageNum)


//---------------------------------------------------------------------------------------------------------------------------------------

// let dataBase = []

// let form = document.getElementById("myForm")

// form.addEventListener('submit', function(event){
//   event.preventDefault();

//   let name = document.getElementById("name").value;
//   let password = document.getElementById("password").value;
//   let email = document.getElementById("email").value;
//   let btn = 

//   let user = {
//     name: name,
//     password: password,
//     email: email
//   };
  
//   let uniqueEmail = true
//   for(let i = 0; i < dataBase.length; i++){ //Checking if email exists, if statement explanation(if email is in database true will be false, break stops the code.)
//     if (dataBase[i].email === email){
//       uniqueEmail = false;
//       break
//     };
//   };

// });



// if(uniqueEmail){        //checking if email does not exist in database, if it does not exist in database it will be added to databease.
//   dataBase.push(user);
//   alert("Registration successful");

//   form.reset //Cleared Form after successful registration

// } else{
//   alert("Email already exists please use differnet email");
// }

// console.log("Current Database:", dataBase);


