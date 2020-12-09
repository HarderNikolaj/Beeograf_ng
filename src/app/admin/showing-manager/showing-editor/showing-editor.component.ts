import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-showing-editor',
  templateUrl: './showing-editor.component.html',
  styleUrls: ['./showing-editor.component.scss']
})
export class ShowingEditorComponent implements OnInit {
  selectedShow: Show = new Show();
  constructor(private eventService: EventService) {
    this.eventService.showSelected.subscribe(result => this.selectedShow = result)
   }

  ngOnInit(): void {
  }

}
