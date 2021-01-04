import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(environment.baseUrl + 'users/');
  }

  getUserById(id : string) : Observable<User>{
    return this.http.get<User>(environment.baseUrl + 'users/id/' + id);
  }

  updateUsers(users : User[]) : Observable<User[]>{
    return this.http.put<User[]>(environment.baseUrl + 'users/', users );
  }
  // deleteUser(users: User[]) : Observable<User[]>{
  //   return this.http.delete<User[]>(environment.baseUrl, {users});
  // }
  deleteUser(user: User): Observable<User[]>{
    return this.http.delete<User[]>(environment.baseUrl + "users/stringid/" + user.id);
  }

}
