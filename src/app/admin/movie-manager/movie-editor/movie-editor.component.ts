import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Genre } from 'src/app/models/genre';
import { Movie } from 'src/app/models/movie';
import { EventService } from 'src/app/services/event.service';
import { GenreService } from 'src/app/services/genre.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.scss']
})
export class MovieEditorComponent implements OnInit {
  @Input() selectedMovie: Movie = new Movie();
  genres : Genre[] = [];
  lastAction : string = "";
  resultSet : Movie[] = [];
  constructor(private movieService: MovieService, private genreService: GenreService,private eventService: EventService) { }

  ngOnInit(): void {
    this.getGenre();
  }

  getGenre(){
    this.genreService.getGenres().subscribe(
      result => this.genres = result,
      error => console.log(error)
    )
  }


  submitMovie(): void {
    this.movieService.updateMovies([this.selectedMovie]).subscribe(
      result => {
        this.lastAction = "oprettet";
        this.resultSet = result;
        this.eventService.requestReload(result);
      } ,
      error => console.log(error)
    )
  }
  submitNewMovie(): void {
    this.movieService.addMovies([this.selectedMovie]).subscribe(
      result => {
        this.lastAction = "oprettet";
        this.resultSet = result;
        this.eventService.requestReload(result);
      } ,
      error => console.log(error)
    )
  }
  deleteMovie(): void {
    this.movieService.deleteMovies(this.selectedMovie).subscribe(
      result => {
        this.lastAction = "slettet",
        this.resultSet = [result];
        this.eventService.requestReload(result);
      } ,
      error => console.log(error)
    )
  }


}
