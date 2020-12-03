import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallTracker } from 'assert';
import { Movie } from 'src/app/models/movie';
import { reservationStatus } from 'src/app/models/reservationStatus.enum';
import { Show } from 'src/app/models/show';
import { MovieService } from 'src/app/services/movie.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrls: ['./seat-selector.component.scss']
})
export class SeatSelectorComponent implements OnInit {
//#region rowsarray
  rows: { seat : number, taken : reservationStatus }[][] = [
    [
    { seat :  1, taken : reservationStatus.free },
    { seat :  2, taken : reservationStatus.free },
    { seat :  3, taken : reservationStatus.free },
    { seat :  4, taken : reservationStatus.free },
    { seat :  5, taken : reservationStatus.free },
    { seat :  6, taken : reservationStatus.free },
    { seat :  7, taken : reservationStatus.free },
    { seat :  8, taken : reservationStatus.free }
  ],
  [
    { seat :  1, taken : reservationStatus.reservePending },
    { seat :  2, taken : reservationStatus.reservePending },
    { seat :  3, taken : reservationStatus.reserved },
    { seat :  4, taken : reservationStatus.reserved },
    { seat :  5, taken : reservationStatus.reserved },
    { seat :  6, taken : reservationStatus.free },
    { seat :  7, taken : reservationStatus.free },
    { seat :  8, taken : reservationStatus.free },
  ],
  [
    { seat :  1, taken : reservationStatus.reservedByUser },
    { seat :  2, taken : reservationStatus.reservedByUser },
    { seat :  3, taken : reservationStatus.reservedByUser },
    { seat :  4, taken : reservationStatus.reservedByUser },
    { seat :  5, taken : reservationStatus.reservedByUser },
    { seat :  6, taken : reservationStatus.free },
    { seat :  7, taken : reservationStatus.free },
    { seat :  8, taken : reservationStatus.free }
  ],
  [
    { seat :  1, taken : reservationStatus.free },
    { seat :  2, taken : reservationStatus.free },
    { seat :  3, taken : reservationStatus.free },
    { seat :  4, taken : reservationStatus.free },
    { seat :  5, taken : reservationStatus.free }
  ]
  ];
  //#endregion

constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {

  }

  @Input() selectedShow : Show = new Show();
}
