import { Component, OnInit } from '@angular/core';
import { Theater } from 'src/app/models/theater';
import { EventService } from 'src/app/services/event.service';
import { TheaterService } from 'src/app/services/theater.service';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.scss']
})
export class TheaterListComponent implements OnInit {

  theaters: Theater[] = [];

  constructor(private theaterService: TheaterService, private eventService: EventService) { }

  ngOnInit(): void {
    this.getTheaters();
  }
  getTheaters() : void{
    this.theaters = [];
    this.theaterService.getTheatersWithSeats().subscribe(
      result => {
        result.forEach(element => {
          this.theaters.push(element);
        });
      },
      error => console.log(error)
    );
  }

  onClick(theater: Theater){
    this.eventService.selectTheater(theater);
  }

}
