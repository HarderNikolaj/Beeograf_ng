import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rating } from '../models/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http : HttpClient) { }

  getRatingForUser(userId : string, movieId : number) : Observable<Rating>{
    return this.http.get<Rating>(environment.baseUrl + 'ratings/user/' + userId + '/movie/' + movieId);
  }

  postRatings(ratings : Rating[]) : Observable<Rating[]>{
    return this.http.post<Rating[]>(environment.baseUrl + 'ratings', ratings);
  }

  putRatings(ratings : Rating[]) : Observable<Rating[]>{
    return this.http.put<Rating[]>(environment.baseUrl + 'ratings', ratings);
  }
}
