import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Theater } from '../models/theater';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  //#region reload MovieList
  private reloadRequestedBy = new Subject<any>()

  reloadRequested = this.reloadRequestedBy.asObservable();

  requestReload(requester: any){
    this.reloadRequestedBy.next(requester)
  }
//#endregion

//#region select Theater
private selectedTheater = new Subject<Theater>()

theaterSelected = this.selectedTheater.asObservable();

selectTheater(theater: Theater){
  this.selectedTheater.next(theater)
}

//#endregion
}
