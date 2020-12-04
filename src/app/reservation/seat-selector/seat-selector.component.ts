import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { CallTracker } from 'assert';
import { error } from 'protractor';
import { Booking } from 'src/app/models/booking';
import { Movie } from 'src/app/models/movie';
import { reservationStatus } from 'src/app/models/reservationStatus.enum';
import { Seat } from 'src/app/models/seat';
import { Show } from 'src/app/models/show';
import { TheaterSeats } from 'src/app/models/theaterSeats';
import { BookingService } from 'src/app/services/booking.service';
import { MovieService } from 'src/app/services/movie.service';
import { ShowService } from 'src/app/services/show.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrls: ['./seat-selector.component.scss']
})
export class SeatSelectorComponent implements OnInit {

constructor(private auth : AuthService, private bookingService : BookingService, private router : Router, private dialog : MatDialog) { }

  currentUserId : string;

  ngOnInit(): void {
    this.auth.user$.subscribe(
      result => this.currentUserId = result.sub,
      error => console.log(error)
    );
  }

  submitReservation(){
    let bookings : Booking[] = [];
    for (const row of this.seatsArray) {
      for (const seat of row) {
        if (seat.taken === reservationStatus.reservePending){
          let booking : Booking = new Booking();
          booking.seatId = seat.id;
          booking.showId = this.selectedShow.id;
          booking.userId = this.currentUserId;
          bookings.push(booking);
        }
      }
    }
    if (bookings.length > 0){
      this.bookingService.createBookings(bookings).subscribe(
        result => {
          let dialogRef = this.dialog.open(SuccessDialogComponent, {data : {quantity : result.length}});
          dialogRef.afterClosed().subscribe(
            result => this.router.navigate(['/mainpage'])
          );
        },
        error => console.log(error)
      );
    }
  }

  @Input() selectedShow : Show = new Show();
  @Input() seatsModel : TheaterSeats = new TheaterSeats();
  @Input() seatsArray : { id : number, seat : number, taken : reservationStatus }[][] = [];
}
