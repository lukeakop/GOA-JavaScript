class UserInfo {
    //Public fields:
    firstname;
    lastname;
    sex;

    //Private fields:
    #age = 0;

    constructor(firstname, lastname, age, sex) { //მოვახდინეთ ინიციალიზება ანუ ობიექტზე კუვნილებების მინიჭება.
        this.firstnameme = firstname;
        this.lastname = lastname;   //this - ი მიუტითებს იმ ახალ ობიექტს რომელსაც new ოპერატორი ქმნი
        this.#age = age; 
        this.sex = sex;
    }

    set Age(newAge) {
        this.#age = newAge; // ამის მეშვეობით ჩვენ შეგვიძლია შევცვალოთ age კლასის გარეთაც
    }

    get Age() {
        return this.#age //ამის მეშვეობით ჩვენ შეგვიძლია გამოვიტანოთ პირადული ველი კლასის გარეთაც.
    }

    static age = 0

    static userAge() { // static გვითვლის რაოდენობას და თვალყურს ადევნებს მას.
        return `this user is ${this.age} years old`
    }



}