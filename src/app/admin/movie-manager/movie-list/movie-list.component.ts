import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  @Output() movieSelectedEvent = new EventEmitter<Movie>();

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies() : void{
    this.movieService.getMovies().subscribe(
      result => {
        result.forEach(element => {
          element.movie.genre = element.genre.name;
          element.movie.releaseDate = new Date(element.movie.releaseDate.toString().split('T')[0]);
          this.movies.push(element.movie);
        });
      },
      error => console.log(error)
    );
  }

  onClick(movie: Movie){
    this.movieSelectedEvent.emit(movie);
  }

}
