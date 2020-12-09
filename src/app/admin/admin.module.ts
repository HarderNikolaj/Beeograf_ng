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
import { TheaterSeatingEditorComponent } from './theater-manager/theater-seating-editor/theater-seating-editor.component';
import { ReservationModule } from '../reservation/reservation.module';
import { SeatComponent } from '../reservation/seat/seat.component';
import { TheaterSeatComponent } from './theater-manager/theater-seat/theater-seat.component';
import { ShowingManagerComponent } from './showing-manager/showing-manager.component';
import { ShowingEditorComponent } from './showing-manager/showing-editor/showing-editor.component';
import { ShowingListComponent } from './showing-manager/showing-list/showing-list.component';


@NgModule({
  declarations: [
    MovieManagerComponent,
    AdminHeaderComponent,
    AdminComponent,
    MovieListComponent,
    MovieEditorComponent,
    TheaterManagerComponent,
    TheaterListComponent,
    TheaterEditorComponent,
    TheaterSeatingEditorComponent,
    TheaterSeatComponent,
    ShowingManagerComponent,
    ShowingEditorComponent,
    ShowingListComponent,
     ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReservationModule
  ]
})
export class AdminModule { }
