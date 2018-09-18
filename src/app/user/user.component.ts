import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    e assegnarle un alias 
  */
  @Input('user-data') user; 

  /*
    Definire una variabile come output è necessario per emettere un
    evento creato da noi, dobbiamo inoltre inizializzarla con l'evento. 
  */
  @Output('onDeleteUser') userDeleted = new EventEmitter();

  

  constructor(private service : UserService) { }

  ngOnInit() {
  }

  deleteItem() {
    this.service.deleteUser(this.user);
  }

  /*
    Metodo che lancia l'evento attraverso l'EventEmitter
    Bisogna poi assegnare questo evento al componente parent, che in
    questo caso è users.component
  */
  deleteUser() {
    this.userDeleted.emit(this.user);
  }

}
