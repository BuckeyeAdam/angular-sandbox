import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};

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
        },
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true
      },
      {
        firstName: 'Kylo',
        lastName: 'Ren',
        age: 30,
        address: {
          street: '123 Darkside Dr',
          city: 'San Diego',
          state: 'CA'
        },
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false
      },
      {
        firstName: 'Ricky',
        lastName: 'Bobby',
        age: 43,
        address: {
          street: '123 Road Dr',
          city: 'Bacon Banana',
          state: 'FL'
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true
      }
    ];

    this.loaded = true;

    // this.addUser({
    //   firstName: 'Maverick',
    //   lastName: 'Goose'
    // });

    this.setCurrentClasses();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    };
  }
}
