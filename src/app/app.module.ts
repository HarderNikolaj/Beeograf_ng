import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReservationModule } from './reservation/reservation.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageModule } from './mainpage/mainpage.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReservationModule,
    NgbModule,
    MainpageModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
