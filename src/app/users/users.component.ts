import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserInterface } from '../interfaces/userInterface';
import { User } from '../classes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  title = 'Users';
  users: User[] = []; //attributo di tipo User

  @Output('userSelected') userSelected = new EventEmitter<User>();

  constructor(private service: UserService) {
    /* const service = new UserService(); */
  }
  
  ngOnInit() {
    this.users = this.service.getUsers();
  }

  onDeleteUser(user: User) {
    this.service.deleteUser(user);
  }

  onSelectUser(user: User) {
    this.userSelected.emit(user);
  }




}
