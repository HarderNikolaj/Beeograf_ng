import { Component, Input, OnInit } from '@angular/core';
import { reservationStatus } from '../../types/types';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() taken : reservationStatus;
  @Input() seatNumber : number;


  constructor() {
   }

  ngOnInit(): void {
  }

}
