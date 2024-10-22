// class User {
//     // Private field
//     #age;

//     // Static field to keep track of user count
//     static userCount = 0;

//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     // Getter
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     // Getter for age
//     get age() {
//         return this.#age;
//     }

//     // Setter for age
//     set age(newAge) {
//         if (newAge >= 0 && newAge <= 120) {
//             this.#age = newAge;
//         } else {
//             console.log("Invalid age");
//         }
//     }
    
//     // Instance method to display user info
//     displayUserInfo() {
//         return `${this.fullName} is ${this.age} years old`;
//     }

//     // Static method to increment user count
//     static incrementUserCount() {
//         this.userCount++;
//     }
// }

// // DOM elements
// const form = document.getElementById("myForm");
// const userInfoDiv = document.getElementById("userInfo");

// form.addEventListener("submit", (e) => {
//     e.preventDefault(); 

//     const firstName = form.elements.firstName.value;
//     const lastName = form.elements.lastName.value;
//     const age = parseInt(form.elements.age.value);

//     const user = new User(firstName, lastName, age);
//     User.incrementUserCount();

//     updateUserInfo(user);
//     form.reset();
// });

// function updateUserInfo(user) {
//     userInfoDiv.innerHTML = `
//     <h2>Registered Users: ${User.userCount}</h2>
//     <p>${user.displayUserInfo()}</p>
//     `;
// }



// simple solution which also works: 

// const form = document.querySelector('form');
// const accountsDiv = document.querySelector('#accounts');


// class Account {
//     #password;
//     static #accounts = [];

//     constructor(email, password, fullname) {
//         this.email = email;
//         this.#password = password;
//         this.fullname = fullname;

//         Account.#addAccount(this);
//     }
    
//     static #addAccount(account) {
//         Account.#accounts.push(account);
//         console.log(account);
//         console.log(Account.#accounts)
//         Account.#displayAccounts();
//     }

//     static #displayAccounts() {
//         accountsDiv.innerHTML = '';
//         for(const acc of Account.#accounts) {
//             accountsDiv.innerHTML += `<p>${acc.fullname} - ${acc.email}</p>`;
//         }
//     }

// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = form.email.value;
//     const password = form.password.value;
//     const fullname = form.fullname.value;

//     new Account(email, password, fullname);


// })

