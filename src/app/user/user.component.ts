 import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../users/user.service';

@Component({
  /* inputs : [
    'user:user-data'
  ], */
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  /* 
    altro modo per definire una variabile come input 
    e assegnarle un alias */
    @Input('user-data') user; 
  

  constructor(private service : UserService) { }

  ngOnInit() {
  }

  deleteItem() {
    this.service.deleteUser(this.user);
    
  }

}
