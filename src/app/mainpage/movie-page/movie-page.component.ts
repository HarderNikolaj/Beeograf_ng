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
  movies : Movie[] = [
    { duration: {hours: 2,minutes: 30}, releaseDate: new Date('2020-06-06'),   id: 1, genre: 'whatever', title: "To Bee or not to Bee", moviePoster: "/assets/images/beeIcon.png" },
    { duration: {hours: 2,minutes: 30}, releaseDate: new Date('2020-06-06'),   id: 1, genre: 'whatever', title: "To Bee to Bee", moviePoster: "/assets/images/beeIcon.png" },
    { duration: {hours: 2,minutes: 30}, releaseDate: new Date('2020-06-06'),   id: 1, genre: 'whatever', title: "To Bee or not to Bee", moviePoster: "/assets/images/beeIcon.png" },
    { duration: {hours: 2,minutes: 30}, releaseDate: new Date('2020-06-06'),   id: 1, genre: 'whatever', title: "To Bee to Bee", moviePoster: "/assets/images/beeIcon.png" },
    { duration: {hours: 2,minutes: 30}, releaseDate: new Date('2020-06-06'),   id: 1, genre: 'whatever', title: "To Bee or not to Bee", moviePoster: "/assets/images/beeIcon.png" },
    { duration: {hours: 2,minutes: 30}, releaseDate: new Date('2020-06-06'),   id: 1, genre: 'whatever', title: "To Bee to Bee", moviePoster: "/assets/images/beeIcon.png" },
    { duration: {hours: 2,minutes: 30}, releaseDate: new Date('2020-06-06'),   id: 1, genre: 'whatever', title: "To Bee or not to Bee", moviePoster: "/assets/images/beeIcon.png" },
    { duration: {hours: 2,minutes: 30}, releaseDate: new Date('2020-06-06'),   id: 1, genre: 'whatever', title: "To Bee to Bee", moviePoster: "/assets/images/beeIcon.png" },
    { duration: {hours: 2,minutes: 30}, releaseDate: new Date('2020-06-06'),   id: 1, genre: 'whatever', title: "To Bee or not to Bee", moviePoster: "/assets/images/beeIcon.png" },
    { duration: {hours: 2,minutes: 30}, releaseDate: new Date('2020-06-06'),   id: 1, genre: 'whatever', title: "To Bee to Bee", moviePoster: "/assets/images/beeIcon.png" },
  ]

  constructor(private formBuilder: FormBuilder, private movieService: MovieService) {
    this.movieForm = this.formBuilder.group({
      title : new FormControl(''),
      genre : new FormControl('')
    });
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      result => {
        console.log(result);
        this.movies = result
      },
      error => console.log(error)
    );
  }

  onSubmit(value: any){
    console.log(value);
  }
}
