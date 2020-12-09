import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { EventService } from 'src/app/services/event.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-showing-manager',
  templateUrl: './showing-manager.component.html',
  styleUrls: ['./showing-manager.component.scss']
})
export class ShowingManagerComponent implements OnInit {
movies: Movie[] = [];
  constructor(private movieService: MovieService, private eventServuce: EventService) { }

  ngOnInit(): void {
  }

  getMovies(){
    this.movieService.getMovies().subscribe(
      result => this.movies = result
    )
  }

  movieSelected(movie: Movie): void {
    this.selectedMovie = movie;
  }



}
