import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { SeatSelectorComponent } from './seat-selector/seat-selector.component';
import { ShowSelectorComponent } from './show-selector/show-selector.component';


const routes: Routes = [
  { path: ':id',
    component: ReservationComponent,
    children: [
      { path: '', component: ShowSelectorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
