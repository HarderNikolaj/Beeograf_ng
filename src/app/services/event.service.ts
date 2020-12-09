import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { Seat } from '../models/seat';
import { Show } from '../models/show';
import { Theater } from '../models/theater';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  //#region reload
  private reloadRequestedBy = new Subject<any>()

  reloadRequested = this.reloadRequestedBy.asObservable();

  requestReload(requester: any){
    this.reloadRequestedBy.next(requester)
  }
//#endregion

//#region select Movie
private selectedMovie = new Subject<Movie>();
movieSelected = this.selectedMovie.asObservable();
selectMovie(movie: Movie){
  this.selectedMovie.next(movie);
}
//#endregion

//#region  select show
private selectedShow = new Subject<Show>();
showSelected = this.selectedShow.asObservable();
selectShow(show: Show){
  this.selectedShow.next(show);
}


//#endregion

//#region select Theater
private selectedTheater = new Subject<Theater>()

theaterSelected = this.selectedTheater.asObservable();

selectTheater(theater: Theater){
  this.selectedTheater.next(theater)
}

//#endregion

//#region Seats
private deletedSeats = new Subject<Seat[][]>();

seatDeleted = this.deletedSeats.asObservable();

deleteSeat(seats: Seat[][]){
  this.deletedSeats.next(seats);
}

private changedSeats = new Subject<Seat[][]>();

seatsChanged = this.changedSeats.asObservable();

changeSeats(seats: Seat[][]){
  this.changedSeats.next(seats);
}


//#endregion
}
