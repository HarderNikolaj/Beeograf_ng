import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {
  selectedUser: User = new User();
  constructor(private userService: UserService, private eventService: EventService) {
    this.eventService.userSelected.subscribe(user =>
      this.selectedUser = user);
   }

  ngOnInit(): void {
  }

  deleteUser(){
    this.userService.deleteUser(this.selectedUser).subscribe(
      result => {
        this.eventService.requestReload(null);
        this.selectedUser = new User();
      }
    );
   }

   editUser(){
    this.userService.updateUsers([this.selectedUser]).subscribe(
      result =>  this.eventService.requestReload(null)
    )

   }


   reset(): void{
    this.selectedUser = new User();
    this.eventService.selectUser(this.selectedUser)
   }

}
