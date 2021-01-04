import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private eventService: EventService) {
    this.eventService.reloadRequested.subscribe(
      result => this.getUsers()
     )
   }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() : void{
    this.users = [];
    this.userService.getUsers().subscribe(
      result => {
        result.forEach(user => {
          this.users.push(user);
        });
      },
      error => console.log(error)
    );
  }

  onClick(user: User){
    this.eventService.selectUser(user);
  }

}
