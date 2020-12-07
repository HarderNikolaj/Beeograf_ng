import { Component, Input, OnInit } from '@angular/core';
import { Seat } from 'src/app/models/seat';

@Component({
  selector: 'app-theater-seat',
  templateUrl: './theater-seat.component.html',
  styleUrls: ['./theater-seat.component.scss']
})
export class TheaterSeatComponent implements OnInit {
  @Input() seat : Seat;
  constructor() { }

  ngOnInit(): void {
  }

}
