import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatSelectorComponent } from './seat-selector/seat-selector.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { SeatComponent } from './seat/seat.component';
import { MainpageModule } from '../mainpage/mainpage.module';
import { ReservationComponent } from './reservation/reservation.component';
import { ShowSelectorComponent } from './show-selector/show-selector.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [SeatSelectorComponent, SeatComponent, ReservationComponent, ShowSelectorComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    MainpageModule,
    MatDialogModule

  ],
  exports: [
    SeatComponent
  ]
})
export class ReservationModule { }
