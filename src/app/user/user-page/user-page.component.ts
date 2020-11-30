import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Employee } from 'src/app/models/employee';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  currentUser : User | Employee;

  userform = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    family_name : new FormControl(''),
    given_name : new FormControl('')
  });
  constructor(public auth : AuthService, private service : UserService) { }

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
    console.log(this.currentUser);
  }
}
