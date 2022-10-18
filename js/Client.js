'use strict';

class Client {
  constructor(firstName, lastName, phone, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.age = age;
  }

  toString() {
    return `${this.firstName}  ${this.lastName} ${this.phone}  ${this.age} <br>`;
  }
}


let eva = new Client("Eva", "Červenková", "123123123", "25");
console.log(eva)

