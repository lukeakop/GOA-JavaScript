// //პარადიგმა ნიშნავს იმას თუ როგორ წერ შენ კოდს. არსებობს ფუნქციის პარადგიმა და კლასის პარადაგმა.


// //შევქმნათ კლასი:

// class Account{
//     constructor(firstname, lastname){ //აკეთებს ინიციალიეზებას ანუ ობიექტზე კუვნილებების მინიჭება და მნიშვნნელობეების მინიჭება
//         this.firstname = firstname; // this მიუთითებს იმ ახალ ობიექტს რომელიც შექმნა new ოპერატორმა.
//         this.lastname = lastname;
// //         /              /
// //        /         ვანიჭებთ მნიშვნელობას
// //       /
// //  ვქმნით კუთვნილებას
//         this.fullname = `${this.firstname} ${this.lastname}`;
//     }
// }

// const acc1 = new Account("Luka", "Akofiani");

// console.log(acc1)

// //new = ქმნის ცარიელ ოპბიექტს
// //constructor - ში რაც დავადეკლარირეთ ის ის ექნება ყველა ობიექტს ჩაშენებული.

// //==============================================================================================

// //method 2:

// class Account{
//     constructor(firstname, lastname){ //აკეთებს ინიციალიეზებას ანუ ობიექტზე კუვნილებების მინიჭება და მნიშვნნელობეების მინიჭება
//         this.firstname = firstname; // this მიუთითებს იმ ახალ ობიექტს რომელიც შექმნა new ოპერატორმა.
//         this.lastname = lastname;
// //         /              /
// //        /         ვანიჭებთ მნიშვნელობას
// //       /
// //  ვქმნით კუთვნილებას
//         this.fullname = `${this.firstname} ${this.lastname}`;
//     }

//     printInfo(){
//         console.log(this.firstname, this.lastname)
//     }
// }

// const acc1 = new Account("Luka", "Akofiani"); //ამ ორ ობიექტს წვდომა აქვს კლასში ჩაშენებულ ფუქნციასთან
// const acc2 = new Account("Luka", "Akofiani2");

// console.log(acc1) //removed

// acc1.printInfo() // new print !, instead of console.log! // log: luka akofiani
// acc2.printInfo() // new print !, instead of console.log! // log: luka akofiani2

// //==============================================================================================



// //setter მეთოდი:

// class Account{
//     constructor(firstname, lastname){ //აკეთებს ინიციალიეზებას ანუ ობიექტზე კუვნილებების მინიჭება და მნიშვნნელობეების მინიჭება
//         this.firstname1 = firstname; // this მიუთითებს იმ ახალ ობიექტს რომელიც შექმნა new ოპერატორმა.
//         this.lastname2 = lastname;
// //         /              /
// //        /         ვანიჭებთ მნიშვნელობას
// //       /
// //  ვქმნით კუთვნილებას
//         this.fullname = `${this.firstname} ${this.lastname}`;
//     }

//     printInfo(){
//         console.log(this.firstname, this.lastname)
//     }

//     set firstname(value){
//         this.firstname1 = value;
//     }



// }

// const acc1 = new Account("Luka", "Akofiani"); //log: Luka123 Akofiani. instead of Luka Akofiani. because of setter. setter takes only 1 parameter ( must ), but we can use second set and more!
// acc1.firstname = "Luka123"; // use of setter

// //==============================================================================================

// //getter მეთოდი:

// class Account{
//     constructor(firstname, lastname){ //აკეთებს ინიციალიეზებას ანუ ობიექტზე კუვნილებების მინიჭება და მნიშვნნელობეების მინიჭება
//         this.firstname1 = firstname; // this მიუთითებს იმ ახალ ობიექტს რომელიც შექმნა new ოპერატორმა.
//         this.lastname2 = lastname;
// //         /              /
// //        /         ვანიჭებთ მნიშვნელობას
// //       /
// //  ვქმნით კუთვნილებას
//         this.fullname = `${this.firstname} ${this.lastname}`;
//     }

//     printInfo(){
//         console.log(this.firstname, this.lastname)
//     }

//     set firstname(value){ //we can also use setter with getter, but we can not use getter with getter.
//         this.firstname1 = "Lukito";
//     }

//     get firstname(){
//         return this.firstname1;
//     }

// }

// const acc1 = new Account("Luka", "Akofiani");
// console.log(acc1.firstname); //log:

// acc1.firstname = "Luka123"; // use of setter ვიყენებთ setter მეთოდს.

// //როცა ჩვენ არ გვიწერია ტოლობა და არ ვანიჭებთ რაიმე მნიშვნელობას მაშინ ჩვენ ვიყენებთ getter მეთოდს.


// //diferences between setters and getters:

// //setter ცვლის კუთვნილებას, getters- მოაქვს, setters გადაეცემა პარამეტრი, getters არ გადაეცემა პარამეტრი. 

// //setter ში არ შეიძლება რაიმეს დაბრუნება. getter ში შეიძლება რაიმე მნიშვნელობის დაბრუნება.

// //setter ში აუციელბად უნდა გაუწერო პარამეტრი, getter ში არ უნდა გაუწერო პარამეტრი.



// //where can we use setters and getters:

// class Account{
//     #password;

//     constructor(firstname, lastname, password){ //აკეთებს ინიციალიეზებას ანუ ობიექტზე კუვნილებების მინიჭება და მნიშვნნელობეების მინიჭება
//         this.firstname1 = firstname; // this მიუთითებს იმ ახალ ობიექტს რომელიც შექმნა new ოპერატორმა.
//         this.lastname2 = lastname;
// //         /              /
// //        /         ვანიჭებთ მნიშვნელობას
// //       /
// //  ვქმნით კუთვნილებას
//         this.fullname = `${this.firstname} ${this.lastname}`;
//     }
//         this.#password = password;
        
//         _checkPass() {

//         }
//         set password(newPass){
//             this.#password = newPass;
//         }

//         get password(){
//             return this.#password + "123"; // we can also do this.
//         }
// }

// const acc1 = new Account("Luka", "Akofiani", "lukito123");
// console.log(acc1.#password); //log: ERROR CANT USE PRIVATE FIELDS OUTSIDE OF CLASS!!
// console.log(acc1) // no output still hidden.

// acc1.password = "lukito123"; //log: lukito123 (setter)
// console.log(acc1.password); //log: lukito123 (getter)

// //კლასში არსებობს 2 ტიპის კუტვნილება, 1 არის private და მეორე public. ( პირადული, საჯარო ველი )
// //საჯარო ველი შეგვიძლია გამოვიყენოთ პირდაპირ კლასის გარეთ


// //===============================================================================================

// //static methods:

// class Account{

//     #count = 0

//     constructor(firstname, lastname, password){ //აკეთებს ინიციალიეზებას ანუ ობიექტზე კუთვნილებების მინიჭება და მნიშვნნელობეების მინიჭება
//         this.firstname1 = firstname; // this მიუთითებს იმ ახალ ობიექტს რომელიც შექმნა new ოპერატორმა.
//         this.lastname2 = lastname;
// //         /              /
// //        /         ვანიჭებთ მნიშვნელობას
// //       /
// //  ვქმნით კუთვნილებას
//         this.fullname = `${this.firstname} ${this.lastname}`;
//         Account.objectCount();
//     }
        
//     static  objectCount() {
//         this.count += 1;
//         console.log(Account.count);
//     }

//     static get count() {
//         return this.count // without this.count will be undefined.
//     }
// }

// const acc1 = new Account("Luka", "Akofiani", "lukito123");// 1
// const acc2 = new Account("Luka", "Akofiani", "lukito123");// 2

// acc1.objectCount();// ERROR!!
// Account.objectCount(); //log: 1 .// must be used class name.
// console.log(Account.count); //log: 2

// //static კუთვნლიება მარტო კლასშია ხელმისაწვდომი, მარტო კლასით შეგვიძლია ამის გამოყენება და არა რაიმე ობიექტით რომელიც შეიქმნა ამ კლასით.