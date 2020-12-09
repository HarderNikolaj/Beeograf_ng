import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@auth0/auth0-angular';
import { error } from 'protractor';
import { Booking } from 'src/app/models/booking';
import { Rating } from 'src/app/models/rating';
import { Ticket } from 'src/app/models/ticket';
import { BookingService } from 'src/app/services/booking.service';
import { RatingService } from 'src/app/services/rating.service';
import { environment } from 'src/environments/environment';
import { RatingDialogComponent } from '../rating-dialog/rating-dialog.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket : Ticket = new Ticket();
  @Input() canCancel : boolean = false;
  @Input() canReview : boolean = false;

  @Output() ticketChange : EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor(private bookingService : BookingService, private ratingService : RatingService,
    private auth : AuthService, private dialog : MatDialog) { }

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

  rateMovie(){
    let rating : Rating;
    this.auth.user$.subscribe(
      user => {
        this.ratingService.getRatingForUser(user.sub, this.ticket.show.movieId).subscribe(
          result => {
            rating = result;
          },
          error => {
            if (error.status == 404){
              rating = new Rating();
              rating.userId = user.sub;
              rating.movieId = this.ticket.show.movieId;
              rating.rating = 0;
            }
          }
        ).add(
          () => {
            //open dialog here
            let dialogRef = this.dialog.open(RatingDialogComponent, {data : {rating : rating}});
            dialogRef.afterClosed().subscribe(
              result => {
                if (result){
                  //how to determine whether to put or post?
                }
              }
            );
          }
        );
      },
      error => console.log(error)
    );
  }
}
