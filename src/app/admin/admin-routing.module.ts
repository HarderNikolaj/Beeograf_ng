import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieManagerComponent } from './movie-manager/movie-manager.component';
import { TheaterManagerComponent } from './theater-manager/theater-manager.component';


const routes: Routes = [
  { path: 'movie', component: MovieManagerComponent},
  { path: 'theater', component: TheaterManagerComponent},
  { path: '', redirectTo: 'movie'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
