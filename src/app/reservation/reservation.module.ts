import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatSelectorComponent } from './seat-selector/seat-selector.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { SeatComponent } from './seat/seat.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
  declarations: [SeatSelectorComponent, SeatComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule

  ]
})
export class ReservationModule { }
