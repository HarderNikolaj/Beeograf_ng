import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Show } from 'src/app/models/show';
import { EventService } from 'src/app/services/event.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-showing-list',
  templateUrl: './showing-list.component.html',
  styleUrls: ['./showing-list.component.scss']
})
export class ShowingListComponent implements OnInit {
  selectedMovie: Movie = new Movie();
  selectedShow: Show = new Show();
  futureShows: Show[] = [];
  pastShows: Show[] = [];
  constructor(private eventService: EventService, private showService: ShowService) {
    this.eventService.movieSelected.subscribe(
      result => {
        this.selectedMovie = result;
        this.showService.getShowsForMovie(result.id).subscribe(
          result => this.orderShows(result)
        )
      }
      )
   }

  ngOnInit(): void {
  }

  orderShows(shows: Show[]) : void{
    let now = new Date();
    this.futureShows = [];
    this.pastShows = [];
    shows.forEach(show => {
      if(show.showTime >= now) this.futureShows.push(show);
      else this.futureShows.push(show);
    });
  }

  onClick(show: Show) : void{
    this.eventService.selectShow(show);
  }
}
