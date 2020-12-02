import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MovieManagerComponent } from './movie-manager/movie-manager.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-manager/movie-list/movie-list.component';
import { MovieEditorComponent } from './movie-manager/movie-editor/movie-editor.component';


@NgModule({
  declarations: [MovieManagerComponent, AdminHeaderComponent, AdminComponent, MovieListComponent, MovieEditorComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
