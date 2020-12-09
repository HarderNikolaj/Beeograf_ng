import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';
import { Movie } from 'src/app/models/movie';
import { Rating } from 'src/app/models/rating';
import { Show } from 'src/app/models/show';
import { MovieService } from 'src/app/services/movie.service';
import { RatingService } from 'src/app/services/rating.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-selector',
  templateUrl: './show-selector.component.html',
  styleUrls: ['./show-selector.component.scss']
})
export class ShowSelectorComponent implements OnInit {

  constructor(private service : ShowService, private movieService : MovieService,
     private route: ActivatedRoute, private ratingService : RatingService) { }

  movieId : string;
  movieTitle : string;
  avgRating : number;
  shows : Show[] = [];

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.movieService.getMovieById(+this.movieId).subscribe(
      result => this.movieTitle = result.title,
      error => console.log(error)
    );

    this.ratingService.getRatingsForMovie(+this.movieId).subscribe(
      result => this.calculateAverageRating(result),
      error => console.log(error)
    );

    this.service.getShowsForMovie(+this.movieId)
      .subscribe(
      result => this.shows = result,
      error => console.log(error)
      );
  }

  onClick(show){
    this.showSelectedEvent.emit(show);
  }

  calculateAverageRating(ratings : Rating[]) {
    let sum : number = 0;
    for (let rating of ratings) {
      sum += rating.rating1;
    }

    this.avgRating = sum / ratings.length;
    console.log('average: ' + this.avgRating);
  }

  @Output() showSelectedEvent: EventEmitter<Show> = new EventEmitter<Show>();

}
