import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../models/genre';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getMovies(): Observable<{movie: Movie, genre: Genre}[]>{
    return this.http.get<{movie, genre}[]>(environment.baseUrl + "movies/withgenre");
  }

  getMoviesSearch(search: {genre: string, title: string}): Observable<{movie: Movie, genre: Genre}[]>{
    return this.http.get<{movie, genre}[]>(environment.baseUrl + "movies/withgenre/genretitle/" + search.genre + "/" + search.title);
  }

  getMovieById(id: number): Observable<Movie>{
    return this.http.get<Movie>(environment.baseUrl + "movies/" + id);
  }

}
