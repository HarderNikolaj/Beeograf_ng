import { Component, Input, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { Ticket } from 'src/app/models/ticket';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket : Ticket = new Ticket();
  constructor() { }

  ngOnInit(): void {
    this.moviePoster = environment.moviePosters + this.ticket.show.movie.moviePoster;
  }

  moviePoster;
}
