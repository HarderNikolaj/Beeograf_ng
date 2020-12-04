import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { reservationStatus } from 'src/app/models/reservationStatus.enum';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() taken : reservationStatus;
  @Input() seatNumber : number;
  @Output() takenChange : EventEmitter<reservationStatus> = new  EventEmitter<reservationStatus>();

  constructor() {
   }

  ngOnInit(): void {
  }

  toggleSeatSelection(){
    this.taken = this.taken === reservationStatus.free
      ? reservationStatus.reservePending
      : reservationStatus.free;

    this.takenChange.emit(this.taken);
  }
}
