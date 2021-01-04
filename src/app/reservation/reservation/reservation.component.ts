import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { reservationStatus } from 'src/app/models/reservationStatus.enum';
import { Seat } from 'src/app/models/seat';
import { Show } from 'src/app/models/show';
import { TheaterSeats } from 'src/app/models/theaterSeats';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  movieId : string;
  selectedShow : Show = new Show();
  seatsArray : Seat[][] = [];
  seatsModel : TheaterSeats = new TheaterSeats();

  constructor(private route : ActivatedRoute, private service : ShowService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
  }

  showSelected(show : Show){
    this.selectedShow = show;
    this.service.getSeatsForShow(this.selectedShow.id).subscribe(
      result => {
        this.seatsModel = result;
        this.mapSeats(result);
      },
      error => console.log(error)
    );
  }

  mapSeats(model : TheaterSeats){
    this.seatsArray = [];
    let maxRow = Math.max.apply(Math, this.seatsModel.seats.map(function(seat){return seat.row}));
    //loop through number of rows
    for (let row = 1; row < maxRow + 1; row++) {
      let tempRow = [];
      for (let seat of model.seats) {
        //check if seat belongs to row
        if (seat.row === row){
          let seatTaken : reservationStatus;
          //check if seat is occupied
          if (model.occupiedSeats.includes(seat.id)) {
            seatTaken = reservationStatus.reserved;
          }
          else{
            seatTaken = reservationStatus.free;
          }
          tempRow.push({id: seat.id, seat: seat.number, taken: seatTaken});
        }
      }
      this.seatsArray.push(tempRow);
    }
  }
}
