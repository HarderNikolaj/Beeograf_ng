import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatSelectorComponent } from './seat-selector/seat-selector.component';


const routes: Routes = [
  { path: ':id', component: SeatSelectorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
