import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(){
    return [
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
  }
}
