import { Component, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-manager',
  templateUrl: './movie-manager.component.html',
  styleUrls: ['./movie-manager.component.scss']
})
export class MovieManagerComponent implements OnInit {

  selectedMovie : Movie = new Movie();

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }
  movieSelected(movie: Movie): void {
    this.selectedMovie = movie;
  }


}
