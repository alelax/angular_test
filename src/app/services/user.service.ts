import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //users è un'array di tipo User
  users : Array<User> = [ 
    {
      name: 'Max',
      lastname: 'Rossi',
      fiscalcode: 'RJSA782RJN509',
      province: 'Roma',
      phone: '3406800149'
    },
    {
      name: 'Jack',
      lastname: 'London',
      fiscalcode: 'RJSFGT52RJ789',
      province: 'Trieste',
      phone: '3406774859'
    },
    {
      name: 'Jane',
      lastname: 'May',
      fiscalcode: 'MJSFGT587Y789',
      province: 'Madrid',
      phone: '3336874459'
    }
  ];

  constructor() { }

  getUsers(){
    return this.users;
  }

  deleteUser(user){
    let index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
}