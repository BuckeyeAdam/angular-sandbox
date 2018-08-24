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
  address = {
    street: '50 Main St',
    city: 'Columbus',
    state: 'OH'
  };

  // Methods
  constructor() {
    console.log('Hello user...');
  }

  showAge() {
    return this.age;
  }
}
