import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReservationModule } from './reservation/reservation.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageModule } from './mainpage/mainpage.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessDialogComponent } from './reservation/success-dialog/success-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessDialogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReservationModule,
    NgbModule,
    MainpageModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-02iexm3g.eu.auth0.com',
      clientId: 'twZlY01w6BPrldPQd0VFyVI8m2lXJsNc'
    }),
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    SuccessDialogComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
