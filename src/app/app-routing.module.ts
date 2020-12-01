import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatSelectorComponent } from './reservation/seat-selector/seat-selector.component';
import { UserPageComponent } from './user/user-page/user-page.component';


const routes: Routes = [
  { path: 'user', component: UserPageComponent, loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'reservation', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule) },
  { path: 'mainpage', loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpageModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpageModule) },
  { path: '**', redirectTo: 'mainpage' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
