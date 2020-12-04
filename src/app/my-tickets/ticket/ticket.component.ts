import { Component, Input, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket : Ticket = new Ticket();
  constructor() { }

  ngOnInit(): void {
  }

}
