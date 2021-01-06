import { Component, OnInit } from '@angular/core';
import { resourceUsage } from 'process';
import { Seat } from 'src/app/models/seat';
import { Theater } from 'src/app/models/theater';
import { EventService } from 'src/app/services/event.service';
import { TheaterService } from 'src/app/services/theater.service';

@Component({
  selector: 'app-theater-editor',
  templateUrl: './theater-editor.component.html',
  styleUrls: ['./theater-editor.component.scss']
})
export class TheaterEditorComponent implements OnInit {
    selectedTheater: Theater = new Theater();
    seatsToBeDeleted: Seat[] = [];
  constructor(private eventService: EventService, private theaterService: TheaterService) {
    //#region EventSubscriptions
    this.eventService.theaterSelected.subscribe(
      result => {
        this.selectedTheater = this.seatsToArray(result);
      } ,
      error => console.log(error)
    );

    this.eventService.seatsChanged.subscribe(
      result => {
        this.selectedTheater.seats = this.rowsToSeats(result);
      },
      error => console.log(error)
    )

    this.eventService.seatDeleted.subscribe(
      result => this.seatsToBeDeleted = this.rowsToSeats(result)
    )

    //#endregion
   }

   rowsToSeats(rows: Seat[][]) : Seat[] {
    let seats : Seat[] = [];
    rows.forEach(row => {
      row.forEach(seat => {
        seats.push(seat);
      });
    });
    return seats;
  }

   seatsToArray(theater: Theater) : Theater {
    let rowsArray : number[] = [];
    if(theater.seats){
      theater.seats.forEach(element => {
        (rowsArray[element.row-1]) ? rowsArray[element.row-1] +1 : rowsArray[element.row-1] = 1;
      });
      theater.rowsArray = rowsArray;
    }
    return theater;
   }

   deleteTheater(){
    this.theaterService.deleteTheater(this.selectedTheater).subscribe(
      result => {
        this.eventService.requestReload(null);
        this.selectedTheater = new Theater();
      }
    );
   }

   editTheater(){
    this.theaterService.putTheaterWithSeats(this.selectedTheater, this.seatsToBeDeleted).subscribe(
      result =>  this.eventService.requestReload(null)
    )

   }

   submitNewTheater(){
     this.theaterService.postTheater(this.selectedTheater).subscribe(
       result => {
         this.selectedTheater = result;
         this.selectedTheater.seats = [];
         this.eventService.selectTheater(this.selectedTheater)
         this.eventService.requestReload(null);
       }
     )
   }

   reset(): void{
    this.selectedTheater = new Theater();
    this.eventService.selectTheater(this.selectedTheater)
   }

  ngOnInit(): void {
  }

}
