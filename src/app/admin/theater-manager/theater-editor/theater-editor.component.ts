import { Component, OnInit } from '@angular/core';
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

  constructor(private eventService: EventService, private theaterService: TheaterService) {
    this.eventService.theaterSelected.subscribe(
      result => {
        this.selectedTheater = this.seatsToArray(result);
      } ,
      error => console.log(error)
    );
   }

   seatsToArray(theater: Theater) : Theater {
    let rowsArray : number[] = [];
    theater.seats.forEach(element => {
      (rowsArray[element.row-1]) ? rowsArray[element.row-1]++ : rowsArray[element.row-1] = 1;
    });
    theater.rowsArray = rowsArray;
    return theater;
   }

   deleteTheater(){
    this.theaterService.deleteTheater(this.selectedTheater);
   }

   editTheater(){

   }

   submitNewTheater(){

   }

   reset(): void{
    this.selectedTheater = new Theater();
   }

  ngOnInit(): void {
  }

}
