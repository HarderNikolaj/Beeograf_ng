import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.scss']
})
export class MovieEditorComponent implements OnInit {
  @Input() selectedMovie: Movie = new Movie();
  resultSet : Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }


  submitMovie(): void {
    this.movieService.updateMovies([this.selectedMovie]).subscribe(
    )
  }
  submitNewMovie(): void {
    this.movieService.addMovies([this.selectedMovie]).subscribe(
      result => this.resultSet = result,
      error => console.log(error)
    )
  }


}
