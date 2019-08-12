import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // properties
  // firstname: string;
  // lastname: string;
  // age: number;
  // address;
  // foo: any;
  // hasKids: boolean;
  // numberArray: number[];
  // stringArray: string[];
  // mixedArray: any[];
  // myTuple: [string, number, boolean];
  // unUsable: void;
  // u: undefined;
  // n: null;
  user: User;

  // methods
  constructor() {
    // this.firstname = 'premanshu';
    // this.lastname = 'ankit';
    // this.age = 22;

    // this.address = {
    //   street: '20th main 5th cross',
    //   city: 'bangalore',
    //   state: 'karnataka'
    // };
    // this.foo = 'random text';
    // this.hasKids = true;
    // this.numberArray = [3, 7, 98];
    // this.stringArray = ['hello', 'world'];
    // this.mixedArray = ['kohli', 'dhoni', 30, 37];
    // this.myTuple = ['ankit', 22, true];
    // this.unUsable = undefined;
    // this.u = undefined;
    // this.n = null;
    // console.log(this.addNumbers(7, 9));

  }

  // addNumbers(num1: number, num2: number): number {
  //   return num1 + num2;
  // }



  ngOnInit() {
    this.user = {
      firstname: 'premanshu',
      lastname: 'ankit',
      age: 22,
      address: {
        street: '20th main 5th cross',
        city: 'bangalore',
        state: 'karnataka'
    },
    };
  }

}
