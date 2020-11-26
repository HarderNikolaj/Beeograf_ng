import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatSelectorComponent } from './reservation/seat-selector/seat-selector.component';


const routes: Routes = [
  { path: 'reservation', component: SeatSelectorComponent, loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule) },
  { path: 'mainpage', loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpageModule) },
  { path: '', loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpageModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
