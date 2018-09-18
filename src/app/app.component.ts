import { Component } from '@angular/core';
import { User } from './interfaces/user';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UMS';
  toUpdateUser : User;

  userSelected(user: User) {
    this.toUpdateUser = user;
    console.log(this.toUpdateUser);
  }

}
