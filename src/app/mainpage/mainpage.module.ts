import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainpageComponent, MoviePageComponent, MovieComponent],
  imports: [
    CommonModule,
    MainpageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainpageModule { }
