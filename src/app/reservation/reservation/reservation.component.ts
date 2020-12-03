import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Show } from 'src/app/models/show';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  movieId : string;
  selectedShow : Show = new Show();


  constructor(private route : ActivatedRoute,) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
  }

  showSelected(show : Show){
    this.selectedShow = show;
  }
}
