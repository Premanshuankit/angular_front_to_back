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
        },
       ];
       this.loaded = true;
    // }, 3000);
    // this.showExtended = false;
    this.addUser(
      {
        firstname: 'ajit',
        lastname: 'singh',
        // age: 23,
        // address: {
        //   street: 'that street',
        //   city: 'sahibganj',
        //   state: 'JH'
        // },
      },
    );
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
