import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/models/show';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-selector',
  templateUrl: './show-selector.component.html',
  styleUrls: ['./show-selector.component.scss']
})
export class ShowSelectorComponent implements OnInit {

  constructor(private service : ShowService, private route: ActivatedRoute) { }

  movieId : string;
  shows : Show[] = [];

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.service.getShowsForMovie(+this.movieId)
      .subscribe(
      result => {console.log(result); this.shows = result},
      error => console.log(error)
      );
  }

  onClick(show){
    this.showSelectedEvent.emit(show);
  }

  @Output() showSelectedEvent: EventEmitter<Show> = new EventEmitter<Show>();

}
