import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserInterface } from '../interfaces/userInterface';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;

  @Output('hideForm') hideForm = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveUser() {
    this.userService.updateUser(this.user)
  }

  cancel() {
    this.hideForm.emit('false');
  }

}
