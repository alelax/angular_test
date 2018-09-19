import { Component } from '@angular/core';
import { UserInterface } from './interfaces/userInterface';
import { log } from 'util';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UMS';
  toUpdateUser: User = new User();
  showForm: boolean = false;

  userSelected(user: User) {
    this.showForm = true;
    this.toUpdateUser = user;
  }

  toHideForm() {
    this.showForm = false;
  }

}
