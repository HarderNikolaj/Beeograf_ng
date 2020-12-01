import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  movieForm: FormGroup;
  genres: string[] = [ 'Action', 'Natur', 'Et halvtreds karakterer langt navn (maksimum).....', 'måske skulle vi reducere maksimum?' ];
  movies : Movie[] = [];

  constructor(private formBuilder: FormBuilder, private movieService: MovieService) {
    this.movieForm = this.formBuilder.group({
      title : new FormControl(''),
      genre : new FormControl('')
    });
  }

  ngOnInit(): void {
    this.onChanges();
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

  onChanges():void{
    this.movieForm.valueChanges.subscribe((value: {genre :string, title: string}) => {
      (value.title ?  value.title = value.title : value.title = "_all_");
      ((value.genre && value.genre.toLocaleLowerCase() != "alle") ?  value.genre = value.genre : value.genre = "_all_");
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
