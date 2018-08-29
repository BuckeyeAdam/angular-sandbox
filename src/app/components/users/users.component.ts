import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() {}

  ngOnInit() {
    console.log('init...');
    this.users = [
      {
        firstName: 'Adam',
        lastName: 'Strickland',
        age: 34,
        address: {
          street: '123 Angular Dr',
          city: 'Columbus',
          state: 'OH'
        }
      },
      {
        firstName: 'Kylo',
        lastName: 'Ren',
        age: 30,
        address: {
          street: '123 Darkside Dr',
          city: 'San Diego',
          state: 'CA'
        }
      },
      {
        firstName: 'Ricky',
        lastName: 'Bobby',
        age: 43,
        address: {
          street: '123 Road Dr',
          city: 'Bacon Banana',
          state: 'FL'
        }
      }
    ];

    this.addUser({
      firstName: 'Maverick',
      lastName: 'Goose',
      age: 28,
      address: {
        street: '123 Top Gun Dr',
        city: 'Awesomeness',
        state: 'CA'
      }
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
