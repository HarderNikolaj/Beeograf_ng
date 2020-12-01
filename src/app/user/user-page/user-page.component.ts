import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  currentUser : User;

  constructor(public auth : AuthService, private service : UserService, private router : Router) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      x => {
        this.service.getUserById(x.sub).subscribe(
          user => {
            this.currentUser = user,
          error => console.log(error)
      }),
      error => console.log(error);
    });
  }

  submitUser(){
    let userArr : User[] = [this.currentUser];
    this.service.updateUsers(userArr).subscribe();

    this.router.navigate(['/mainpage']);
  }


}
