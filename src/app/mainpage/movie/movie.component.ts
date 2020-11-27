import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie : Movie;

  constructor() { }

  ngOnInit(): void {
    this.movie.moviePoster = environment.moviePosters + this.movie.moviePoster;
  }

}
