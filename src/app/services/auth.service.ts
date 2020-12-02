import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http : HttpClient) { }

  getToken(){

  }

  getMetadataForUser(userId, token) : Observable<any>{
    let headers : HttpHeaders = new HttpHeaders().set("Authorization", "Bearer " + token);
    console.log(headers);
    let endpoint = 'https://dev-02iexm3g.eu.auth0.com/api/v2/users/' + userId;

    return this.http.get(endpoint, {headers});
  }
}
