import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Show } from 'src/app/models/show';
import { MovieService } from 'src/app/services/movie.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-selector',
  templateUrl: './show-selector.component.html',
  styleUrls: ['./show-selector.component.scss']
})
export class ShowSelectorComponent implements OnInit {

  constructor(private service : ShowService, private movieService : MovieService, private route: ActivatedRoute) { }

  movieId : string;
  movieTitle : string;
  shows : Show[] = [];

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.movieService.getMovieById(+this.movieId).subscribe(
      result => this.movieTitle = result.title,
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

  @Output() showSelectedEvent: EventEmitter<Show> = new EventEmitter<Show>();

}
