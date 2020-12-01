import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie : Movie;
  buttonDisabled : boolean = false;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.movie == undefined){
      this.buttonDisabled = true;
      this.movieService.getMovieById(this.route.snapshot.params['id'])
    .subscribe(
      result => {
        console.log(result);
        this.movie = result;
        this.movie.moviePoster = environment.moviePosters + this.movie.moviePoster;
      }
    );
    }
    else{
      this.movie.moviePoster = environment.moviePosters + this.movie.moviePoster;
    }
  }

}
