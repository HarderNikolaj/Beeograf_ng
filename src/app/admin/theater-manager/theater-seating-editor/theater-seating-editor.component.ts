import { Component, OnInit } from '@angular/core';
import { Seat } from 'src/app/models/seat';
import { Theater } from 'src/app/models/theater';
import { EventService } from 'src/app/services/event.service';
import { TheaterService } from 'src/app/services/theater.service';

@Component({
  selector: 'app-theater-seating-editor',
  templateUrl: './theater-seating-editor.component.html',
  styleUrls: ['./theater-seating-editor.component.scss']
})
export class TheaterSeatingEditorComponent implements OnInit {
  rows: Seat[][] = [];
  selectedTheater: Theater = new Theater();

  constructor(private eventService: EventService, private theaterService: TheaterService) {
    this.eventService.theaterSelected.subscribe(
      result => {
        this.selectedTheater = result;
        this.rows = this.seatsToRows(this.selectedTheater);
      }
    )
   }

  ngOnInit(): void {
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

  seatsToRows(theater: Theater) : Seat[][] {
    let rowsArray : Seat[][] = [];
    theater.seats.forEach(element => {
      (rowsArray[element.row-1]) ? rowsArray[element.row-1].push(element) : rowsArray[element.row-1] = [element];
    });
     return rowsArray;
   }

   addSeat(rowNumber: number){
     let row = this.rows[rowNumber];
     let number = (row[row.length-1].number) ? 2 : 1;
     let newSeat : Seat = {
       row: rowNumber,
       number: number
      }

      this.rows[rowNumber].push(newSeat);
   }

   removeSeat(row : number){
     this.rows[row].pop();
   }

}
