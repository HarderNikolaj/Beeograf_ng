import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
  private reloadRequestedBy = new Subject<any>()

  reloadRequested = this.reloadRequestedBy.asObservable();

  requestReload(requester: any){
    this.reloadRequestedBy.next(requester)
  }
}
