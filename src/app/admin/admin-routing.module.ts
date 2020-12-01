import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieManagerComponent } from './movie-manager/movie-manager.component';


const routes: Routes = [
  { path: '', component: MovieManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
