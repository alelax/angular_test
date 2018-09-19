import { Component, OnInit, Input, Output } from '@angular/core';
import { UserInterface } from '../interfaces/userInterface';
import { User } from '../classes/User';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;

  @Output('hideForm') hideForm = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveUser() {
    alert(this.user.id);
  }

  cancel() {
    let toHide = false;
    this.hideForm.emit('false');
  }

}
