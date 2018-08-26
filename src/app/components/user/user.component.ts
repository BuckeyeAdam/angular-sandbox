import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // Properties
  firstName: string;
  lastName: string;
  age: number;
  address;

  // Methods
  constructor() {
    console.log('Hello user...');
    this.firstName = 'Adam';
    this.lastName = 'Strickland';
    this.age = 34;

    this.address = {
      street: '123 Angular Dr',
      city: 'Columbus',
      state: 'OH'
    };
  }

  showAge() {
    return this.age;
  }
}
