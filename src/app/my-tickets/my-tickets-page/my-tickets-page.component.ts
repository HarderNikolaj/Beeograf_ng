import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Booking } from 'src/app/models/booking';
import { Ticket } from 'src/app/models/ticket';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-my-tickets-page',
  templateUrl: './my-tickets-page.component.html',
  styleUrls: ['./my-tickets-page.component.scss']
})
export class MyTicketsPageComponent implements OnInit {

  tickets : Ticket[] = [];
  old : Ticket[];
  upcoming : Ticket[];
  constructor(private bookingService : BookingService, private auth : AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      result => {
        this.bookingService.getBookingsForUser(result.sub).subscribe(
          result =>{
            this.tickets = result;
            this.sortTickets();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );

  }

  sortTickets(){
    this.old = [];
    this.upcoming = [];
    let currentDate : Date = new Date();

    for (const ticket of this.tickets) {
      if (new Date(ticket.show.showTime) < currentDate) {
        this.old.push(ticket);
      }
      else {
        this.upcoming.push(ticket);
      }
    }

    console.log(this.old);
    console.log(this.upcoming);
  }
}
