import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedInUser : User | Employee

  constructor() { this.loggedInUser = new User() }

  ngOnInit(): void {
  }

}
