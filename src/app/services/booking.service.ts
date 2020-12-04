import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http : HttpClient) { }

  createBookings(bookings : Booking[]) : Observable<Booking[]>{
    return this.http.post<Booking[]>(environment.baseUrl + 'bookings/', bookings);
  }
}
