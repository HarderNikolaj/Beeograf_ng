import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTicketsRoutingModule } from './my-tickets-routing.module';
import { MyTicketsPageComponent } from './my-tickets-page/my-tickets-page.component';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [MyTicketsPageComponent, TicketComponent],
  imports: [
    CommonModule,
    MyTicketsRoutingModule
  ]
})
export class MyTicketsModule { }
