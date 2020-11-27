import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  userform = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    family_name : new FormControl(''),
    given_name : new FormControl('')
  });
  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }

  submitUser(){
    console.log("submitUser called");
  }
}
