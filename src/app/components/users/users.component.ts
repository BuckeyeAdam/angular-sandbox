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
  currentStyles = {};

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
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2018 08:30:00')
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
        isActive: false,
        balance: 200,
        registered: new Date('07/15/2018 08:30:00')
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
        isActive: true,
        balance: 400,
        registered: new Date('06/03/2018 3:30:00')
      }
    ];

    this.loaded = true;

    // this.addUser({
    //   firstName: 'Maverick',
    //   lastName: 'Goose'
    // });

    this.setCurrentClasses();
    this.setCurrentStyles();
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

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px'
    };
  }
}
