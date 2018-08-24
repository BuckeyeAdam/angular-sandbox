import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // Properties
  firstName = 'Adam';
  lastName = 'Strickland';
  age = 34;

  // Methods
  constructor() {
    console.log('Hello user...');
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);
    this.sayHello();
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }
}
