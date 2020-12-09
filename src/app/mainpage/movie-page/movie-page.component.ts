import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Genre } from 'src/app/models/genre';
import { Movie } from 'src/app/models/movie';
import { GenreService } from 'src/app/services/genre.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  movieForm: FormGroup;
  genres: Genre[] = [];
  movies : Movie[] = [];

  constructor(private formBuilder: FormBuilder, private movieService: MovieService, private genreService: GenreService) {
    this.movieForm = this.formBuilder.group({
      title : new FormControl(''),
      genre : new FormControl('')
    });
  }

  ngOnInit(): void {
    this.onChanges();
    this.getGenres();
    this.getMovies();
  }

  getGenres() : void {
    this.genreService.getGenres().subscribe(
      result => this.genres = result
    )
  }

  getMovies() : void{
    this.movieService.getMoviesWithGenres().subscribe(
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

  onChanges():void{
    this.movieForm.valueChanges.subscribe((value: {genre : Genre, title: string}) => {
      (value.title ?  value.title = value.title : value.title = "_all_");
      ((value.genre && value.genre.name.toLocaleLowerCase() != "alle") ?  value.genre = value.genre : value.genre.name = "_all_");
      this.movies = [];
      this.movieService.getMoviesSearch(value).subscribe(
        result => {
          result.forEach(element => {
            element.movie.genre = element.genre.name;
            element.movie.releaseDate = new Date(element.movie.releaseDate.toString().split('T')[0]);
            this.movies.push(element.movie);
          });
        },
        error => console.log(error)
      );
    });
  }
}
