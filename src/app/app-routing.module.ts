import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { MyTicketsPageComponent } from './my-tickets/my-tickets-page/my-tickets-page.component';
import { MyTicketsModule } from './my-tickets/my-tickets.module';
import { ReservationComponent } from './reservation/reservation/reservation.component';
import { UserPageComponent } from './user/user-page/user-page.component';


const routes: Routes = [
  { path: 'user', component: UserPageComponent, loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'mytickets', component: MyTicketsPageComponent, loadChildren: () => import('./my-tickets/my-tickets.module').then(m => m.MyTicketsModule)},
  { path: 'reservation/:id', component: ReservationComponent, loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule) },
  { path: 'mainpage', loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpageModule) },
  { path: 'admin', component: AdminComponent, loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpageModule) },
  { path: '**', redirectTo: 'mainpage' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
