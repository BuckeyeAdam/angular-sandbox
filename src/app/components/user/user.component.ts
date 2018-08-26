import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // Properties
  user: User;

  // Methods
  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: 'Adam',
      lastName: 'Strickland',
      age: 34,
      address: {
        street: '123 Angular Dr',
        city: 'Columbus',
        state: 'OH'
      }
    };
  }
}
