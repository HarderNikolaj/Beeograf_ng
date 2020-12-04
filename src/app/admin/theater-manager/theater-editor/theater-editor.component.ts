import { Component, OnInit } from '@angular/core';
import { Theater } from 'src/app/models/theater';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-theater-editor',
  templateUrl: './theater-editor.component.html',
  styleUrls: ['./theater-editor.component.scss']
})
export class TheaterEditorComponent implements OnInit {
  selectedTheater: Theater = new Theater();
  constructor(private eventService: EventService) {
    this.eventService.theaterSelected.subscribe(
      result => this.selectedTheater = result,
      error => console.log(error)
    );
   }

   deleteTheater(){

   }

   editTheater(){

   }

   submitNewTheater(){

   }

  ngOnInit(): void {
  }

}
