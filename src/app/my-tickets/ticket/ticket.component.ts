import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { Ticket } from 'src/app/models/ticket';
import { BookingService } from 'src/app/services/booking.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket : Ticket = new Ticket();
  @Input() canCancel : boolean = false;

  @Output() ticketChange : EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor(private bookingService : BookingService) { }

  ngOnInit(): void {
    if (this.ticket) {
      this.moviePoster = environment.moviePosters + this.ticket.show.movie.moviePoster;
    }
  }

  moviePoster;

  cancelReservation(){
    this.bookingService.deleteBooking(this.ticket.id).subscribe(
      () => this.ticketChange.emit(undefined),
      error => console.log(error)
    );
  }
}
