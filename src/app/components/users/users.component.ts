import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = true;
  currentClasses = {};
   currentStyle = {};

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
      this.users = [
        {
          firstname: 'premanshu',
          lastname: 'ankit',
          age: 22,
          address: {
            street: '20th main 5th cross',
            city: 'bangalore',
            state: 'karnataka'
          },
          image: 'http://lorempixel.com/200/00/people/3',
          isActive: true,
        },
        {
          firstname: 'Abhishek',
          lastname: 'Das',
          age: 24,
          address: {
            street: 'channasandra',
            city: 'bangalore',
            state: 'karnataka'
          },
          image: 'http://lorempixel.com/200/200/people/3',
          isActive: false,
        },
        {
          firstname: 'rishav',
          lastname: 'raj',
          age: 19,
          address: {
            street: 'this street',
            city: 'calicut',
            state: 'kerara'
          },
          image: 'http://lorempixel.com/200/200/people/3',
          isActive: true,
        },
       ];
       this.loaded = true;
    // }, 3000);
    // this.showExtended = false;
    // this.addUser(
    //   {
    //     firstname: 'ajit',
    //     lastname: 'singh',
    //     // age: 23,
    //     // address: {
    //     //   street: 'that street',
    //     //   city: 'sahibganj',
    //     //   state: 'JH'
    //     // },
    //   },
    // );

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  // addUser(user: User) {
  //   this.users.push(user);
  // }
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    };
  }
  setCurrentStyles() {
    this.currentStyle = {
      'padding-top': this.showExtended ? '0' : '20px',
      'font-size': this.showExtended ? '' : '50px',
    };
  }

}
