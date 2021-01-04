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
  rows: Seat[][] = []; //The seats that are currently visible in the seat-editor
  deletedSeats: Seat[][] = []; //Seats that have been removed in the editor, but not from the database
  selectedTheater: Theater = new Theater();

  constructor(private eventService: EventService, private theaterService: TheaterService) {
    this.eventService.theaterSelected.subscribe(
      result => {
        this.rows = [];
        this.deletedSeats = [];
        this.selectedTheater = result;
        this.rows = this.seatsToRows(this.selectedTheater);
      }
    )
   }

  ngOnInit(): void {
  }



  seatsToRows(theater: Theater) : Seat[][] {
    let rowsArray : Seat[][] = [];
    theater.seats.forEach(seat => {
      (rowsArray[seat.row-1]) ? rowsArray[seat.row-1].push(seat) : rowsArray[seat.row-1] = [seat];
    });
     return rowsArray;
   }

   addSeat(rowNumber: number) : void{
    let row = this.rows[rowNumber];
    let newSeat: Seat = new Seat();

    if(this.deletedSeats[rowNumber] && this.deletedSeats[rowNumber][0])  {
      newSeat = this.deletedSeats[rowNumber].shift();
    }
    else{
      let number = (row[row.length-1]?.number) ? row[row.length-1].number + 1 : 1;
      newSeat = {
        row: rowNumber+1,
        number: number
      }
    }
      this.rows[rowNumber].push(newSeat);
      this.eventService.changeSeats(this.rows)
   }

   removeSeat(rowNumber : number) : void{
     let removedSeat: Seat = this.rows[rowNumber].pop();
     if(removedSeat.id){
       (this.deletedSeats[rowNumber]) ? this.deletedSeats[rowNumber].push(removedSeat) : this.deletedSeats[rowNumber] = [removedSeat];
     }
     this.eventService.changeSeats(this.rows)
     this.eventService.deleteSeat(this.deletedSeats)
   }

   addRow() : void{
     this.rows.push([]);
   }

   removeRow() : void{
    let row = this.rows[this.rows.length-1];
    row.forEach(element => {
      (this.deletedSeats[element.row-1]) ? this.deletedSeats[element.row-1].push(element) : this.deletedSeats[element.row-1] = [element];
    })
    this.rows.pop();
    this.eventService.changeSeats(this.rows)
     this.eventService.deleteSeat(this.deletedSeats)
   }

}
