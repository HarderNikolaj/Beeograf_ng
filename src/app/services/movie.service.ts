import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(environment.baseUrl + "movies");
  }

  getMovieById(id: number): Observable<Movie>{
    return this.http.get<Movie>(environment.baseUrl + "movies/" + id);
  }

}
