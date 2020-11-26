import { Component, OnInit } from '@angular/core';
import { CallTracker } from 'assert';
import { Movie } from 'src/app/models/movie';
import { reservationStatus } from '../../types/types';

@Component({
  selector: 'app-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrls: ['./seat-selector.component.scss']
})
export class SeatSelectorComponent implements OnInit {
movie : Movie = { id: 1, title: "Anna er lav", genre: "Underholdning", imagePath: '/assets/images/beeIcon.png', details: "a bunch of text about the movie that makes people want to watch it like a lot really greate awesome stuff no i'm not drunk you're drunk"};
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

constructor() { }

  ngOnInit(): void {
  }

}
