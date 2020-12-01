import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieManagerComponent } from './movie-manager/movie-manager.component';


const routes: Routes = [
  { path: 'movies', component: MovieManagerComponent},
  { path: 'movies', component: MovieManagerComponent},
  { path: '', redirectTo: 'movies'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
