import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MovieManagerComponent } from './movie-manager/movie-manager.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-manager/movie-list/movie-list.component';
import { MovieEditorComponent } from './movie-manager/movie-editor/movie-editor.component';
import { TheaterManagerComponent } from './theater-manager/theater-manager.component';
import { TheaterListComponent } from './theater-manager/theater-list/theater-list.component';
import { TheaterEditorComponent } from './theater-manager/theater-editor/theater-editor.component';


@NgModule({
  declarations: [MovieManagerComponent, AdminHeaderComponent, AdminComponent, MovieListComponent, MovieEditorComponent, TheaterManagerComponent, TheaterListComponent, TheaterEditorComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
