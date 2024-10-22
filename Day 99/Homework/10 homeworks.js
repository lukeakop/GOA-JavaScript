// 1) Create a Class with Public Properties
// Define a Car class with public properties make and model. Create an instance and access these properties.

class Car {
    constructor (make, model) {
        this.make = make;
        this.model = model;
    }
}


// 2) Use Private Properties
// Define a BankAccount class where balance is a private property. Implement a public method to deposit and withdraw money from the account.

class BankAccount {
    #balance

    constructor() {
        this.#balance = 0;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }
}


// 3) Static Methods and Properties
// Create a MathOperations class with a static method add() that adds two numbers. Also, define a static property PI representing the value of Pi.

class MathOperations {
    static PI = 3.14;
    
    static add(a, b) {
        return a + b;
    }
}


// 4) Use Getters and Setters
// Define a Rectangle class with properties width and height. Use a getter to calculate and return the area of the rectangle. Also, include a setter that ensures width and height are always positive numbers.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(value) {
        if (value > 0) {
            this.width = value;
        }
    }

    set height(value) {
        if (value > 0) {
            this.height = value;
        }
    }

    get area() {
        return this.width * this.height;
    }
}

// 5) Private Methods
// Create a User class where a private method validatePassword() checks the strength of the password. The method should only be used internally when setting a password.

class User {
    #password;
    set password(value) {
        if (this.validatePassword(value)) {
            this.#password = value;
        }
    }

    validatePassword(password) {
        // Password validation logic
        return true;
    }
}


// 6) Private Properties with Getters and Setters
// Define a Book class where the title is public, but the number of pages is private. Implement getters and setters to access and modify the number of pages.

class Book {
    #pages;

    constructor(title, pages) {
        this.title = title;
        this.#pages = pages;
    }

    set pages(value) {
        if(value > 0) {
            this.#pages = value;
        }
    }
}

// 7) Static Method for Instance Counting
// Create a Player class where each time an instance is created, a static method getPlayerCount() keeps track of how many players have been created.

class Player {
    static playerCount = 0;

    constructor() {
        Player.playerCount++;
    }


    static getPlayerCount() {
        return Player.playerCount;
    }


}

// 8) Class Inheritance with Private Properties
// Create a Vehicle class with private properties like speed. Then, create a Bike subclass that can access public methods to modify or retrieve the speed.


class Vehicle {
    #speed;

    constructor(speed) {
        this.#speed = speed;
    }

    get speed() {
        return this.#speed;
    }

    set speed(value) {
        this.#speed = value;
    }

    accelerate() {
        this.#speed += 10;
    }

    brake() {
        this.#speed -= 10;
    }

    stop() {
        this.#speed = 0;
    }
}

// 9) Static Method for Comparison
// Define a Student class with a static method compareGrades(student1, student2) that compares the grades of two student instances.


class Student {

    static compareGrades(student1, student2) {
        return student1.grade - student2.grade;
    }
}

