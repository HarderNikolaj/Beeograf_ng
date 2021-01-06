import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Show } from 'src/app/models/show';
import { Theater } from 'src/app/models/theater';
import { EventService } from 'src/app/services/event.service';
import { ShowService } from 'src/app/services/show.service';
import { TheaterService } from 'src/app/services/theater.service';

@Component({
  selector: 'app-showing-editor',
  templateUrl: './showing-editor.component.html',
  styleUrls: ['./showing-editor.component.scss']
})
export class ShowingEditorComponent implements OnInit {
  selectedShow: Show = new Show();
  selectedMovie: Movie = new Movie();
  theaters: Theater[] = [];
  constructor(private eventService: EventService, private theaterService: TheaterService, private showService: ShowService) {
    this.eventService.showSelected.subscribe(result => this.selectedShow = result);
    this.eventService.movieSelected.subscribe(result => this.selectedMovie = result);
   }

  ngOnInit(): void {
    this.theaterService.getTheaters().subscribe(
      result => {
        this.theaters = result;
        console.log(this.theaters[0]);
      }
    )
  }

  submitShow(){
    this.selectedShow.movieId = this.selectedMovie.id;
    this.selectedShow.movie = null;
    this.selectedShow.theater = null;
    this.showService.postShow(this.selectedShow).subscribe(
      result => this.reset()
    );
  }

  editShow(){
    this.showService.putShow(this.selectedShow).subscribe(
      result => this.reset()
    )
  }

  deleteShow(){
    this.showService.deleteShow(this.selectedShow).subscribe(
      value => this.reset()
    )
  }

  reset(){
    this.selectedShow = new Show();
    this.eventService.selectShow(this.selectedShow);
    this.eventService.requestReload(null);
  }

}
