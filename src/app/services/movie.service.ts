import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../models/genre';


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

  updateMovies(movies: Movie[]): Observable<Movie[]> {
    return this.http.put<Movie[]>(environment.baseUrl + "movies/", movies);
  }

  addMovies(movies: Movie[]): Observable<Movie[]>{
    return this.http.post<Movie[]>(environment.baseUrl + "movies/", movies);
  }

  deleteMovies(movie: Movie): Observable<Movie>{
    return this.http.delete<Movie>(environment.baseUrl + "movies/" + movie.id);
  }

}
