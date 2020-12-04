import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Booking } from '../models/booking';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http : HttpClient) { }

  createBookings(bookings : Booking[]) : Observable<Booking[]>{
    return this.http.post<Booking[]>(environment.baseUrl + 'bookings/', bookings);
  }

  getBookingsForUser(userId : string) : Observable<Ticket[]>{
    return this.http.get<Ticket[]>(environment.baseUrl + 'bookings/user/' + userId);
  }
}
