// const name = "Luka";

// function printInfo(){
//     const lastName = "akofiani";
    
//     function me(){
//         const position = "Leader";
//         console.log(name, lastName, position)
//     }
    
//     me()
// }

// printInfo()



//შეგვიძლია გამოვიყენოთ ფუნქციის გარეთ გატანილი მნიშვნელობა ფუნქციის შიგნით
//ამას ეწოდება ლექსიკური სკოუპი



//------------------------------------------------------------------------------------



// const name = "Luka";

// function printInfo(){
//     const lastName = "akofiani";
    
//     function me(){
//         const lastName = "Leader"; //input leader
//         console.log(name, lastName)
//     }
    
//     console.log(lastName) // input: akofiani
    
//     me()
// }


// printInfo()



//ეს იმიტომ ხდება რომ const keyword საცავს გააჩნია: ბლოკის ფარგლები/block scope
//ეს იმას ნიშნავს რომ ეს კონკრეტული lastName კონსტანტა მარტო ხელმისაწვდომი არის ფუნქიციის შიგნით.

//რომ დაუკვირდა მანქანა რომ ორი კონკრეტული კონსტანტაა შექმნილი, მათზე ლექსიკური სკოუპი აღარ იმუშავებს, რადგან თუ იმუშავებდა იქნებოდა შეცდომა და რედეკლარაცია მოხდებოდა

//ლექსიკური სკოუპი არის როდესაც შენ გაქვს წვდომა ნებისმიერ კოდის ბლოკში, ზემოთ შექმნილ ცვლადებზე.